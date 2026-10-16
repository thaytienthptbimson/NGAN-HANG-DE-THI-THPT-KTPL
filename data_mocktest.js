/* =========================================================================
   DỮ LIỆU ĐỀ THI THỬ TỐT NGHIỆP THPT MÔN KTPL (Cấu trúc 4 mức độ 2026)
   Bản quyền thuộc về số ĐT: 0943.930.787
========================================================================= */

const dataMocktest = {};

// Gán dữ liệu rỗng cho các đề từ 1-6 để không lỗi giao diện
dataMocktest[1] = []; dataMocktest[2] = []; dataMocktest[3] = []; 
dataMocktest[4] = []; dataMocktest[5] = []; dataMocktest[6] = [];

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