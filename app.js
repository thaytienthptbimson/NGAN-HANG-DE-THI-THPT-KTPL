/* =========================================================================
   FILE XỬ LÝ LOGIC CHÍNH (app.js)
   Hệ thống Luyện thi Tốt nghiệp THPT môn GDKT&PL 2026
========================================================================= */

// Đảm bảo appDatabase tồn tại để tiếp nhận dữ liệu từ các file data_*.js
window.appDatabase = window.appDatabase || {
    khoi10: {},
    khoi11: {},
    khoi12: {},
    mocktest: {}
};

let currentSection = 'khoi12'; 
let currentTopicId = null;
let currentExerciseType = null; 
let timerInterval = null;
let timeLeft = 0;
let isSubmitted = false;

document.addEventListener('DOMContentLoaded', () => { 
    selectSection('khoi12'); 
});

function selectSection(section) {
    currentSection = section;
    const tabs = ['khoi10', 'khoi11', 'khoi12', 'mocktest'];
    tabs.forEach(t => {
        const tab = document.getElementById('tab-' + t);
        if(tab) {
            tab.className = t === section 
                ? "px-5 py-2 bg-gray-50 text-violet-900 font-bold rounded-md shadow-sm text-sm transition-colors"
                : "px-5 py-2 bg-white/20 hover:bg-white/90 hover:text-violet-900 font-semibold rounded-md text-sm transition-colors";
        }
    });

    let title = section === 'mocktest' ? "NGÂN HÀNG ĐỀ THI THỬ" : `NGÂN HÀNG CÂU HỎI LỚP ${section.replace('khoi', '')}`;
    document.getElementById('sidebar-title').innerText = title;
    
    renderSidebar();
    document.getElementById('test-screen').classList.add('hidden-element');
    document.getElementById('result-screen').classList.add('hidden-element');
    document.getElementById('welcome-screen').classList.remove('hidden-element');
}

function renderSidebar() {
    const container = document.getElementById('sidebar-container');
    container.innerHTML = '';

    if (currentSection.startsWith('khoi')) {
        const topics = Object.keys(window.appDatabase[currentSection]);
        if(topics.length === 0) {
            container.innerHTML = `<div class="p-4 text-sm text-gray-500 italic text-center">Dữ liệu đang được cập nhật...</div>`;
            return;
        }

        topics.forEach(topicId => {
            const topic = window.appDatabase[currentSection][topicId];
            const div = document.createElement('div');
            div.className = 'border-b border-gray-200';
            div.innerHTML = `
                <div class="px-4 py-3 font-bold text-gray-700 cursor-pointer flex justify-between items-center hover:bg-violet-50 transition-colors" onclick="toggleSidebarMenu('menu-${currentSection}-${topicId}')">
                    <span>${topic.title}</span> <span class="text-[10px] text-gray-400 transition-transform duration-200" id="icon-${currentSection}-${topicId}">▼</span>
                </div>
                <div id="menu-${currentSection}-${topicId}" class="flex flex-col bg-white border-t border-gray-100 hidden-element">
                    <button onclick="startTest('${currentSection}', ${topicId}, 'mcq')" class="text-left px-6 py-3 text-sm border-b border-gray-50 hover:bg-violet-50 text-gray-600 hover:text-violet-700 transition-colors">Luyện Trắc nghiệm (Nhiều lựa chọn)</button>
                    <button onclick="startTest('${currentSection}', ${topicId}, 'tf')" class="text-left px-6 py-3 text-sm border-b border-gray-50 hover:bg-violet-50 text-gray-600 hover:text-violet-700 transition-colors">Luyện Đúng/Sai</button>
                    <button onclick="startTest('${currentSection}', ${topicId}, 'test')" class="text-left px-6 py-3 text-sm border-b border-gray-50 hover:bg-violet-50 font-semibold text-fuchsia-600 hover:text-fuchsia-700 transition-colors">Bài kiểm tra Đơn vị</button>
                </div>
            `;
            container.appendChild(div);
        });
    } else {
        const div = document.createElement('div');
        div.className = 'flex flex-col bg-white';
        for (let t = 1; t <= 10; t++) {
            let hasData = window.appDatabase.mocktest[t] && window.appDatabase.mocktest[t].length > 0;
            let label = hasData ? `Đề thi thử Tốt nghiệp số ${t}` : `Đề thi thử Tốt nghiệp số ${t} (Đang cập nhật)`;
            let onClick = hasData ? `onclick="startTest('mocktest', null, ${t})"` : `onclick="alert('Đề thi này đang được cập nhật dữ liệu!')"`;
            let textClass = hasData ? `font-semibold text-gray-700 hover:text-violet-800` : `text-gray-400 cursor-not-allowed`;
            div.innerHTML += `<button ${onClick} class="text-left px-6 py-4 text-sm hover:bg-violet-50 border-b border-gray-100 transition-colors ${textClass}">${label}</button>`;
        }
        container.appendChild(div);
    }
}

function toggleSidebarMenu(id) {
    const el = document.getElementById(id);
    el.classList.toggle('hidden-element');
    const icon = document.getElementById(id.replace('menu-', 'icon-'));
    if(icon) {
        if(el.classList.contains('hidden-element')) icon.style.transform = 'rotate(0deg)';
        else icon.style.transform = 'rotate(180deg)';
    }
}

function startTest(section, topicId, exerciseType) {
    currentSection = section; 
    currentTopicId = topicId; 
    currentExerciseType = exerciseType; 
    isSubmitted = false;

    document.getElementById('welcome-screen').classList.add('hidden-element');
    document.getElementById('result-screen').classList.add('hidden-element');
    document.getElementById('test-screen').classList.remove('hidden-element');
    document.getElementById('submit-btn').classList.remove('hidden-element');
    
    if (section.startsWith('khoi')) {
        let typeStr = exerciseType === 'mcq' ? "Luyện Trắc nghiệm" : (exerciseType === 'tf' ? "Luyện Đúng/Sai" : "Bài kiểm tra Đơn vị");
        document.getElementById('current-test-title').innerText = `${window.appDatabase[section][topicId].title}`;
        document.getElementById('current-test-subtitle').innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg> ${typeStr}
        `;
        resetTimer(45); 
    } else {
        document.getElementById('current-test-title').innerText = `Đề thi thử Tốt nghiệp THPT 2026 - Đề số ${exerciseType}`;
        document.getElementById('current-test-subtitle').innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg> Môn: Giáo dục Kinh tế và Pháp luật (4 Mức độ Nhận thức)
        `;
        resetTimer(50); 
    }
    renderTestContent();
    startTimer();
}

function renderTestContent() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    
    let questions = [];
    if (currentSection.startsWith('khoi')) {
        const topicData = window.appDatabase[currentSection][currentTopicId];
        if (topicData && topicData.exercises) {
            if (currentExerciseType === 'test') {
                // Tự động gộp dữ liệu mà không cần tạo mảng riêng trong file data
                questions = [
                    ...(topicData.exercises.mcq || []),
                    ...(topicData.exercises.tf || [])
                ];
            } else {
                questions = topicData.exercises[currentExerciseType] || [];
            }
        }
    } else {
        questions = window.appDatabase.mocktest[currentExerciseType] || [];
    }

    if (questions.length === 0) {
        container.innerHTML = `<div class="bg-gray-50 rounded-2xl py-12 text-center border-2 border-dashed border-gray-300"><p class="text-gray-500 font-bold text-lg">Đang cập nhật câu hỏi cho phần này...</p></div>`;
        document.getElementById('submit-btn').classList.add('hidden-element'); 
        clearInterval(timerInterval);
        return;
    }

    let html = '';
    let phan1Html = '';
    let phan2Html = '';
    let mcqCounter = 1;
    let tfCounter = 1;

    questions.forEach((q, index) => {
        if (q.type === 'mcq') {
            const labels = ['A', 'B', 'C', 'D'];
            let optionsHtml = '';
            q.options.forEach((opt, oIdx) => {
                optionsHtml += `
                    <label class="option-label flex items-start space-x-3 p-4 rounded-xl border border-gray-200 bg-gray-50/50 w-full cursor-pointer" id="box_q_${index}_opt_${oIdx}">
                        <input type="radio" name="q_${index}" value="${oIdx}" class="mt-1 w-5 h-5 text-violet-600 flex-shrink-0 cursor-pointer focus:ring-violet-500">
                        <span class="flex-grow text-gray-800 text-base leading-snug" id="span_q_${index}_opt_${oIdx}">
                            <strong class="text-violet-900 mr-1">${labels[oIdx]}.</strong> ${opt}
                        </span>
                    </label>
                `;
            });
            phan1Html += `
                <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mb-6 question-item hover:shadow-md transition-shadow" data-index="${index}" data-type="mcq" data-ans="${q.answer}">
                    <div class="mb-5 flex items-start gap-2">
                        <span class="font-black text-violet-800 text-lg flex-shrink-0 bg-violet-100 px-3 py-1 rounded-lg">Câu ${mcqCounter}</span> 
                        <span class="text-lg font-semibold text-gray-800 ml-1 pt-1 leading-relaxed">${q.text}</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${optionsHtml}</div>
                </div>
            `;
            mcqCounter++;
        } 
        else if (q.type === 'tf') {
            let optionsHtml = '';
            q.options.forEach((opt, oIdx) => {
                optionsHtml += `
                    <div class="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl border border-gray-200 bg-gray-50/80 mb-3 tf-option transition-colors" id="box_q_${index}_tf_${oIdx}" data-ans="${opt.answer}">
                        <span class="flex-grow text-gray-800 mb-3 md:mb-0 md:mr-6 text-base leading-relaxed"><strong>${['a', 'b', 'c', 'd'][oIdx]})</strong> ${opt.text.replace(/^[a-d]\)\s*/, '').replace(/^\(.*\)\s*/, '')}</span>
                        <div class="flex space-x-6 flex-shrink-0 bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">
                            <label class="flex items-center space-x-2 cursor-pointer hover:bg-green-50 px-2 py-1 rounded transition-colors">
                                <input type="radio" name="q_${index}_tf_${oIdx}" value="true" class="w-5 h-5 text-green-600 focus:ring-green-500">
                                <span class="font-bold text-green-700">Đúng</span>
                            </label>
                            <label class="flex items-center space-x-2 cursor-pointer hover:bg-red-50 px-2 py-1 rounded transition-colors">
                                <input type="radio" name="q_${index}_tf_${oIdx}" value="false" class="w-5 h-5 text-red-600 focus:ring-red-500">
                                <span class="font-bold text-red-700">Sai</span>
                            </label>
                        </div>
                    </div>
                `;
            });
            phan2Html += `
                <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mb-6 question-item hover:shadow-md transition-shadow" data-index="${index}" data-type="tf">
                    <div class="mb-5 flex items-start gap-2">
                        <span class="font-black text-fuchsia-800 text-lg flex-shrink-0 bg-fuchsia-100 px-3 py-1 rounded-lg">Câu ${tfCounter}</span> 
                        <span class="text-lg font-semibold ml-1 pt-1 leading-relaxed text-gray-800">${q.text}</span>
                    </div>
                    <div class="flex flex-col">${optionsHtml}</div>
                </div>
            `;
            tfCounter++;
        }
    });

    if(phan1Html !== '') html += `
        <div class="flex items-center gap-2 mb-6 mt-2">
            <div class="h-8 w-2 bg-violet-600 rounded-full"></div>
            <h3 class="text-xl font-black uppercase text-gray-800 tracking-wide">Phần I: Câu hỏi trắc nghiệm nhiều phương án</h3>
        </div>
        ${phan1Html}
    `;
    if(phan2Html !== '') html += `
        <div class="flex items-center gap-2 mb-6 mt-12">
            <div class="h-8 w-2 bg-fuchsia-600 rounded-full"></div>
            <h3 class="text-xl font-black uppercase text-gray-800 tracking-wide">Phần II: Câu trắc nghiệm Đúng/Sai</h3>
        </div>
        ${phan2Html}
    `;

    container.innerHTML = html;
}

function submitTest() {
    if(isSubmitted) return;
    clearInterval(timerInterval);
    isSubmitted = true;
    document.getElementById('submit-btn').classList.add('hidden-element');

    let totalScore = 0;
    let maxScore = 0;

    document.querySelectorAll('.question-item').forEach(el => {
        const index = el.getAttribute('data-index');
        const type = el.getAttribute('data-type');
        
        if(type === 'mcq') {
            maxScore += 1; 
            const correctAns = parseInt(el.getAttribute('data-ans'));
            const selected = document.querySelector(`input[name="q_${index}"]:checked`);
            
            document.querySelectorAll(`input[name="q_${index}"]`).forEach(input => input.disabled = true);
            document.getElementById(`box_q_${index}_opt_${correctAns}`).classList.add('correct-ans-box');

            if (selected) {
                const selectedVal = parseInt(selected.value);
                if (selectedVal === correctAns) totalScore += 1;
                else document.getElementById(`box_q_${index}_opt_${selectedVal}`).classList.add('wrong-ans-box');
            }
        } 
        else if (type === 'tf') {
            maxScore += 1; 
            let correctSubCount = 0;
            
            el.querySelectorAll('.tf-option').forEach((tfEl, oIdx) => {
                const correctAns = tfEl.getAttribute('data-ans') === 'true';
                const selected = document.querySelector(`input[name="q_${index}_tf_${oIdx}"]:checked`);
                
                document.querySelectorAll(`input[name="q_${index}_tf_${oIdx}"]`).forEach(input => input.disabled = true);
                
                if(selected) {
                    const selectedVal = selected.value === 'true';
                    if(selectedVal === correctAns) {
                        correctSubCount++;
                        tfEl.classList.add('correct-ans-box');
                    } else {
                        tfEl.classList.add('wrong-ans-box');
                    }
                } else {
                    tfEl.classList.add('wrong-ans-box'); 
                }
            });

            if(correctSubCount === 4) totalScore += 1;
            else if(correctSubCount === 3) totalScore += 0.5;
            else if(correctSubCount === 2) totalScore += 0.25;
            else if(correctSubCount === 1) totalScore += 0.1;
        }
    });

    let finalScore = maxScore === 0 ? 0 : (totalScore / maxScore) * 10;
    
    document.getElementById('score-display').innerText = `${finalScore.toFixed(2)}/10`;
    document.getElementById('result-screen').classList.remove('hidden-element');
    window.scrollTo({ top: document.getElementById('result-screen').offsetTop - 50, behavior: 'smooth' });
}

function startTimer() {
    timerInterval = setInterval(() => {
        if(timeLeft <= 0) { clearInterval(timerInterval); submitTest(); return; }
        timeLeft--;
        const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const s = (timeLeft % 60).toString().padStart(2, '0');
        document.getElementById('timer-display').innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
            </svg>
            ${m}:${s}
        `;
    }, 1000);
}

function resetTimer(minutes) { clearInterval(timerInterval); timeLeft = minutes * 60; document.getElementById('timer-display').innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
    </svg>
    ${minutes}:00
`; }
function continueAfterResult() { window.scrollTo({ top: 0, behavior: 'smooth' }); }