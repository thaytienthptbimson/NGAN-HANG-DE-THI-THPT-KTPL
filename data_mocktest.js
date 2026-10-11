/* =========================================================================
   DỮ LIỆU ĐỀ THI THỬ TỐT NGHIỆP THPT MÔN KTPL (Cấu trúc đề tốt nghiệp 2026 của Bộ GD&ĐT)
   Bản quyền thuộc về số ĐT: 0943.930.787
========================================================================= */

const dataMocktest = {};

// Gán dữ liệu rỗng cho các đề từ 2-6 để không lỗi giao diện (sẽ cập nhật lần lượt)
dataMocktest[2] = []; dataMocktest[3] = []; 
dataMocktest[4] = []; dataMocktest[5] = []; dataMocktest[6] = [];

// ================= ĐỀ THI THỬ SỐ 1 (CẤU TRÚC ĐỀ TỐT NGHIỆP THPT 2026 – SGK KTPL KẾT NỐI TRI THỨC) =================
/*
   Cấu trúc theo QĐ 764/QĐ-BGDĐT (áp dụng từ 2025, giữ nguyên cho 2026) – thời gian 50 phút:
   • Phần I : 24 câu trắc nghiệm nhiều lựa chọn (4 phương án, 1 đáp án đúng)
   • Phần II: 04 câu Đúng/Sai, mỗi câu 4 ý a), b), c), d)
   • Tỉ lệ 3 mức độ: Biết 40% – Hiểu 30% – Vận dụng 30%  → 16 – 12 – 12 ý trên tổng 40 ý
   • Nội dung: Giáo dục kinh tế 20 ý (50%) – Giáo dục pháp luật 20 ý (50%)
               Lớp 12 (Bài 1–16): 36 ý (90%) – Lớp 10, 11: 4 ý (10%)
   Kí hiệu chú thích: NB = Nhận biết (Biết) · TH = Thông hiểu (Hiểu) · VD = Vận dụng
*/

dataMocktest[1] = [
    // --- PHẦN I: TRẮC NGHIỆM NHIỀU LỰA CHỌN (24 CÂU) ---
    // Mức độ Nhận biết (10 câu)
    { type: 'mcq', text: "Chỉ tiêu nào sau đây thường được dùng để phản ánh quy mô tăng trưởng kinh tế của một quốc gia?", options: ["Tổng thu nhập quốc dân (GNI).", "Chỉ số phát triển con người (HDI).", "Tỉ lệ hộ nghèo đa chiều.", "Chỉ số giá tiêu dùng (CPI)."], answer: 0 }, // 1 · NB · Bài 1
    { type: 'mcq', text: "Hội nhập kinh tế quốc tế là quá trình các quốc gia thực hiện việc nào sau đây?", options: ["Hợp nhất nền kinh tế của mình vào nền kinh tế của một quốc gia lớn hơn.", "Đóng cửa thị trường để bảo hộ tuyệt đối sản xuất trong nước.", "Chỉ trao đổi hàng hoá với các quốc gia có chung đường biên giới.", "Gắn kết nền kinh tế của mình với kinh tế khu vực và thế giới thông qua các cam kết, thoả thuận chung."], answer: 3 }, // 2 · NB · Bài 2
    { type: 'mcq', text: "Loại hình bảo hiểm nào sau đây có các chế độ như ốm đau, thai sản, hưu trí, tử tuất?", options: ["Bảo hiểm y tế.", "Bảo hiểm xã hội.", "Bảo hiểm thất nghiệp.", "Bảo hiểm thương mại."], answer: 1 }, // 3 · NB · Bài 3
    { type: 'mcq', text: "Mục tiêu chủ yếu của chính sách an sinh xã hội là gì?", options: ["Tối đa hoá lợi nhuận cho các doanh nghiệp.", "Xoá bỏ hoàn toàn chênh lệch thu nhập giữa mọi thành viên trong xã hội.", "Bảo đảm cuộc sống tối thiểu và hỗ trợ người dân vượt qua rủi ro, khó khăn.", "Thay thế hoàn toàn vai trò của lao động, việc làm đối với mỗi công dân."], answer: 2 }, // 4 · NB · Bài 4
    { type: 'mcq', text: "Công ti X trích một phần lợi nhuận xây nhà tình thương tặng các hộ nghèo ở địa phương. Công ti X đã thực hiện trách nhiệm xã hội nào sau đây?", options: ["Trách nhiệm nhân văn.", "Trách nhiệm kinh tế.", "Trách nhiệm pháp lí.", "Trách nhiệm đạo đức."], answer: 0 }, // 5 · NB · Bài 6
    { type: 'mcq', text: "Lạm phát là hiện tượng nào sau đây trong nền kinh tế?", options: ["Giá cả của một vài mặt hàng tăng lên trong thời gian ngắn.", "Mức giá chung của nền kinh tế tăng lên liên tục trong một thời gian nhất định.", "Giá trị của đồng tiền trong nước tăng lên so với hàng hoá.", "Mức giá chung của nền kinh tế giảm xuống liên tục trong một thời gian nhất định."], answer: 1 }, // 6 · NB · Lớp 11 (Lạm phát)
    { type: 'mcq', text: "Nội dung nào sau đây thể hiện quyền tự do kinh doanh của công dân?", options: ["Kinh doanh bất kì ngành, nghề nào, kể cả ngành, nghề mà pháp luật cấm.", "Kinh doanh ngành, nghề có điều kiện mà không cần đáp ứng các điều kiện theo quy định.", "Được miễn toàn bộ nghĩa vụ nộp thuế trong suốt thời gian kinh doanh.", "Tự chủ lựa chọn ngành, nghề, địa điểm, hình thức và quy mô kinh doanh mà pháp luật không cấm."], answer: 3 }, // 7 · NB · Bài 8
    { type: 'mcq', text: "Việc chủ sở hữu nắm giữ, chi phối tài sản của mình thuộc nội dung quyền nào sau đây?", options: ["Quyền định đoạt.", "Quyền sử dụng.", "Quyền chiếm hữu.", "Quyền thừa kế."], answer: 2 }, // 8 · NB · Bài 9
    { type: 'mcq', text: "Chủ thể cơ bản và quan trọng nhất của luật quốc tế là", options: ["Công dân.", "Quốc gia.", "Doanh nghiệp đa quốc gia.", "Tổ chức phi chính phủ."], answer: 1 }, // 9 · NB · Bài 14
    { type: 'mcq', text: "Nội dung nào sau đây thể hiện công dân bình đẳng về trách nhiệm pháp lí?", options: ["Người có chức vụ cao khi vi phạm pháp luật sẽ được xử lí nhẹ hơn người khác.", "Người có điều kiện kinh tế được nộp tiền thay cho việc chịu trách nhiệm pháp lí.", "Mọi công dân vi phạm pháp luật đều bị xử lí theo quy định của pháp luật.", "Chỉ công dân thuộc dân tộc đa số mới phải chịu trách nhiệm pháp lí."], answer: 2 }, // 10 · NB · Lớp 11 (Bình đẳng trước pháp luật)

    // Mức độ Thông hiểu (7 câu)
    { type: 'mcq', text: "Việc Việt Nam tham gia các hiệp định thương mại tự do mang lại tác động tích cực nào sau đây đối với nền kinh tế?", options: ["Loại bỏ hoàn toàn sự cạnh tranh từ hàng hoá nhập khẩu.", "Mở rộng thị trường xuất khẩu và thu hút thêm đầu tư nước ngoài.", "Làm giảm vai trò quản lí, điều tiết của Nhà nước.", "Bảo đảm mọi doanh nghiệp trong nước đều tăng lợi nhuận."], answer: 1 }, // 11 · TH · Bài 2
    { type: 'mcq', text: "Vào dịp Tết Nguyên đán, nhu cầu mua hoa tăng mạnh trong khi lượng hoa cung ứng ra thị trường không đổi. Trong trường hợp này, giá hoa trên thị trường thường có xu hướng nào sau đây?", options: ["Tăng lên.", "Giảm xuống.", "Không thay đổi.", "Biến động ngẫu nhiên, không phụ thuộc vào quan hệ cung – cầu."], answer: 0 }, // 12 · TH · Lớp 11 (Cung – cầu)
    { type: 'mcq', text: "Công ti Y kí hợp đồng lao động và đóng bảo hiểm xã hội đầy đủ cho toàn bộ người lao động theo quy định của pháp luật. Công ti Y đã thực hiện trách nhiệm xã hội nào sau đây?", options: ["Trách nhiệm kinh tế.", "Trách nhiệm pháp lí.", "Trách nhiệm đạo đức.", "Trách nhiệm nhân văn."], answer: 1 }, // 13 · TH · Bài 6
    { type: 'mcq', text: "Ông K đã tốt nghiệp đại học nhưng vẫn thường xuyên tham gia các lớp bồi dưỡng để cập nhật kiến thức chuyên môn. Ông K đã thực hiện quyền học tập ở nội dung nào sau đây?", options: ["Học từ thấp đến cao.", "Học bất cứ ngành, nghề nào mà mình ưa thích.", "Học thường xuyên, học suốt đời.", "Học tập theo chỉ tiêu do Nhà nước giao."], answer: 2 }, // 14 · TH · Bài 11
    { type: 'mcq', text: "Anh T bị tai nạn giao thông, được đưa đến bệnh viện X trong tình trạng nguy kịch. Bệnh viện X từ chối cấp cứu vì gia đình anh T chưa nộp tiền tạm ứng viện phí. Hành vi của bệnh viện X đã xâm phạm quyền nào sau đây của công dân?", options: ["Quyền tự do kinh doanh.", "Quyền sở hữu tài sản.", "Quyền được học tập.", "Quyền được bảo vệ, chăm sóc sức khoẻ."], answer: 3 }, // 15 · TH · Bài 12
    { type: 'mcq', text: "Hành vi nào sau đây vi phạm quy định về bảo vệ di sản văn hoá?", options: ["Khắc, vẽ lên hiện vật trưng bày tại di tích lịch sử.", "Tham quan di tích theo đúng nội quy của ban quản lí.", "Tố giác hành vi đào bới trái phép trong khu di tích.", "Quyên góp kinh phí để tu bổ di tích."], answer: 0 }, // 16 · TH · Bài 13
    { type: 'mcq', text: "Chị M không kinh doanh các mặt hàng thuộc danh mục pháp luật cấm kinh doanh. Chị M đã thực hiện pháp luật theo hình thức nào sau đây?", options: ["Sử dụng pháp luật.", "Thi hành pháp luật.", "Áp dụng pháp luật.", "Tuân thủ pháp luật."], answer: 3 }, // 17 · TH · Lớp 10 (Thực hiện pháp luật)

    // Mức độ Vận dụng (7 câu)
    { type: 'mcq', text: "Địa phương Y đạt tốc độ tăng trưởng kinh tế cao nhờ khai thác khoáng sản ồ ạt, gây ô nhiễm môi trường nghiêm trọng, trong khi tỉ lệ hộ nghèo giảm chậm. Nhận định nào sau đây về địa phương Y là đúng?", options: ["Địa phương Y đã đạt được phát triển kinh tế bền vững.", "Địa phương Y chỉ cần duy trì tăng trưởng, không cần quan tâm đến môi trường.", "Địa phương Y mới có tăng trưởng kinh tế, chưa bảo đảm phát triển kinh tế bền vững.", "Địa phương Y không thể tăng trưởng kinh tế nếu thực hiện bảo vệ môi trường."], answer: 2 }, // 18 · VD · Bài 1
    { type: 'mcq', text: "Anh B làm việc theo hợp đồng lao động tại một công ti và đã tham gia bảo hiểm thất nghiệp đủ thời gian theo quy định. Khi hợp đồng chấm dứt đúng pháp luật, anh B bị mất việc làm. Anh B có thể được hưởng chế độ nào sau đây từ bảo hiểm thất nghiệp?", options: ["Trợ cấp thất nghiệp và hỗ trợ tư vấn, giới thiệu việc làm, học nghề theo quy định.", "Lương hưu hằng tháng.", "Chế độ thai sản.", "Bồi thường tai nạn lao động."], answer: 0 }, // 19 · VD · Bài 3
    { type: 'mcq', text: "Gia đình ông T có tổng thu nhập 20 triệu đồng mỗi tháng. Trong tháng này, gia đình chi 12 triệu đồng cho các nhu cầu thiết yếu, 5 triệu đồng cho học tập của con và sinh hoạt văn hoá, phần còn lại gửi tiết kiệm. Tỉ lệ thu nhập mà gia đình ông T dành cho tiết kiệm trong tháng này là", options: ["10%.", "15%.", "20%.", "25%."], answer: 1 }, // 20 · VD · Bài 7
    { type: 'mcq', text: "Anh P được bố mẹ tặng một chiếc xe máy. Anh P dùng xe để đi làm hằng ngày, sau đó bán xe cho anh Q để mua xe mới. Trong trường hợp này, anh P đã thực hiện những quyền nào sau đây của chủ sở hữu tài sản?", options: ["Quyền chiếm hữu và quyền sử dụng.", "Quyền chiếm hữu và quyền định đoạt.", "Chỉ thực hiện quyền sử dụng.", "Quyền sử dụng và quyền định đoạt."], answer: 3 }, // 21 · VD · Bài 9
    { type: 'mcq', text: "Anh A (21 tuổi) và chị B (17 tuổi) được hai gia đình đồng ý, tổ chức đám cưới theo phong tục rồi chung sống như vợ chồng. Hành vi của anh A và chị B là biểu hiện của hành vi nào bị pháp luật về hôn nhân và gia đình nghiêm cấm?", options: ["Kết hôn giả tạo.", "Cưỡng ép kết hôn.", "Tảo hôn.", "Cản trở kết hôn."], answer: 2 }, // 22 · VD · Bài 10
    { type: 'mcq', text: "Phát hiện xưởng sản xuất của ông Q xả nước thải chưa qua xử lí trực tiếp ra kênh mương gần khu dân cư, bà N đã thực hiện đúng quyền và nghĩa vụ của công dân về bảo vệ môi trường bằng cách nào sau đây?", options: ["Làm ngơ vì cho rằng việc đó không liên quan đến gia đình mình.", "Tự ý đập phá thiết bị của xưởng để ngăn chặn hành vi vi phạm.", "Yêu cầu ông Q đưa tiền thì sẽ không báo với ai.", "Phản ánh, tố cáo hành vi vi phạm đến cơ quan có thẩm quyền."], answer: 3 }, // 23 · VD · Bài 13
    { type: 'mcq', text: "Một máy bay quân sự của quốc gia K tự ý bay vào vùng trời thuộc lãnh thổ của quốc gia M mà không được quốc gia M cho phép. Hành vi này của quốc gia K đã xâm phạm điều nào sau đây?", options: ["Chủ quyền của quốc gia M đối với vùng trời thuộc lãnh thổ của mình.", "Quyền tự do hàng không quốc tế của các quốc gia.", "Quyền đi qua không gây hại của tàu thuyền nước ngoài.", "Quyền khai thác tài nguyên ở vùng biển quốc tế."], answer: 0 }, // 24 · VD · Bài 15

    // --- PHẦN II: TRẮC NGHIỆM ĐÚNG/SAI (4 CÂU) ---
    // Câu 1 – Bài 2 (kinh tế) | NB – NB – TH – VD
    { type: 'tf', text: "Câu 1. Đọc thông tin sau: Sau khi Việt Nam tham gia nhiều hiệp định thương mại tự do thế hệ mới, các doanh nghiệp xuất khẩu thuỷ sản được hưởng thuế nhập khẩu ưu đãi tại các thị trường đối tác, kim ngạch xuất khẩu tăng. Tuy nhiên, các thị trường này đặt ra yêu cầu cao về chất lượng, truy xuất nguồn gốc và bảo vệ môi trường; đồng thời hàng thuỷ sản nước ngoài cũng cạnh tranh mạnh hơn tại thị trường trong nước. Công ti X (xuất khẩu thuỷ sản) đã đầu tư dây chuyền chế biến hiện đại, xây dựng vùng nuôi đạt chuẩn và đào tạo lại lao động để đáp ứng yêu cầu của đối tác.", options: [
        { text: "a) Hội nhập kinh tế quốc tế giúp doanh nghiệp trong nước có thêm cơ hội mở rộng thị trường xuất khẩu.", answer: true },
        { text: "b) Hội nhập kinh tế quốc tế chỉ tạo ra cơ hội, không đặt ra áp lực cạnh tranh đối với doanh nghiệp trong nước.", answer: false },
        { text: "c) Yêu cầu cao về chất lượng, truy xuất nguồn gốc của các thị trường đối tác buộc doanh nghiệp phải nâng cao năng lực cạnh tranh.", answer: true },
        { text: "d) Việc công ti X đầu tư công nghệ và đào tạo lại lao động chỉ có lợi cho riêng công ti, không góp phần nâng cao sức cạnh tranh của hàng hoá Việt Nam trên thị trường quốc tế.", answer: false }
    ]},
    // Câu 2 – Bài 5 (kinh tế) | NB – TH – TH – VD
    { type: 'tf', text: "Câu 2. Đọc thông tin sau: Anh Q dự định mở xưởng sản xuất bánh thủ công để bán qua mạng. Anh xác định mục tiêu kinh doanh, khảo sát nhu cầu khách hàng và các đối thủ cạnh tranh trên địa bàn; dự tính vốn đầu tư ban đầu, doanh thu và chi phí hằng tháng; dự kiến thuê hai nhân viên và xây dựng phương án ứng phó khi giá nguyên liệu tăng. Sau ba tháng, anh đối chiếu kết quả thực tế với kế hoạch để điều chỉnh cho phù hợp.", options: [
        { text: "a) Xác định mục tiêu kinh doanh và khảo sát nhu cầu khách hàng là những nội dung cần có khi lập kế hoạch kinh doanh.", answer: true },
        { text: "b) Kế hoạch kinh doanh chỉ cần lập một lần trước khi bắt đầu kinh doanh, không cần đối chiếu và điều chỉnh trong quá trình thực hiện.", answer: false },
        { text: "c) Việc xây dựng phương án ứng phó khi giá nguyên liệu tăng là không cần thiết, vì kế hoạch kinh doanh chỉ gồm các nội dung về doanh thu và chi phí.", answer: false },
        { text: "d) Khi dự tính chi phí, anh Q cần tính cả chi phí thuê nhân viên, điện, nước, vận chuyển bên cạnh chi phí nguyên liệu để dự kiến đúng lợi nhuận.", answer: true }
    ]},
    // Câu 3 – Bài 8 (pháp luật) | NB – TH – VD – VD
    { type: 'tf', text: "Câu 3. Đọc thông tin sau: Chị H đăng kí kinh doanh cửa hàng thời trang và bán hàng trực tuyến. Chị tự lựa chọn mặt hàng, quy mô, địa điểm kinh doanh phù hợp với quy định của pháp luật, thuê thêm hai nhân viên, đồng thời kê khai và nộp thuế đầy đủ. Gần đây, thấy doanh thu tăng, chị H cân nhắc bán thêm một số mặt hàng thuộc danh mục cấm kinh doanh và không xuất hoá đơn, khai thấp doanh thu để giảm số thuế phải nộp.", options: [
        { text: "a) Quyền tự do kinh doanh cho phép chị H kinh doanh bất kì mặt hàng nào mà chị muốn.", answer: false },
        { text: "b) Kê khai và nộp thuế đầy đủ, đúng hạn là nghĩa vụ của công dân khi tham gia hoạt động kinh doanh.", answer: true },
        { text: "c) Nếu thực hiện ý định không xuất hoá đơn và khai thấp doanh thu, chị H có thể bị xử lí theo quy định của pháp luật về thuế.", answer: true },
        { text: "d) Vì đã đăng kí kinh doanh và nộp thuế đầy đủ nên chị H được phép bán thêm hàng hoá thuộc danh mục cấm kinh doanh.", answer: false }
    ]},
    // Câu 4 – Bài 16 (pháp luật) | NB – NB – TH – VD
    { type: 'tf', text: "Câu 4. Đọc thông tin sau: Quốc gia M, quốc gia N và quốc gia P đều là thành viên của Tổ chức Thương mại thế giới (WTO). Công ti K (Việt Nam) kí hợp đồng mua thiết bị điện tử của công ti L có trụ sở tại quốc gia M; hàng hoá được vận chuyển qua biên giới và thanh toán bằng ngoại tệ. Trong khi đó, quốc gia M áp dụng mức thuế nhập khẩu thấp đối với ô tô từ quốc gia N nhưng lại đánh mức thuế cao hơn đối với ô tô cùng loại từ quốc gia P, và không thuộc trường hợp ngoại lệ nào được WTO cho phép.", options: [
        { text: "a) Hợp đồng giữa công ti K và công ti L là hợp đồng thương mại quốc tế vì các bên có trụ sở ở các quốc gia khác nhau và hàng hoá được vận chuyển qua biên giới.", answer: true },
        { text: "b) Theo các nguyên tắc cơ bản của WTO, các thành viên được tự do nâng mức thuế nhập khẩu bất cứ lúc nào mà không bị ràng buộc bởi các cam kết đã đưa ra.", answer: false },
        { text: "c) Việc quốc gia M đánh thuế cao hơn đối với ô tô từ quốc gia P so với ô tô cùng loại từ quốc gia N là trái với nguyên tắc không phân biệt đối xử của WTO.", answer: true },
        { text: "d) Công ti K và công ti L có thể thoả thuận trong hợp đồng về điều kiện giao hàng, phương thức thanh toán và cách giải quyết tranh chấp, miễn là không trái quy định của pháp luật có liên quan.", answer: true }
    ]}
];

// ================= ĐỀ THI THỬ SỐ 7 (THIẾT KẾ THEO FORMAT 2026) =================

dataMocktest[7] = [
    // --- PHẦN I: TRẮC NGHIỆM ĐA LỰA CHỌN (24 CÂU) ---
    // Mức độ Nhận biết
    { type: 'mcq', text: "Khái niệm 'Thị trường' thể hiện điều gì trong nền kinh tế?[cite: 267]", options: ["Chỉ là một địa điểm vật lí như chợ, siêu thị.", "Tổng hoà các quan hệ kinh tế trao đổi, mua bán, xác định giá cả và sản lượng.", "Là cơ quan độc quyền định giá của Nhà nước.", "Chỉ bao gồm các hoạt động buôn bán trực tuyến trên mạng."], answer: 1 },
    { type: 'mcq', text: "Thuế giá trị gia tăng (VAT) thuộc loại hình thuế nào sau đây?[cite: 286]", options: ["Thuế trực thu.", "Thuế gián thu.", "Thuế tài sản.", "Thuế thu nhập."], answer: 1 },
    { type: 'mcq', text: "Thất nghiệp chu kì thường xuất hiện ở giai đoạn nào của nền kinh tế?[cite: 353]", options: ["Giai đoạn kinh tế phát triển hưng thịnh.", "Giai đoạn nền kinh tế suy thoái, khủng hoảng.", "Giai đoạn chuyển đổi công nghệ kĩ thuật.", "Giai đoạn học sinh mới tốt nghiệp ra trường."], answer: 1 },
    { type: 'mcq', text: "Chỉ số HDI dùng để đo lường yếu tố nào trong phát triển kinh tế?[cite: 416]", options: ["Chỉ số năng lực cạnh tranh quốc gia.", "Chỉ số phát triển con người (sức khoẻ, học vấn, thu nhập).", "Chỉ số lạm phát lõi.", "Chỉ số rủi ro tín dụng."], answer: 1 },
    { type: 'mcq', text: "Liên minh châu Âu (EU) sử dụng đồng tiền chung nào?[cite: 143]", options: ["Đô-la (USD).", "Bảng Anh (GBP).", "Ơ-rô (EUR).", "Yên Nhật (JPY)."], answer: 2 },
    { type: 'mcq', text: "Trong 3 quyền của chủ sở hữu tài sản, quyền khai thác công dụng, hưởng hoa lợi, lợi tức từ tài sản được gọi là gì?[cite: 473]", options: ["Quyền chiếm hữu.", "Quyền sử dụng.", "Quyền định đoạt.", "Quyền giám sát."], answer: 1 },

    // Mức độ Thông hiểu
    { type: 'mcq', text: "Khi lượng cung lớn hơn lượng cầu trên thị trường, hệ quả tất yếu đối với giá cả là gì?[cite: 343]", options: ["Giá cả giữ mức ổn định.", "Giá cả có xu hướng tăng cao.", "Giá cả có xu hướng giảm xuống.", "Giá cả do Nhà nước quy định cố định."], answer: 2 },
    { type: 'mcq', text: "Công ty Cổ phần khác biệt cốt lõi nhất với Doanh nghiệp Tư nhân ở điểm nào?[cite: 298]", options: ["Công ty cổ phần do Nhà nước quản lí 100%.", "Doanh nghiệp tư nhân có thể phát hành cổ phiếu.", "Công ty cổ phần chia vốn điều lệ thành nhiều cổ phần và có quyền phát hành chứng khoán.", "Công ty cổ phần không có tư cách pháp nhân."], answer: 2 },
    { type: 'mcq', text: "Mối quan hệ giữa tăng trưởng kinh tế và phát triển bền vững được hiểu đúng nhất là?[cite: 421]", options: ["Chỉ cần tăng trưởng kinh tế nhanh là sẽ tự động phát triển bền vững.", "Tăng trưởng kinh tế là điều kiện tiền đề, nội dung cấu thành của phát triển bền vững.", "Phát triển bền vững sẽ cản trở tốc độ tăng trưởng kinh tế.", "Hai khái niệm này mâu thuẫn triệt để với nhau."], answer: 1 },
    { type: 'mcq', text: "Việc cá nhân mua công trái xây dựng Tổ quốc là hành vi tham gia vào loại hình tín dụng nào?[cite: 312]", options: ["Tín dụng tiêu dùng.", "Tín dụng thương mại.", "Tín dụng ngân hàng.", "Tín dụng nhà nước."], answer: 3 },
    { type: 'mcq', text: "Trong hợp đồng lao động, nội dung nào thể hiện sự bình đẳng giữa người sử dụng lao động và người lao động?[cite: 360]", options: ["Được kí kết dựa trên sự thoả thuận, tự nguyện và đúng pháp luật.", "Người sử dụng lao động được toàn quyền áp đặt mức lương.", "Người lao động được phép vi phạm kỉ luật mà không bị sa thải.", "Hợp đồng chỉ có hiệu lực khi có công chứng của Toà án."], answer: 0 },
    { type: 'mcq', text: "Chính sách 'Người Việt Nam ưu tiên dùng hàng Việt Nam' là một biểu hiện nhằm xây dựng điều gì?[cite: 379]", options: ["Ngăn cấm hàng hoá nhập khẩu.", "Văn hoá tiêu dùng Việt Nam yêu nước, tự tôn dân tộc.", "Sự độc quyền của doanh nghiệp Nhà nước.", "Chống lại toàn cầu hoá kinh tế."], answer: 1 },

    // Mức độ Vận dụng
    { type: 'mcq', text: "Doanh nghiệp X thay vì xả thẳng nước thải ra sông đã đầu tư hệ thống xử lí nước thải sinh học. Hành vi này thể hiện loại trách nhiệm xã hội nào của doanh nghiệp?[cite: 452]", options: ["Trách nhiệm kinh tế.", "Trách nhiệm pháp lí và đạo đức đối với môi trường.", "Trách nhiệm nhân văn từ thiện.", "Trách nhiệm đối nội với nhân viên."], answer: 1 },
    { type: 'mcq', text: "Khi lạm phát xảy ra ở mức phi mã (hai chữ số trở lên), hành vi nào sau đây của người tiêu dùng là phản ứng phổ biến mang tính rủi ro cho nền kinh tế?[cite: 348]", options: ["Tăng cường gửi tiền tiết kiệm lấy lãi dài hạn.", "Chỉ mua sắm những đồ dùng thực sự thiết yếu.", "Tâm lí tránh giữ tiền mặt, đầu cơ tích trữ hàng hoá, mua vàng hoặc ngoại tệ.", "Giảm vay nợ từ các ngân hàng thương mại."], answer: 2 },
    { type: 'mcq', text: "Để giải quyết hiện tượng 'thất nghiệp cơ cấu' do máy móc tự động hoá thay thế lao động thủ công, giải pháp cốt lõi của quốc gia là gì?[cite: 356]", options: ["Cấm doanh nghiệp nhập khẩu công nghệ mới.", "Tăng tiền trợ cấp thất nghiệp vô thời hạn.", "Đào tạo lại, nâng cao kĩ năng nghề và chuyển đổi nghề nghiệp cho người lao động.", "Đóng cửa các trường dạy nghề."], answer: 2 },
    { type: 'mcq', text: "Theo pháp luật Việt Nam, hành vi công ty đăng tuyển dụng ghi rõ 'Chỉ tuyển nam giới cho vị trí kế toán' là vi phạm nguyên tắc nào?[cite: 391]", options: ["Quyền tự do kinh doanh.", "Bình đẳng giới trong lĩnh vực lao động.", "Quyền bất khả xâm phạm về đời tư.", "Bình đẳng giữa các dân tộc."], answer: 1 },
    { type: 'mcq', text: "Ông A phát hiện một xưởng mộc thường xuyên thuê trẻ em 12 tuổi làm việc nặng nhọc. Ông A có quyền làm gì theo luật định?[cite: 466]", options: ["Không làm gì vì không liên quan đến mình.", "Yêu cầu xưởng mộc chia lợi nhuận để giữ im lặng.", "Thực hiện quyền tố cáo hành vi vi phạm pháp luật lao động đến cơ quan có thẩm quyền.", "Tự ý xông vào xưởng giải cứu lao động."], answer: 2 },
    { type: 'mcq', text: "Trong quản lí thu chi gia đình, quy tắc 50/30/20 (50% thiết yếu, 30% linh hoạt, 20% tiết kiệm) nhằm mục đích chủ yếu gì?[cite: 461]", options: ["Dành toàn bộ tiền để đầu tư chứng khoán.", "Chi tiêu không cần nhìn giá.", "Đảm bảo cân đối tài chính, duy trì mức sống và có quỹ dự phòng rủi ro tương lai.", "Chỉ dùng 50% tiền lương, phần còn lại trả nợ."], answer: 2 },

    // Mức độ Vận dụng cao
    { type: 'mcq', text: "Khi tham gia Hiệp định RCEP (Đối tác kinh tế toàn diện khu vực), nông sản Việt Nam đứng trước cả cơ hội xuất khẩu thuế 0% và rủi ro bị hàng nước ngoài cạnh tranh ngay trên sân nhà. Đây là biểu hiện của tính chất nào trong hội nhập kinh tế?[cite: 425]", options: ["Hội nhập mang lại rủi ro phá sản hoàn toàn cho nền kinh tế.", "Hội nhập chỉ mang lại lợi ích một chiều cho nước lớn.", "Hội nhập luôn đi kèm giữa 'cơ hội' và 'thách thức' đan xen, đòi hỏi nâng cao năng lực cạnh tranh nội tại.", "Hội nhập làm mất hoàn toàn chủ quyền quốc gia."], answer: 2 },
    { type: 'mcq', text: "Việc Ngân hàng Nhà nước áp dụng chính sách 'thắt chặt tiền tệ' (tăng lãi suất) thường được sử dụng như một công cụ vĩ mô để giải quyết tình trạng nào?[cite: 350]", options: ["Đại suy thoái kinh tế.", "Lạm phát tăng cao vượt mức kiểm soát.", "Thất nghiệp tăng đột biến.", "Giảm nghèo đa chiều ở nông thôn."], answer: 1 },
    { type: 'mcq', text: "Gia đình ông B xây nhà làm nứt tường nhà bà C kề bên. Theo quyền sở hữu tài sản và nghĩa vụ tôn trọng tài sản người khác, ông B phải làm gì?[cite: 475]", options: ["Phớt lờ vì đất nhà ai người nấy xây.", "Đuổi bà C đi chỗ khác.", "Dừng thi công, thoả thuận đền bù và khắc phục thiệt hại đã gây ra cho nhà bà C.", "Kiện ngược lại bà C vì xây nhà quá sát ranh giới."], answer: 2 },
    { type: 'mcq', text: "Sự kiện Việt Nam kí kết EVFTA (Hiệp định thương mại tự do Việt Nam - EU) thể hiện cấp độ hội nhập kinh tế nào và mang lại lợi ích chiến lược gì?[cite: 426]", options: ["Hội nhập song phương - Chỉ xuất khẩu gạo.", "Hội nhập khu vực - Giảm thuế quan diện rộng, thâm nhập chuỗi cung ứng chất lượng cao của EU.", "Hội nhập toàn cầu - Thống nhất sử dụng đồng Ơ-rô.", "Liên minh thuế quan - Miễn visa đi lại châu Âu."], answer: 1 },
    { type: 'mcq', text: "Khi lập kế hoạch kinh doanh cá nhân, bước 'Phân tích rủi ro' có ý nghĩa sống còn vì sao?[cite: 449]", options: ["Để nộp phạt trước cho Nhà nước.", "Để đảm bảo hồ sơ vay vốn được duyệt 100%.", "Để nhận diện trước các yếu tố bất định (đối thủ, biến động thị trường) và chuẩn bị sẵn phương án ứng phó, giảm thiểu tổn thất.", "Để loại bỏ hoàn toàn mọi đối thủ cạnh tranh."], answer: 2 },
    { type: 'mcq', text: "Chính sách an sinh xã hội cấp thẻ Bảo hiểm y tế miễn phí cho người nghèo, vùng sâu vùng xa thể hiện bản chất ưu việt nào của Nhà nước ta?[cite: 442]", options: ["Đảm bảo phân phối thu nhập cào bằng tuyệt đối.", "Thực hiện tăng trưởng kinh tế gắn liền với tiến bộ, công bằng xã hội, không ai bị bỏ lại phía sau.", "Xoá bỏ hoàn toàn dịch vụ y tế tư nhân.", "Bắt buộc toàn dân phải khám bệnh ở trạm xá."], answer: 1 },

    // --- PHẦN II: TRẮC NGHIỆM ĐÚNG/SAI (4 CÂU) ---
    { type: 'tf', text: "Câu 1. Về cơ chế thị trường và sự điều tiết kinh tế[cite: 272, 273]:", options: [
        { text: "a) (Nhận biết) Cơ chế thị trường là sự tự điều chỉnh của nền kinh tế theo các quy luật cung cầu, cạnh tranh, giá cả.[cite: 272]", answer: true },
        { text: "b) (Thông hiểu) Trong cơ chế thị trường, Nhà nước hoàn toàn không được phép can thiệp vào giá cả của mọi loại hàng hoá thiết yếu.[cite: 274]", answer: false },
        { text: "c) (Vận dụng) Sự cạnh tranh không lành mạnh (như làm hàng giả) là một trong những khuyết tật (nhược điểm) vốn có của cơ chế thị trường cần sự quản lí của Nhà nước.[cite: 273]", answer: true },
        { text: "d) (Vận dụng cao) Khi thị trường khan hiếm khẩu trang do dịch bệnh, việc các cửa hàng găm hàng đẩy giá lên gấp 10 lần là quy luật tự nhiên, pháp luật không có quyền xử phạt.[cite: 274]", answer: false }
    ]},
    { type: 'tf', text: "Câu 2. Về các loại hình doanh nghiệp và kinh doanh[cite: 298, 299]:", options: [
        { text: "a) (Nhận biết) Doanh nghiệp nhà nước là doanh nghiệp mà Nhà nước nắm giữ trên 50% vốn điều lệ.[cite: 299]", answer: true },
        { text: "b) (Thông hiểu) Cổ đông trong Công ty Cổ phần phải chịu trách nhiệm về nợ của công ty bằng toàn bộ tài sản cá nhân của gia đình họ.[cite: 298]", answer: false },
        { text: "c) (Vận dụng) Mô hình 'Công ty trách nhiệm hữu hạn 1 thành viên' có ưu điểm là chủ sở hữu toàn quyền quyết định nhưng rủi ro tài chính được giới hạn trong phạm vi vốn điều lệ.[cite: 297]", answer: true },
        { text: "d) (Vận dụng cao) Hợp tác xã là mô hình liên kết các cá nhân, hộ gia đình chủ yếu tập trung phân chia lợi nhuận theo cổ phần chứ không đề cao tính tương trợ cộng đồng.[cite: 293]", answer: false }
    ]},
    { type: 'tf', text: "Câu 3. Về pháp luật quyền bình đẳng[cite: 384, 386]:", options: [
        { text: "a) (Nhận biết) Hiến pháp 2013 quy định mọi công dân đều bình đẳng trước pháp luật, không bị phân biệt đối xử.[cite: 384]", answer: true },
        { text: "b) (Thông hiểu) Bình đẳng về trách nhiệm pháp lí nghĩa là người giữ chức vụ cao khi phạm tội sẽ được xử phạt nhẹ hơn người dân thường.[cite: 386]", answer: false },
        { text: "c) (Vận dụng) Toà án tuyên phạt hai tội phạm tham gia buôn ma tuý với mức án khác nhau dựa trên vai trò chủ mưu và tòng phạm là đúng nguyên tắc bình đẳng về trách nhiệm pháp lí.[cite: 386]", answer: true },
        { text: "d) (Vận dụng cao) Việc Nhà nước ưu tiên đầu tư cơ sở hạ tầng, y tế cho vùng đồng bào dân tộc thiểu số là sự thiên vị, đi ngược lại nguyên tắc bình đẳng giữa các dân tộc.[cite: 401]", answer: false }
    ]},
    { type: 'tf', text: "Câu 4. Về Tín dụng và quản lí tài chính[cite: 302, 319]:", options: [
        { text: "a) (Nhận biết) Đặc điểm cốt lõi của tín dụng là tính hoàn trả có kì hạn cả vốn gốc và lãi.[cite: 302]", answer: true },
        { text: "b) (Thông hiểu) Lập kế hoạch tài chính cá nhân chỉ cần thiết đối với những người đã đi làm và có thu nhập cao.[cite: 316]", answer: false },
        { text: "c) (Vận dụng) Mua hàng trả góp bằng thẻ tín dụng bản chất là việc vay tiền của ngân hàng để thanh toán trước, và phải chịu ràng buộc về lãi suất hoặc phí nợ quá hạn.[cite: 311]", answer: true },
        { text: "d) (Vận dụng cao) Để quản lí tài chính cá nhân hiệu quả hướng tới tự do tài chính, quy tắc quan trọng nhất là phải chi tiêu trước cho các nhu cầu, sau đó phần dư mới để đưa vào quỹ tiết kiệm hoặc đầu tư.[cite: 322]", answer: false }
    ]}
];

dataMocktest[8] = [...dataMocktest[7]]; // Đề dự phòng
