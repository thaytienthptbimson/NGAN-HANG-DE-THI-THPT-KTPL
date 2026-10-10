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
    { type: 'mcq', text: "Khái niệm 'Thị trường' thể hiện điều gì trong nền kinh tế?", options: ["Chỉ là một địa điểm vật lí như chợ, siêu thị.", "Tổng hoà các quan hệ kinh tế trao đổi, mua bán, xác định giá cả và sản lượng.", "Là cơ quan độc quyền định giá của Nhà nước.", "Chỉ bao gồm các hoạt động buôn bán trực tuyến trên mạng."], answer: 1 },
    { type: 'mcq', text: "Thuế giá trị gia tăng (VAT) thuộc loại hình thuế nào sau đây?", options: ["Thuế trực thu.", "Thuế gián thu.", "Thuế tài sản.", "Thuế thu nhập."], answer: 1 },
    { type: 'mcq', text: "Thất nghiệp chu kì thường xuất hiện ở giai đoạn nào của nền kinh tế?", options: ["Giai đoạn kinh tế phát triển hưng thịnh.", "Giai đoạn nền kinh tế suy thoái, khủng hoảng.", "Giai đoạn chuyển đổi công nghệ kĩ thuật.", "Giai đoạn học sinh mới tốt nghiệp ra trường."], answer: 1 },
    { type: 'mcq', text: "Chỉ số HDI dùng để đo lường yếu tố nào trong phát triển kinh tế?", options: ["Chỉ số năng lực cạnh tranh quốc gia.", "Chỉ số phát triển con người (sức khoẻ, học vấn, thu nhập).", "Chỉ số lạm phát lõi.", "Chỉ số rủi ro tín dụng."], answer: 1 },
    { type: 'mcq', text: "Liên minh châu Âu (EU) sử dụng đồng tiền chung nào?", options: ["Đô-la (USD).", "Bảng Anh (GBP).", "Ơ-rô (EUR).", "Yên Nhật (JPY)."], answer: 2 },
    { type: 'mcq', text: "Trong 3 quyền của chủ sở hữu tài sản, quyền khai thác công dụng, hưởng hoa lợi, lợi tức từ tài sản được gọi là gì?", options: ["Quyền chiếm hữu.", "Quyền sử dụng.", "Quyền định đoạt.", "Quyền giám sát."], answer: 1 },

    // Mức độ Thông hiểu
    { type: 'mcq', text: "Khi lượng cung lớn hơn lượng cầu trên thị trường, hệ quả tất yếu đối với giá cả là gì?", options: ["Giá cả giữ mức ổn định.", "Giá cả có xu hướng tăng cao.", "Giá cả có xu hướng giảm xuống.", "Giá cả do Nhà nước quy định cố định."], answer: 2 },
    { type: 'mcq', text: "Công ty Cổ phần khác biệt cốt lõi nhất với Doanh nghiệp Tư nhân ở điểm nào?", options: ["Công ty cổ phần do Nhà nước quản lí 100%.", "Doanh nghiệp tư nhân có thể phát hành cổ phiếu.", "Công ty cổ phần chia vốn điều lệ thành nhiều cổ phần và có quyền phát hành chứng khoán.", "Công ty cổ phần không có tư cách pháp nhân."], answer: 2 },
    { type: 'mcq', text: "Mối quan hệ giữa tăng trưởng kinh tế và phát triển bền vững được hiểu đúng nhất là?", options: ["Chỉ cần tăng trưởng kinh tế nhanh là sẽ tự động phát triển bền vững.", "Tăng trưởng kinh tế là điều kiện tiền đề, nội dung cấu thành của phát triển bền vững.", "Phát triển bền vững sẽ cản trở tốc độ tăng trưởng kinh tế.", "Hai khái niệm này mâu thuẫn triệt để với nhau."], answer: 1 },
    { type: 'mcq', text: "Việc cá nhân mua công trái xây dựng Tổ quốc là hành vi tham gia vào loại hình tín dụng nào?", options: ["Tín dụng tiêu dùng.", "Tín dụng thương mại.", "Tín dụng ngân hàng.", "Tín dụng nhà nước."], answer: 3 },
    { type: 'mcq', text: "Trong hợp đồng lao động, nội dung nào thể hiện sự bình đẳng giữa người sử dụng lao động và người lao động?", options: ["Được kí kết dựa trên sự thoả thuận, tự nguyện và đúng pháp luật.", "Người sử dụng lao động được toàn quyền áp đặt mức lương.", "Người lao động được phép vi phạm kỉ luật mà không bị sa thải.", "Hợp đồng chỉ có hiệu lực khi có công chứng của Toà án."], answer: 0 },
    { type: 'mcq', text: "Chính sách 'Người Việt Nam ưu tiên dùng hàng Việt Nam' là một biểu hiện nhằm xây dựng điều gì?", options: ["Ngăn cấm hàng hoá nhập khẩu.", "Văn hoá tiêu dùng Việt Nam yêu nước, tự tôn dân tộc.", "Sự độc quyền của doanh nghiệp Nhà nước.", "Chống lại toàn cầu hoá kinh tế."], answer: 1 },

    // Mức độ Vận dụng
    { type: 'mcq', text: "Doanh nghiệp X thay vì xả thẳng nước thải ra sông đã đầu tư hệ thống xử lí nước thải sinh học. Hành vi này thể hiện loại trách nhiệm xã hội nào của doanh nghiệp?", options: ["Trách nhiệm kinh tế.", "Trách nhiệm pháp lí và đạo đức đối với môi trường.", "Trách nhiệm nhân văn từ thiện.", "Trách nhiệm đối nội với nhân viên."], answer: 1 },
    { type: 'mcq', text: "Khi lạm phát xảy ra ở mức phi mã (hai chữ số trở lên), hành vi nào sau đây của người tiêu dùng là phản ứng phổ biến mang tính rủi ro cho nền kinh tế?", options: ["Tăng cường gửi tiền tiết kiệm lấy lãi dài hạn.", "Chỉ mua sắm những đồ dùng thực sự thiết yếu.", "Tâm lí tránh giữ tiền mặt, đầu cơ tích trữ hàng hoá, mua vàng hoặc ngoại tệ.", "Giảm vay nợ từ các ngân hàng thương mại."], answer: 2 },
    { type: 'mcq', text: "Để giải quyết hiện tượng 'thất nghiệp cơ cấu' do máy móc tự động hoá thay thế lao động thủ công, giải pháp cốt lõi của quốc gia là gì?", options: ["Cấm doanh nghiệp nhập khẩu công nghệ mới.", "Tăng tiền trợ cấp thất nghiệp vô thời hạn.", "Đào tạo lại, nâng cao kĩ năng nghề và chuyển đổi nghề nghiệp cho người lao động.", "Đóng cửa các trường dạy nghề."], answer: 2 },
    { type: 'mcq', text: "Theo pháp luật Việt Nam, hành vi công ty đăng tuyển dụng ghi rõ 'Chỉ tuyển nam giới cho vị trí kế toán' là vi phạm nguyên tắc nào?", options: ["Quyền tự do kinh doanh.", "Bình đẳng giới trong lĩnh vực lao động.", "Quyền bất khả xâm phạm về đời tư.", "Bình đẳng giữa các dân tộc."], answer: 1 },
    { type: 'mcq', text: "Ông A phát hiện một xưởng mộc thường xuyên thuê trẻ em 12 tuổi làm việc nặng nhọc. Ông A có quyền làm gì theo luật định?", options: ["Không làm gì vì không liên quan đến mình.", "Yêu cầu xưởng mộc chia lợi nhuận để giữ im lặng.", "Thực hiện quyền tố cáo hành vi vi phạm pháp luật lao động đến cơ quan có thẩm quyền.", "Tự ý xông vào xưởng giải cứu lao động."], answer: 2 },
    { type: 'mcq', text: "Trong quản lí thu chi gia đình, quy tắc 50/30/20 (50% thiết yếu, 30% linh hoạt, 20% tiết kiệm) nhằm mục đích chủ yếu gì?", options: ["Dành toàn bộ tiền để đầu tư chứng khoán.", "Chi tiêu không cần nhìn giá.", "Đảm bảo cân đối tài chính, duy trì mức sống và có quỹ dự phòng rủi ro tương lai.", "Chỉ dùng 50% tiền lương, phần còn lại trả nợ."], answer: 2 },

    // Mức độ Vận dụng cao
    { type: 'mcq', text: "Khi tham gia Hiệp định RCEP (Đối tác kinh tế toàn diện khu vực), nông sản Việt Nam đứng trước cả cơ hội xuất khẩu thuế 0% và rủi ro bị hàng nước ngoài cạnh tranh ngay trên sân nhà. Đây là biểu hiện của tính chất nào trong hội nhập kinh tế?", options: ["Hội nhập mang lại rủi ro phá sản hoàn toàn cho nền kinh tế.", "Hội nhập chỉ mang lại lợi ích một chiều cho nước lớn.", "Hội nhập luôn đi kèm giữa 'cơ hội' và 'thách thức' đan xen, đòi hỏi nâng cao năng lực cạnh tranh nội tại.", "Hội nhập làm mất hoàn toàn chủ quyền quốc gia."], answer: 2 },
    { type: 'mcq', text: "Việc Ngân hàng Nhà nước áp dụng chính sách 'thắt chặt tiền tệ' (tăng lãi suất) thường được sử dụng như một công cụ vĩ mô để giải quyết tình trạng nào?", options: ["Đại suy thoái kinh tế.", "Lạm phát tăng cao vượt mức kiểm soát.", "Thất nghiệp tăng đột biến.", "Giảm nghèo đa chiều ở nông thôn."], answer: 1 },
    { type: 'mcq', text: "Gia đình ông B xây nhà làm nứt tường nhà bà C kề bên. Theo quyền sở hữu tài sản và nghĩa vụ tôn trọng tài sản người khác, ông B phải làm gì?", options: ["Phớt lờ vì đất nhà ai người nấy xây.", "Đuổi bà C đi chỗ khác.", "Dừng thi công, thoả thuận đền bù và khắc phục thiệt hại đã gây ra cho nhà bà C.", "Kiện ngược lại bà C vì xây nhà quá sát ranh giới."], answer: 2 },
    { type: 'mcq', text: "Sự kiện Việt Nam kí kết EVFTA (Hiệp định thương mại tự do Việt Nam - EU) thể hiện cấp độ hội nhập kinh tế nào và mang lại lợi ích chiến lược gì?", options: ["Hội nhập song phương - Chỉ xuất khẩu gạo.", "Hội nhập khu vực - Giảm thuế quan diện rộng, thâm nhập chuỗi cung ứng chất lượng cao của EU.", "Hội nhập toàn cầu - Thống nhất sử dụng đồng Ơ-rô.", "Liên minh thuế quan - Miễn visa đi lại châu Âu."], answer: 1 },
    { type: 'mcq', text: "Khi lập kế hoạch kinh doanh cá nhân, bước 'Phân tích rủi ro' có ý nghĩa sống còn vì sao?", options: ["Để nộp phạt trước cho Nhà nước.", "Để đảm bảo hồ sơ vay vốn được duyệt 100%.", "Để nhận diện trước các yếu tố bất định (đối thủ, biến động thị trường) và chuẩn bị sẵn phương án ứng phó, giảm thiểu tổn thất.", "Để loại bỏ hoàn toàn mọi đối thủ cạnh tranh."], answer: 2 },
    { type: 'mcq', text: "Chính sách an sinh xã hội cấp thẻ Bảo hiểm y tế miễn phí cho người nghèo, vùng sâu vùng xa thể hiện bản chất ưu việt nào của Nhà nước ta?", options: ["Đảm bảo phân phối thu nhập cào bằng tuyệt đối.", "Thực hiện tăng trưởng kinh tế gắn liền với tiến bộ, công bằng xã hội, không ai bị bỏ lại phía sau.", "Xoá bỏ hoàn toàn dịch vụ y tế tư nhân.", "Bắt buộc toàn dân phải khám bệnh ở trạm xá."], answer: 1 },

    // --- PHẦN II: TRẮC NGHIỆM ĐÚNG/SAI (4 CÂU) ---
    { type: 'tf', text: "Câu 1. Về cơ chế thị trường và sự điều tiết kinh tế:", options: [
        { text: "a) (Nhận biết) Cơ chế thị trường là sự tự điều chỉnh của nền kinh tế theo các quy luật cung cầu, cạnh tranh, giá cả.", answer: true },
        { text: "b) (Thông hiểu) Trong cơ chế thị trường, Nhà nước hoàn toàn không được phép can thiệp vào giá cả của mọi loại hàng hoá thiết yếu.", answer: false },
        { text: "c) (Vận dụng) Sự cạnh tranh không lành mạnh (như làm hàng giả) là một trong những khuyết tật (nhược điểm) vốn có của cơ chế thị trường cần sự quản lí của Nhà nước.", answer: true },
        { text: "d) (Vận dụng cao) Khi thị trường khan hiếm khẩu trang do dịch bệnh, việc các cửa hàng găm hàng đẩy giá lên gấp 10 lần là quy luật tự nhiên, pháp luật không có quyền xử phạt.", answer: false }
    ]},
    { type: 'tf', text: "Câu 2. Về các loại hình doanh nghiệp và kinh doanh:", options: [
        { text: "a) (Nhận biết) Doanh nghiệp nhà nước là doanh nghiệp mà Nhà nước nắm giữ trên 50% vốn điều lệ.", answer: true },
        { text: "b) (Thông hiểu) Cổ đông trong Công ty Cổ phần phải chịu trách nhiệm về nợ của công ty bằng toàn bộ tài sản cá nhân của gia đình họ.", answer: false },
        { text: "c) (Vận dụng) Mô hình 'Công ty trách nhiệm hữu hạn 1 thành viên' có ưu điểm là chủ sở hữu toàn quyền quyết định nhưng rủi ro tài chính được giới hạn trong phạm vi vốn điều lệ.", answer: true },
        { text: "d) (Vận dụng cao) Hợp tác xã là mô hình liên kết các cá nhân, hộ gia đình chủ yếu tập trung phân chia lợi nhuận theo cổ phần chứ không đề cao tính tương trợ cộng đồng.", answer: false }
    ]},
    { type: 'tf', text: "Câu 3. Về pháp luật quyền bình đẳng:", options: [
        { text: "a) (Nhận biết) Hiến pháp 2013 quy định mọi công dân đều bình đẳng trước pháp luật, không bị phân biệt đối xử.", answer: true },
        { text: "b) (Thông hiểu) Bình đẳng về trách nhiệm pháp lí nghĩa là người giữ chức vụ cao khi phạm tội sẽ được xử phạt nhẹ hơn người dân thường.", answer: false },
        { text: "c) (Vận dụng) Toà án tuyên phạt hai tội phạm tham gia buôn ma tuý với mức án khác nhau dựa trên vai trò chủ mưu và tòng phạm là đúng nguyên tắc bình đẳng về trách nhiệm pháp lí.", answer: true },
        { text: "d) (Vận dụng cao) Việc Nhà nước ưu tiên đầu tư cơ sở hạ tầng, y tế cho vùng đồng bào dân tộc thiểu số là sự thiên vị, đi ngược lại nguyên tắc bình đẳng giữa các dân tộc.", answer: false }
    ]},
    { type: 'tf', text: "Câu 4. Về Tín dụng và quản lí tài chính:", options: [
        { text: "a) (Nhận biết) Đặc điểm cốt lõi của tín dụng là tính hoàn trả có kì hạn cả vốn gốc và lãi.", answer: true },
        { text: "b) (Thông hiểu) Lập kế hoạch tài chính cá nhân chỉ cần thiết đối với những người đã đi làm và có thu nhập cao.", answer: false },
        { text: "c) (Vận dụng) Mua hàng trả góp bằng thẻ tín dụng bản chất là việc vay tiền của ngân hàng để thanh toán trước, và phải chịu ràng buộc về lãi suất hoặc phí nợ quá hạn.", answer: true },
        { text: "d) (Vận dụng cao) Để quản lí tài chính cá nhân hiệu quả hướng tới tự do tài chính, quy tắc quan trọng nhất là phải chi tiêu trước cho các nhu cầu, sau đó phần dư mới để đưa vào quỹ tiết kiệm hoặc đầu tư.", answer: false }
    ]}
];

// ================= ĐỀ THI THỬ SỐ 8 (THIẾT KẾ THEO FORMAT 2026) =================

dataMocktest[8] = [
    // --- PHẦN I: TRẮC NGHIỆM ĐA LỰA CHỌN (24 CÂU) ---
    // Mức độ Nhận biết
    { type: 'mcq', text: "Nguồn thu chủ yếu và ổn định nhất của ngân sách nhà nước là gì?", options: ["Tiền viện trợ của các tổ chức quốc tế.", "Các khoản thu từ phát hành tiền.", "Tiền bán tài nguyên cho nước ngoài.", "Thuế do các tổ chức, cá nhân nộp."], answer: 3 },
    { type: 'mcq', text: "Cạnh tranh trong kinh tế là sự ganh đua giữa các chủ thể kinh tế nhằm mục đích chủ yếu nào sau đây?", options: ["Giành điều kiện thuận lợi trong sản xuất, tiêu thụ hàng hoá để thu lợi nhuận tối đa.", "Tiêu diệt hoàn toàn mọi đối thủ trên thị trường.", "Được Nhà nước bao cấp vốn sản xuất.", "Thống nhất mức giá bán với nhau."], answer: 0 },
    { type: 'mcq', text: "Lạm phát là tình trạng nào sau đây của nền kinh tế?", options: ["Giá của một mặt hàng tăng lên trong một ngày.", "Giá trị đồng tiền tăng lên so với hàng hoá.", "Mức giá chung của nền kinh tế tăng lên liên tục trong một thời gian nhất định.", "Tổng cầu của nền kinh tế giảm mạnh."], answer: 2 },
    { type: 'mcq', text: "Quyền nào sau đây thuộc nhóm quyền chính trị của công dân Việt Nam?", options: ["Quyền học tập.", "Quyền bầu cử và ứng cử vào cơ quan đại biểu của nhân dân.", "Quyền sở hữu tài sản.", "Quyền khám bệnh, chữa bệnh."], answer: 1 },
    { type: 'mcq', text: "Theo Luật Hôn nhân và gia đình năm 2014, độ tuổi kết hôn tối thiểu của nam và nữ lần lượt là bao nhiêu?", options: ["Nam từ đủ 18 tuổi, nữ từ đủ 18 tuổi.", "Nam từ đủ 22 tuổi, nữ từ đủ 20 tuổi.", "Nam từ đủ 18 tuổi, nữ từ đủ 16 tuổi.", "Nam từ đủ 20 tuổi, nữ từ đủ 18 tuổi."], answer: 3 },
    { type: 'mcq', text: "Hợp đồng lao động là sự thoả thuận giữa người lao động và người sử dụng lao động về nội dung nào sau đây?", options: ["Việc làm có trả lương, điều kiện lao động, quyền và nghĩa vụ của mỗi bên.", "Mức thuế thu nhập cá nhân phải nộp.", "Việc chuyển nhượng quyền sở hữu doanh nghiệp.", "Việc góp vốn điều lệ vào công ty."], answer: 0 },

    // Mức độ Thông hiểu
    { type: 'mcq', text: "Khi cầu tăng nhưng cung không đổi thì giá cả thị trường thường biến động như thế nào?", options: ["Giá có xu hướng giảm xuống.", "Giá hoàn toàn không thay đổi.", "Giá có xu hướng tăng lên.", "Giá bị Nhà nước ấn định cố định."], answer: 2 },
    { type: 'mcq', text: "Việc Nhà nước dùng ngân sách để chi cho giáo dục, y tế và an sinh xã hội thể hiện vai trò nào của ngân sách nhà nước?", options: ["Chỉ nhằm tăng nguồn thu cho Nhà nước.", "Thực hiện chức năng, nhiệm vụ của Nhà nước, góp phần bảo đảm công bằng và tiến bộ xã hội.", "Thay thế hoàn toàn vai trò của doanh nghiệp tư nhân.", "Hạn chế sự phát triển của các thành phần kinh tế."], answer: 1 },
    { type: 'mcq', text: "Điểm khác biệt cơ bản giữa pháp luật và các quy tắc đạo đức là gì?", options: ["Pháp luật do Nhà nước ban hành và được bảo đảm thực hiện bằng quyền lực nhà nước.", "Pháp luật chỉ điều chỉnh các quan hệ trong gia đình.", "Quy tắc đạo đức do Quốc hội ban hành.", "Quy tắc đạo đức được bảo đảm thực hiện bằng biện pháp cưỡng chế của Nhà nước."], answer: 0 },
    { type: 'mcq', text: "Hai cửa hàng cùng khu phố cạnh tranh bằng cách nâng cao chất lượng và giảm chi phí để hạ giá bán hợp lí. Đây là biểu hiện của loại cạnh tranh nào?", options: ["Cạnh tranh không lành mạnh.", "Cạnh tranh độc quyền hoá thị trường.", "Cạnh tranh bằng thủ đoạn gian lận.", "Cạnh tranh lành mạnh."], answer: 3 },
    { type: 'mcq', text: "Thuế thu nhập cá nhân thuộc nhóm thuế trực thu vì lí do nào sau đây?", options: ["Người nộp thuế có thể chuyển gánh nặng thuế sang người tiêu dùng.", "Người nộp thuế là người trực tiếp chịu thuế trên thu nhập của mình.", "Thuế chỉ áp dụng đối với hàng hoá nhập khẩu.", "Thuế được cộng vào giá bán của hàng hoá, dịch vụ."], answer: 1 },
    { type: 'mcq', text: "Hành vi nào sau đây thể hiện người tiêu dùng thông minh?", options: ["Mua hàng theo quảng cáo mà không cần so sánh.", "Luôn chọn sản phẩm có giá cao nhất.", "Tìm hiểu thông tin, so sánh giá và chất lượng, chi tiêu phù hợp với thu nhập.", "Mua tích trữ thật nhiều hàng khuyến mãi."], answer: 2 },

    // Mức độ Vận dụng
    { type: 'mcq', text: "Công ty nợ lương chị M nhiều tháng dù hợp đồng lao động đã quy định rõ. Chị M nên làm gì để bảo vệ quyền lợi hợp pháp của mình?", options: ["Yêu cầu công ty thực hiện đúng hợp đồng, khi cần thì khiếu nại, đề nghị cơ quan có thẩm quyền giải quyết.", "Nghỉ việc và phá hoại tài sản của công ty.", "Im lặng chấp nhận vì sợ mất việc.", "Đăng thông tin sai sự thật để bôi nhọ công ty."], answer: 0 },
    { type: 'mcq', text: "Bạn H vừa tròn 18 tuổi. Trong cuộc bầu cử đại biểu Quốc hội sắp tới, bạn H có quyền nào sau đây?", options: ["Có quyền bầu cử và quyền ứng cử như mọi công dân khác.", "Không có quyền gì vì chưa đủ 21 tuổi.", "Chỉ có quyền ứng cử vì đã là công dân Việt Nam.", "Có quyền bầu cử vì đã đủ 18 tuổi, nhưng chưa đủ tuổi ứng cử (từ đủ 21 tuổi)."], answer: 3 },
    { type: 'mcq', text: "Một cửa hàng đóng gói lại hàng kém chất lượng, dán nhãn mác thương hiệu nổi tiếng để bán giá cao. Hành vi này vi phạm điều gì?", options: ["Chỉ vi phạm quy định về thuế.", "Chỉ vi phạm đạo đức nghề nghiệp, không bị pháp luật xử lí.", "Vi phạm pháp luật về cạnh tranh và bảo vệ quyền lợi người tiêu dùng, có thể bị xử lí theo quy định.", "Không vi phạm vì đó là quyền tự do kinh doanh."], answer: 2 },
    { type: 'mcq', text: "Giá xăng dầu tăng mạnh làm chi phí sản xuất, vận chuyển tăng, kéo mặt bằng giá nhiều mặt hàng tăng theo. Tình huống này phản ánh nguyên nhân nào gây ra lạm phát?", options: ["Do cầu tăng quá nhanh so với cung.", "Do chi phí sản xuất tăng (lạm phát do chi phí đẩy).", "Do Nhà nước thu hẹp chi tiêu công.", "Do người dân tăng tiết kiệm."], answer: 1 },
    { type: 'mcq', text: "Anh P vay ngân hàng 200 triệu đồng để mở xưởng sản xuất và cam kết trả gốc, lãi đúng hạn. Cách sử dụng vốn vay an toàn và đúng pháp luật của anh P là gì?", options: ["Dùng vốn vay để đầu cơ, cờ bạc nhằm sinh lời nhanh.", "Cho người khác vay lại với lãi suất cao hơn.", "Dùng cho chi tiêu cá nhân, không liên quan đến sản xuất.", "Sử dụng đúng mục đích đã cam kết, tính toán khả năng trả nợ và thanh toán gốc, lãi đúng hạn."], answer: 3 },
    { type: 'mcq', text: "Anh Q đăng kí kinh doanh cửa hàng tạp hoá theo đúng quy định. Việc này giúp anh Q thực hiện quyền và nghĩa vụ nào của công dân?", options: ["Thực hiện quyền tự do kinh doanh trong ngành nghề pháp luật không cấm và nghĩa vụ đăng kí, nộp thuế.", "Được miễn mọi loại thuế vì là kinh doanh nhỏ.", "Được kinh doanh cả ngành nghề bị cấm nếu nộp thêm phí.", "Chỉ thực hiện nghĩa vụ, không có quyền gì."], answer: 0 },

    // Mức độ Vận dụng cao
    { type: 'mcq', text: "Khi kinh tế suy giảm, Chính phủ giảm thuế và tăng chi đầu tư công để kích thích tổng cầu. Đây là chính sách nào và tác động chủ yếu của nó là gì?", options: ["Chính sách tiền tệ thắt chặt, nhằm giảm lạm phát.", "Chính sách tiền tệ nới lỏng, nhằm tăng lãi suất.", "Chính sách tài khoá mở rộng, nhằm kích thích sản xuất, tạo việc làm và thúc đẩy tăng trưởng.", "Chính sách tài khoá thắt chặt, nhằm giảm ngay thâm hụt ngân sách."], answer: 2 },
    { type: 'mcq', text: "Doanh nghiệp A kéo dài giờ làm và không đóng bảo hiểm cho người lao động để hạ giá thành, từ đó cạnh tranh về giá. Nhận định nào sau đây là đúng?", options: ["Đó là cạnh tranh lành mạnh vì giúp giảm giá cho người tiêu dùng.", "Đó là hành vi vi phạm pháp luật lao động, xâm phạm quyền lợi người lao động, không phải cạnh tranh lành mạnh.", "Đó là quyền tự do kinh doanh nên không bị pháp luật điều chỉnh.", "Đó là hành vi hợp pháp nếu doanh nghiệp tăng được doanh thu."], answer: 1 },
    { type: 'mcq', text: "Một địa phương có nhiều hộ nông dân cùng chuyển sang trồng một loại cây vì năm trước giá cao; năm nay nguồn cung dư thừa, giá giảm mạnh. Bài học nào về cơ chế thị trường được rút ra?", options: ["Nên trồng càng nhiều càng tốt để tăng thu nhập.", "Nhà nước phải thu mua toàn bộ nông sản với giá cũ.", "Giá cả không có vai trò gì trong định hướng sản xuất.", "Cần nghiên cứu thông tin thị trường, dự báo cung cầu và đa dạng hoá sản xuất để hạn chế rủi ro."], answer: 3 },
    { type: 'mcq', text: "Ông B là chủ doanh nghiệp tư nhân, vay 5 tỉ đồng kinh doanh nhưng thua lỗ, tài sản của doanh nghiệp không đủ trả nợ. Theo pháp luật, ông B phải chịu trách nhiệm như thế nào?", options: ["Chịu trách nhiệm bằng toàn bộ tài sản của mình về mọi khoản nợ của doanh nghiệp.", "Chỉ chịu trách nhiệm trong phạm vi vốn điều lệ.", "Không phải trả nợ vì doanh nghiệp có tư cách pháp nhân riêng.", "Chỉ chịu trách nhiệm bằng tài sản của doanh nghiệp, tài sản cá nhân được miễn."], answer: 0 },
    { type: 'mcq', text: "Thanh niên X 22 tuổi, đã tốt nghiệp nhưng chưa có việc làm, chỉ chờ người thân xin việc giúp. Theo kiến thức về thị trường lao động và việc làm, X nên làm gì?", options: ["Chờ đợi cơ hội vì thất nghiệp hoàn toàn là trách nhiệm của Nhà nước.", "Từ chối mọi công việc có thu nhập thấp.", "Chủ động học nghề, nâng cao kĩ năng, tìm kiếm thông tin việc làm và tham gia thị trường lao động.", "Chỉ nhận việc ở cơ quan nhà nước."], answer: 2 },
    { type: 'mcq', text: "Nhà nước miễn, giảm thuế cho hộ kinh doanh nhỏ và doanh nghiệp khởi nghiệp trong những năm đầu hoạt động. Chính sách này có tác dụng nào sau đây?", options: ["Làm giảm hoàn toàn nguồn thu ngân sách nhà nước trong dài hạn.", "Tạo điều kiện thúc đẩy khởi nghiệp, mở rộng sản xuất, tạo việc làm và về lâu dài góp phần tăng nguồn thu cho ngân sách.", "Làm tăng thất nghiệp vì doanh nghiệp không cần thuê thêm lao động.", "Khiến các doanh nghiệp lớn bị loại khỏi thị trường."], answer: 1 },

    // --- PHẦN II: TRẮC NGHIỆM ĐÚNG/SAI (4 CÂU) ---
    { type: 'tf', text: "Câu 1. Về ngân sách nhà nước và thuế:", options: [
        { text: "a) (Nhận biết) Thuế là khoản nộp bắt buộc của tổ chức, cá nhân vào ngân sách nhà nước theo quy định của pháp luật.", answer: true },
        { text: "b) (Thông hiểu) Thuế thu nhập doanh nghiệp là loại thuế gián thu, được cộng vào giá bán để người tiêu dùng chịu.", answer: false },
        { text: "c) (Vận dụng) Việc Nhà nước dùng nguồn thu từ thuế để xây dựng đường giao thông, trường học, bệnh viện công thể hiện vai trò cung cấp hàng hoá, dịch vụ công và phân phối lại thu nhập của ngân sách.", answer: true },
        { text: "d) (Vận dụng cao) Hộ kinh doanh kê khai doanh thu thấp hơn thực tế để nộp ít thuế chỉ là thiếu sót nhỏ, không ảnh hưởng đến nghĩa vụ của công dân.", answer: false }
    ]},
    { type: 'tf', text: "Câu 2. Về tăng trưởng kinh tế, thất nghiệp và lạm phát:", options: [
        { text: "a) (Nhận biết) Tăng trưởng kinh tế là sự gia tăng về quy mô sản lượng của nền kinh tế trong một thời kì nhất định.", answer: true },
        { text: "b) (Thông hiểu) Thất nghiệp chỉ ảnh hưởng đến người lao động mất việc, không tác động gì đến kinh tế - xã hội.", answer: false },
        { text: "c) (Vận dụng) Khi lạm phát cao hơn lãi suất tiền gửi, người gửi tiết kiệm vẫn được tăng giá trị thực của khoản tiền gửi.", answer: false },
        { text: "d) (Vận dụng cao) Để kiềm chế lạm phát, Ngân hàng Nhà nước có thể thực hiện chính sách tiền tệ thắt chặt, đồng thời cần cân nhắc để không làm ảnh hưởng quá mức đến tăng trưởng và việc làm.", answer: true }
    ]},
    { type: 'tf', text: "Câu 3. Về quyền và nghĩa vụ của công dân (khiếu nại, tố cáo, bầu cử):", options: [
        { text: "a) (Nhận biết) Công dân có quyền khiếu nại khi cho rằng quyết định hành chính của cơ quan nhà nước xâm phạm quyền, lợi ích hợp pháp của mình.", answer: true },
        { text: "b) (Thông hiểu) Tố cáo là việc công dân báo cho cơ quan, tổ chức, cá nhân có thẩm quyền biết về hành vi vi phạm pháp luật gây thiệt hại hoặc đe doạ gây thiệt hại đến lợi ích của Nhà nước, quyền và lợi ích hợp pháp của người khác.", answer: true },
        { text: "c) (Vận dụng) Anh D phát hiện cán bộ xã nhận tiền để làm sai hồ sơ, nên bịa đặt thêm tình tiết khi tố cáo cho vụ việc được chú ý. Việc làm của anh D là thực hiện đúng quyền tố cáo.", answer: false },
        { text: "d) (Vận dụng cao) Chị E đủ điều kiện bầu cử nhưng đưa thẻ cử tri nhờ chồng đi bỏ phiếu thay vì hai vợ chồng cùng một hộ gia đình. Việc làm này không vi phạm nguyên tắc bầu cử.", answer: false }
    ]},
    { type: 'tf', text: "Câu 4. Về pháp luật lao động:", options: [
        { text: "a) (Nhận biết) Người sử dụng lao động và người lao động phải giao kết hợp đồng lao động trên cơ sở tự nguyện, bình đẳng, thiện chí, hợp tác và trung thực.", answer: true },
        { text: "b) (Thông hiểu) Người lao động có quyền đơn phương chấm dứt hợp đồng lao động nhưng phải tuân thủ quy định về thời hạn báo trước theo luật định.", answer: true },
        { text: "c) (Vận dụng) Công ty Y sa thải chị L ngay sau khi chị thông báo mang thai mà không có lí do chính đáng. Việc làm này là đúng vì người sử dụng lao động có toàn quyền lựa chọn người lao động.", answer: false },
        { text: "d) (Vận dụng cao) Anh G thuê lao động nhưng không kí hợp đồng, không đóng bảo hiểm xã hội theo quy định. Nếu bị kiểm tra, anh G có thể bị xử phạt vi phạm hành chính và phải khắc phục để bảo đảm quyền lợi cho người lao động.", answer: true }
    ]}
];
