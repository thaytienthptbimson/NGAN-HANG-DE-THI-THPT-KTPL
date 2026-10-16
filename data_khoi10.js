/* =========================================================================
   DỮ LIỆU GDKT&PL KHỐI 10 (Sách Kết nối tri thức)
   Cấu trúc đề thi Tốt nghiệp THPT 2026
========================================================================= */

window.appDatabase = window.appDatabase || {};

const dataKhoi10 = {
    1: {
        title: "Chủ đề 1, 2: Nền kinh tế, Thị trường và Cơ chế thị trường",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Hoạt động nào sau đây giữ vai trò là cơ sở, nền tảng của mọi hoạt động trong nền kinh tế?", options: ["Hoạt động phân phối.", "Hoạt động sản xuất.", "Hoạt động trao đổi.", "Hoạt động tiêu dùng."], answer: 1 },
                { type: 'mcq', text: "Chủ thể nào trong nền kinh tế thực hiện chức năng quản lí nhà nước về kinh tế và khắc phục các khuyết tật của thị trường?", options: ["Chủ thể sản xuất.", "Chủ thể tiêu dùng.", "Chủ thể trung gian.", "Chủ thể Nhà nước."], answer: 3 },
                { type: 'mcq', text: "Chức năng nào của thị trường giúp người sản xuất biết được xã hội đang cần mặt hàng gì và với số lượng bao nhiêu?", options: ["Chức năng thừa nhận.", "Chức năng thông tin.", "Chức năng điều tiết, kích thích.", "Chức năng phân phối lại."], answer: 1 },
                { type: 'mcq', text: "Biểu hiện bằng tiền của giá trị hàng hoá được gọi là gì?", options: ["Giá trị sử dụng.", "Chi phí sản xuất.", "Giá cả thị trường.", "Lợi nhuận kinh tế."], answer: 2 },
                { type: 'mcq', text: "Nội dung nào sau đây phản ánh mặt hạn chế (khuyết tật) của cơ chế thị trường?", options: ["Thúc đẩy đổi mới kĩ thuật, công nghệ sản xuất.", "Phân bổ nguồn lực kinh tế linh hoạt, hiệu quả.", "Tiềm ẩn nguy cơ khủng hoảng, suy thoái và ô nhiễm môi trường.", "Kích thích tính năng động, sáng tạo của các chủ thể kinh tế."], answer: 2 },
                { type: 'mcq', text: "Các tổ chức môi giới thương mại, sàn giao dịch chứng khoán, ngân hàng thuộc nhóm chủ thể nào trong nền kinh tế?", options: ["Chủ thể sản xuất.", "Chủ thể tiêu dùng.", "Chủ thể trung gian.", "Chủ thể Nhà nước."], answer: 2 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Đọc thông tin sau: Công ty X chuyên sản xuất nông sản sạch. Nhận thấy nhu cầu tiêu dùng thực phẩm hữu cơ trên thị trường tăng mạnh và giá bán cao, giám đốc Công ty X đã mở rộng diện tích trồng trọt, áp dụng công nghệ tưới tiêu tự động để tăng năng suất.",
                    options: [
                        { text: "a) (Nhận biết) Công ty X đóng vai trò là chủ thể sản xuất trong nền kinh tế.", answer: true },
                        { text: "b) (Thông hiểu) Việc Công ty X mở rộng diện tích trồng trọt theo tín hiệu giá cả là biểu hiện chức năng điều tiết và kích thích sản xuất của thị trường.", answer: true },
                        { text: "c) (Vận dụng) Áp dụng công nghệ tưới tiêu tự động chỉ làm tăng chi phí đầu tư chứ không mang lại lợi thế cạnh tranh cho Công ty X.", answer: false },
                        { text: "d) (Vận dụng cao) Để phát triển bền vững, ngoài mục tiêu lợi nhuận, Công ty X cần tuân thủ nghiêm ngặt quy trình an toàn thực phẩm và bảo vệ môi trường đất.", answer: true }
                    ]
                },
                {
                    type: 'tf',
                    text: "Về cơ chế thị trường và giá cả thị trường:",
                    options: [
                        { text: "a) (Nhận biết) Cơ chế thị trường là hệ thống các quan hệ kinh tế mang tính tự điều chỉnh tuân theo yêu cầu của các quy luật kinh tế.", answer: true },
                        { text: "b) (Thông hiểu) Giá cả thị trường luôn cố định và không chịu ảnh hưởng bởi quan hệ cung - cầu.", answer: false },
                        { text: "c) (Vận dụng) Khi giá nguyên liệu đầu vào tăng cao, các doanh nghiệp có xu hướng tiết kiệm chi phí hoặc điều chỉnh giá bán để bù đắp.", answer: true },
                        { text: "d) (Vận dụng cao) Nhà nước sử dụng công cụ thuế, pháp luật và quỹ dự trữ quốc gia để bình ổn giá cả các mặt hàng thiết yếu khi thị trường biến động bất thường.", answer: true }
                    ]
                }
            ]
        }
    },
    2: {
        title: "Chủ đề 3, 4, 5: Ngân sách, Thuế, Sản xuất kinh doanh và Tín dụng",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Toàn bộ các khoản thu, chi của Nhà nước được dự toán và thực hiện trong một khoảng thời gian nhất định do cơ quan nhà nước có thẩm quyền quyết định được gọi là gì?", options: ["Quỹ phúc lợi xã hội.", "Ngân sách nhà nước.", "Vốn đầu tư công.", "Dự trữ ngoại hối."], answer: 1 },
                { type: 'mcq', text: "Khoản nộp ngân sách nhà nước mang tính bắt buộc và không hoàn trả trực tiếp đối với các tổ chức, cá nhân theo quy định của pháp luật là gì?", options: ["Lệ phí.", "Học phí.", "Thuế.", "Tiền phạt hành chính."], answer: 2 },
                { type: 'mcq', text: "Loại thuế nào sau đây thuộc nhóm thuế trực thu?", options: ["Thuế giá trị gia tăng.", "Thuế tiêu thụ đặc biệt.", "Thuế thu nhập cá nhân.", "Thuế xuất khẩu, nhập khẩu."], answer: 2 },
                { type: 'mcq', text: "Mô hình sản xuất kinh doanh nào do một cá nhân làm chủ và tự chịu trách nhiệm bằng toàn bộ tài sản của mình về mọi hoạt động của doanh nghiệp?", options: ["Công ty cổ phần.", "Doanh nghiệp tư nhân.", "Hợp tác xã.", "Công ty hợp danh."], answer: 1 },
                { type: 'mcq', text: "Tín dụng là khái niệm thể hiện quan hệ kinh tế giữa chủ thể sở hữu (người cho vay) và chủ thể sử dụng nguồn vốn nhàn rỗi (người vay) theo nguyên tắc nào?", options: ["Hoàn trả gốc không tính lãi.", "Hỗ trợ nhân đạo không hoàn lại.", "Hoàn trả có kì hạn cả vốn gốc và lãi.", "Chia đều lợi nhuận thu được."], answer: 2 },
                { type: 'mcq', text: "Hình thức doanh nghiệp bán chịu hàng hoá cho nhau hoặc mua hàng trả chậm được gọi là gì?", options: ["Tín dụng ngân hàng.", "Tín dụng nhà nước.", "Tín dụng thương mại.", "Tín dụng đen."], answer: 2 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Đọc thông tin sau: Gia đình anh M dự định mở rộng xưởng sản xuất đồ gỗ nội thất nhưng thiếu vốn 500 triệu đồng. Anh M đã đến ngân hàng thương mại thế chấp quyền sử dụng đất để vay số tiền trên trong thời hạn 3 năm với mức lãi suất 8%/năm.",
                    options: [
                        { text: "a) (Nhận biết) Giao dịch giữa anh M và ngân hàng thương mại là hình thức tín dụng ngân hàng.", answer: true },
                        { text: "b) (Thông hiểu) Vì là khoản vay có tài sản thế chấp nên anh M chỉ cần trả tiền gốc, không bắt buộc phải trả lãi hằng tháng.", answer: false },
                        { text: "c) (Vận dụng) Việc ngân hàng yêu cầu thế chấp tài sản giúp giảm thiểu rủi ro tín dụng và đảm bảo khả năng thu hồi nợ.", answer: true },
                        { text: "d) (Vận dụng cao) Để sử dụng vốn vay hiệu quả, anh M cần lập kế hoạch dòng tiền trả nợ gắn liền với chu kì tiêu thụ sản phẩm đồ gỗ của xưởng.", answer: true }
                    ]
                },
                {
                    type: 'tf',
                    text: "Về vai trò của Thuế và Ngân sách nhà nước:",
                    options: [
                        { text: "a) (Nhận biết) Ngân sách nhà nước do Quốc hội quyết định dự toán và phân bổ.", answer: true },
                        { text: "b) (Thông hiểu) Mọi công dân đóng thuế thu nhập cá nhân nhiều sẽ được Nhà nước hoàn trả trực tiếp số tiền tương ứng qua dịch vụ công.", answer: false },
                        { text: "c) (Vận dụng) Nhà nước đánh thuế tiêu thụ đặc biệt ở mức cao đối với rượu, bia, thuốc lá nhằm hạn chế tiêu dùng và điều tiết thu nhập.", answer: true },
                        { text: "d) (Vận dụng cao) Doanh nghiệp trốn thuế không chỉ gây thất thu ngân sách nhà nước mà còn tạo ra sự cạnh tranh bất bình đẳng trên thị trường.", answer: true }
                    ]
                }
            ]
        }
    },
    3: {
        title: "Chủ đề 6, 7, 8, 9: Lập kế hoạch tài chính cá nhân, Hệ thống chính trị và Pháp luật",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Bản kế hoạch thu chi giúp quản lí tiền bạc của cá nhân bao gồm các quyết định về hoạt động tài chính như thu nhập, chi tiêu, tiết kiệm, đầu tư được gọi là gì?", options: ["Báo cáo kiểm toán.", "Kế hoạch tài chính cá nhân.", "Dự toán ngân sách.", "Hợp đồng bảo hiểm."], answer: 1 },
                { type: 'mcq', text: "Văn bản nào có hiệu lực pháp lí cao nhất trong hệ thống pháp luật Việt Nam?", options: ["Bộ luật Dân sự.", "Luật Doanh nghiệp.", "Hiến pháp.", "Nghị định của Chính phủ."], answer: 2 },
                { type: 'mcq', text: "Đặc trưng nào của pháp luật thể hiện ở việc pháp luật được áp dụng nhiều lần, ở nhiều nơi, đối với tất cả mọi cá nhân, tổ chức trong phạm vi toàn quốc?", options: ["Tính quyền lực, bắt buộc chung.", "Tính quy phạm phổ biến.", "Tính xác định chặt chẽ về hình thức.", "Tính tự nguyện thoả thuận."], answer: 1 },
                { type: 'mcq', text: "Hình thức thực hiện pháp luật nào mà trong đó các chủ thể pháp luật kiềm chế không làm những điều mà pháp luật cấm?", options: ["Sử dụng pháp luật.", "Thi hành pháp luật.", "Tuân thủ pháp luật.", "Áp dụng pháp luật."], answer: 2 },
                { type: 'mcq', text: "Theo Hiến pháp năm 2013, cơ quan đại biểu cao nhất của Nhân dân, cơ quan quyền lực nhà nước cao nhất của nước Cộng hoà xã hội chủ nghĩa Việt Nam là cơ quan nào?", options: ["Chính phủ.", "Quốc hội.", "Toà án nhân dân tối cao.", "Uỷ ban Trung ương Mặt trận Tổ quốc Việt Nam."], answer: 1 },
                { type: 'mcq', text: "Cơ quan nào thực hiện quyền hành pháp, là cơ quan chấp hành của Quốc hội?", options: ["Viện kiểm sát nhân dân tối cao.", "Chính phủ.", "Hội đồng nhân dân.", "Chủ tịch nước."], answer: 1 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về các hình thức thực hiện pháp luật trong đời sống:",
                    options: [
                        { text: "a) (Nhận biết) Áp dụng pháp luật là hình thức chỉ dành riêng cho các cơ quan, công chức nhà nước có thẩm quyền.", answer: true },
                        { text: "b) (Thông hiểu) Công dân đội mũ bảo hiểm khi đi xe máy là đang thực hiện pháp luật theo hình thức 'Sử dụng pháp luật'.", answer: false },
                        { text: "c) (Vận dụng) Khi cảnh sát giao thông lập biên bản xử phạt người vượt đèn đỏ, cảnh sát giao thông đang thực hiện hình thức 'Áp dụng pháp luật'.", answer: true },
                        { text: "d) (Vận dụng cao) Việc người dân chủ động gửi đơn khiếu nại khi bị thu hồi đất sai quy định thể hiện hình thức 'Sử dụng pháp luật' để tự bảo vệ quyền và lợi ích hợp pháp.", answer: true }
                    ]
                },
                {
                    type: 'tf',
                    text: "Về Hiến pháp và bộ máy Nhà nước Cộng hoà xã hội chủ nghĩa Việt Nam:",
                    options: [
                        { text: "a) (Nhận biết) Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp, kiểm soát giữa các cơ quan nhà nước trong việc thực hiện các quyền lập pháp, hành pháp, tư pháp.", answer: true },
                        { text: "b) (Thông hiểu) Mọi văn bản luật do Quốc hội ban hành đều có thể trái với Hiến pháp nếu tình hình thực tế yêu cầu.", answer: false },
                        { text: "c) (Vận dụng) Toà án nhân dân là cơ quan xét xử, thực hiện quyền tư pháp và có nhiệm vụ bảo vệ công lí, bảo vệ quyền con người, quyền công dân.", answer: true },
                        { text: "d) (Vận dụng cao) Hội đồng nhân dân do cử tri ở địa phương bầu ra, chịu trách nhiệm trước Nhân dân địa phương và cơ quan nhà nước cấp trên.", answer: true }
                    ]
                }
            ]
        }
    }
};

window.appDatabase.khoi10 = dataKhoi10;