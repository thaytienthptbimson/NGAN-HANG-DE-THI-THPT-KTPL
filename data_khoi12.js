/* =========================================================================
   DỮ LIỆU GDKT&PL KHỐI 12 (Sách Kết nối tri thức)
   Bản quyền thuộc về số ĐT: 0943.930.787
========================================================================= */

window.appDatabase = window.appDatabase || {};

const dataKhoi12 = {
    1: {
        title: "Chủ đề 1, 2, 3: Tăng trưởng, Hội nhập kinh tế và An sinh xã hội",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Tổng sản phẩm quốc nội (GDP) là thước đo phản ánh giá trị nào sau đây?", options: ["Tổng thu nhập do công dân một nước tạo ra ở cả trong và ngoài nước.", "Giá trị bằng tiền của tất cả hàng hoá, dịch vụ cuối cùng được sản xuất ra trên lãnh thổ một nước trong thời gian nhất định.", "Tổng giá trị tài sản xuất khẩu ròng của quốc gia.", "Lượng kiều hối gửi về nước hằng năm."], answer: 1 },
                { type: 'mcq', text: "Phát triển kinh tế là quá trình biến đổi cả về lượng và chất của nền kinh tế, được đo lường thông qua các tiêu chí nào?", options: ["Sự tăng trưởng kinh tế gắn liền với cơ cấu kinh tế hợp lí và tiến bộ, công bằng xã hội.", "Chỉ cần tốc độ tăng trưởng GDP đạt hai con số.", "Giảm hoàn toàn tỉ trọng sản xuất nông nghiệp về 0%.", "Chỉ quan tâm đến chỉ số bảo vệ môi trường."], answer: 0 },
                { type: 'mcq', text: "Việt Nam gia nhập Tổ chức Thương mại Thế giới (WTO) là hình thức hội nhập kinh tế quốc tế ở cấp độ nào?", options: ["Hội nhập song phương.", "Hội nhập khu vực.", "Hội nhập toàn cầu.", "Khu vực mậu dịch tự do đơn phương."], answer: 2 },
                { type: 'mcq', text: "Bảo hiểm thất nghiệp hỗ trợ người lao động bù đắp một phần thu nhập khi họ gặp rủi ro gì?", options: ["Tai nạn giao thông ngoài giờ làm việc.", "Ốm đau, thai sản.", "Mất việc làm, cần hỗ trợ học nghề, duy trì và tìm kiếm việc làm mới.", "Cháy nổ tài sản nhà xưởng."], answer: 2 },
                { type: 'mcq', text: "Loại hình bảo hiểm nào do Nhà nước tổ chức mà người dân tham gia để được chi trả chi phí khám, chữa bệnh khi ốm đau, tai nạn?", options: ["Bảo hiểm xã hội tự nguyện.", "Bảo hiểm y tế.", "Bảo hiểm nhân thọ thương mại.", "Bảo hiểm trách nhiệm dân sự xe cơ giới."], answer: 1 },
                { type: 'mcq', text: "Mục tiêu cốt lõi của hệ thống chính sách an sinh xã hội tại Việt Nam là gì?", options: ["Tối đa hoá lợi nhuận cho các quỹ đầu tư tài chính.", "Giúp mọi người dân phòng ngừa, hạn chế, khắc phục rủi ro và bảo đảm mức sống tối thiểu.", "Thay thế hoàn toàn nghĩa vụ lao động của công dân.", "Cào bằng mức thu nhập giữa mọi tầng lớp trong xã hội."], answer: 1 }
            ],
            tf: [
                { 
                    type: 'tf', 
                    text: "Về Tăng trưởng kinh tế, Phát triển bền vững và An sinh xã hội:", 
                    options: [
                        { text: "a) (Nhận biết) Tăng trưởng kinh tế là điều kiện vật chất tiên quyết để thực hiện phát triển bền vững và tiến bộ xã hội.", answer: true },
                        { text: "b) (Thông hiểu) Phát triển kinh tế đồng nghĩa với việc tăng trưởng GDP bằng mọi giá, kể cả việc khai thác cạn kiệt tài nguyên thiên nhiên.", answer: false },
                        { text: "c) (Vận dụng) Nguồn vốn ODA và FDI thu hút vào Việt Nam là kết quả trực tiếp của đường lối mở cửa và hội nhập kinh tế quốc tế sâu rộng.", answer: true },
                        { text: "d) (Vận dụng cao) Chính sách trợ cấp xã hội hằng tháng cho người cao tuổi cô đơn, người khuyết tật nặng là biểu hiện của chính sách bảo hiểm thương mại sinh lời.", answer: false }
                    ]
                },
                {
                    type: 'tf',
                    text: "Đọc thông tin sau: Việt Nam đã kí kết và thực thi Hiệp định Thương mại tự do Việt Nam - Liên minh châu Âu (EVFTA). Nhờ hiệp định này, nhiều mặt hàng nông sản, thuỷ sản, dệt may của Việt Nam được hưởng mức thuế suất ưu đãi 0% khi xuất khẩu sang thị trường EU, nhưng đồng thời phải đáp ứng các tiêu chuẩn khắt khe về truy xuất nguồn gốc và phát triển xanh.",
                    options: [
                        { text: "a) (Nhận biết) Hiệp định EVFTA là biểu hiện của hoạt động hội nhập kinh tế quốc tế.", answer: true },
                        { text: "b) (Thông hiểu) Khi tham gia EVFTA, mọi hàng hoá của Việt Nam xuất khẩu sang EU đều được miễn kiểm tra chất lượng và an toàn thực phẩm.", answer: false },
                        { text: "c) (Vận dụng) Để tận dụng ưu đãi thuế quan từ EVFTA, doanh nghiệp Việt Nam buộc phải đổi mới công nghệ, chuyển đổi sang sản xuất xanh và minh bạch nguồn gốc.", answer: true },
                        { text: "d) (Vận dụng cao) Hội nhập kinh tế quốc tế giúp mở rộng thị trường xuất khẩu nhưng cũng đặt các doanh nghiệp nội địa trước áp lực cạnh tranh gay gắt về tiêu chuẩn kĩ thuật.", answer: true }
                    ]
                }
            ]
        }
    },
    2: {
        title: "Chủ đề 4, 5, 6: Lập kế hoạch kinh doanh, Trách nhiệm xã hội & Quản lí thu chi gia đình",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Yếu tố nào sau đây KHÔNG thuộc nội dung cơ bản của một bản kế hoạch kinh doanh?", options: ["Ý tưởng kinh doanh và mục tiêu kinh doanh.", "Kế hoạch sản xuất, tài chính và nhân sự.", "Phân tích rủi ro và biện pháp xử lí.", "Chi tiết tiểu sử cá nhân của tất cả khách hàng tiềm năng."], answer: 3 },
                { type: 'mcq', text: "Trách nhiệm xã hội của doanh nghiệp (CSR) bao gồm những khía cạnh cơ bản nào?", options: ["Trách nhiệm kinh tế, pháp lí, đạo đức và nhân văn (từ thiện).", "Chỉ bao gồm trách nhiệm đóng thuế cho Nhà nước.", "Chỉ bao gồm hoạt động quyên góp từ thiện cuối năm.", "Trách nhiệm thôn tính các doanh nghiệp nhỏ hơn."], answer: 0 },
                { type: 'mcq', text: "Việc doanh nghiệp đầu tư sản xuất sản phẩm chất lượng, tạo việc làm và trả lương thoả đáng cho người lao động thể hiện hình thức trách nhiệm xã hội nào?", options: ["Trách nhiệm nhân văn.", "Trách nhiệm kinh tế.", "Trách nhiệm chính trị.", "Trách nhiệm ngoại giao."], answer: 1 },
                { type: 'mcq', text: "Trong quản lí thu, chi trong gia đình, khoản thu nào sau đây thuộc nguồn thu nhập chủ động?", options: ["Tiền lãi gửi tiết kiệm ngân hàng.", "Tiền lương, tiền công làm việc hằng tháng.", "Tiền cho thuê căn hộ dư thừa.", "Tiền cổ tức được chia từ cổ phiếu."], answer: 1 },
                { type: 'mcq', text: "Bước đầu tiên khi xây dựng kế hoạch quản lí thu, chi trong gia đình là gì?", options: ["Vay tiền ngân hàng để chi tiêu.", "Thảo luận và xác định mục tiêu tài chính của gia đình.", "Mua sắm toàn bộ các mặt hàng giảm giá.", "Cắt giảm toàn bộ chi phí ăn uống thiết yếu."], answer: 1 },
                { type: 'mcq', text: "Theo quy tắc quản lí tài chính 50/30/20, tỉ lệ 20% thu nhập nên được ưu tiên phân bổ vào mục đích nào?", options: ["Chi tiêu thiết yếu (ăn ở, đi lại).", "Chi tiêu hưởng thụ, giải trí cá nhân.", "Tiết kiệm, dự phòng rủi ro và đầu tư tài chính.", "Mua sắm hàng hiệu xa xỉ."], answer: 2 }
            ],
            tf: [
                { 
                    type: 'tf', 
                    text: "Về Trách nhiệm xã hội của doanh nghiệp và Quyền lợi kinh tế:", 
                    options: [
                        { text: "a) (Nhận biết) Kê khai, nộp thuế đầy đủ và tuân thủ luật bảo vệ môi trường là trách nhiệm pháp lí bắt buộc của mọi doanh nghiệp.", answer: true },
                        { text: "b) (Thông hiểu) Doanh nghiệp xả trực tiếp nước thải chưa qua xử lí ra sông để tiết kiệm chi phí là thực hiện tốt trách nhiệm kinh tế với xã hội.", answer: false },
                        { text: "c) (Vận dụng) Người nộp thuế được pháp luật bảo vệ quyền lợi như được hướng dẫn thực hiện nghĩa vụ thuế, giữ bí mật thông tin và hoàn thuế theo quy định.", answer: true },
                        { text: "d) (Vận dụng cao) Thực hiện tốt trách nhiệm nhân văn (như xây trường học vùng cao, hỗ trợ đồng bào vùng bão lũ) giúp doanh nghiệp nâng cao uy tín thương hiệu và phát triển bền vững.", answer: true }
                    ]
                }
            ]
        }
    },
    3: {
        title: "Chủ đề 7, 8, 9: Quyền và nghĩa vụ công dân về Kinh tế, Văn hoá - Xã hội & Pháp luật Quốc tế",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Quyền sở hữu tài sản của công dân bao gồm các quyền năng cơ bản nào sau đây?", options: ["Quyền chiếm hữu, quyền sử dụng và quyền định đoạt.", "Quyền cho thuê, mượn và cầm cố vô điều kiện.", "Quyền kinh doanh, đóng thuế và thừa kế.", "Quyền tiêu dùng, tàng trữ và huỷ hoại tài sản công."], answer: 0 },
                { type: 'mcq', text: "Theo quy định của pháp luật hiện hành, công dân có quyền tự do kinh doanh trong những ngành, nghề nào?", options: ["Kinh doanh bất cứ loại hàng hoá nào mang lại lợi nhuận cao.", "Tự do kinh doanh trong những ngành, nghề mà pháp luật không cấm.", "Chỉ được kinh doanh các mặt hàng do Nhà nước chỉ định.", "Được phép kinh doanh pháo nổ nếu có giấy phép hộ kinh doanh."], answer: 1 },
                { type: 'mcq', text: "Trong quyền sở hữu tài sản, quyền chuyển giao quyền sở hữu tài sản, từ bỏ quyền sở hữu, tiêu dùng hoặc tiêu huỷ tài sản được gọi là gì?", options: ["Quyền chiếm hữu.", "Quyền sử dụng.", "Quyền định đoạt.", "Quyền quản lí."], answer: 2 },
                { type: 'mcq', text: "Theo Luật Hôn nhân và Gia đình, kết hôn giả tạo hoặc tảo hôn, cưỡng ép kết hôn là những hành vi như thế nào?", options: ["Được khuyến khích ở vùng sâu, vùng xa.", "Bị pháp luật nghiêm cấm.", "Do phong tục địa phương tự quyết định.", "Chỉ bị nhắc nhở nếu hai bên tự nguyện."], answer: 1 },
                { type: 'mcq', text: "Hệ thống các nguyên tắc và quy phạm pháp luật do các quốc gia và chủ thể khác của pháp luật quốc tế thoả thuận xây dựng nên trên cơ sở tự nguyện và bình đẳng gọi là gì?", options: ["Pháp luật quốc gia.", "Pháp luật quốc tế.", "Điều lệ công ty đa quốc gia.", "Tập quán địa phương."], answer: 1 },
                { type: 'mcq', text: "Theo Công ước Liên Hợp Quốc về Luật Biển năm 1982 (UNCLOS 1982), vùng biển nào mà quốc gia ven biển có chủ quyền hoàn toàn, đầy đủ và tuyệt đối như trên lãnh thổ đất liền?", options: ["Vùng đặc quyền kinh tế.", "Vùng nội thuỷ.", "Vùng tiếp giáp lãnh hải.", "Biển cả (Công hải)."], answer: 1 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Đọc thông tin sau: Ông A sở hữu một căn nhà mặt phố hợp pháp (đã có Giấy chứng nhận quyền sử dụng đất và tài sản gắn liền với đất). Ông A quyết định cho anh B thuê tầng 1 để mở hiệu thuốc tây trong thời hạn 2 năm. Trong quá trình thuê, anh B tự ý đập phá tường chịu lực của căn nhà để cơi nới thêm diện tích mà không hỏi ý kiến ông A.",
                    options: [
                        { text: "a) (Nhận biết) Ông A là chủ sở hữu hợp pháp nên có đầy đủ quyền chiếm hữu, quyền sử dụng và quyền định đoạt đối với căn nhà.", answer: true },
                        { text: "b) (Thông hiểu) Khi đã kí hợp đồng thuê tầng 1, anh B có toàn quyền định đoạt (bán, thế chấp hoặc phá dỡ) cấu trúc căn nhà của ông A.", answer: false },
                        { text: "c) (Vận dụng) Hành vi tự ý đập phá tường chịu lực của anh B đã vi phạm nghĩa vụ tôn trọng tài sản của người khác và vi phạm hợp đồng thuê nhà.", answer: true },
                        { text: "d) (Vận dụng cao) Ông A có quyền yêu cầu anh B chấm dứt hành vi vi phạm, khôi phục lại hiện trạng ban đầu và bồi thường thiệt hại theo quy định của Bộ luật Dân sự.", answer: true }
                    ]
                },
                {
                    type: 'tf',
                    text: "Về Công ước Liên Hợp Quốc về Luật Biển 1982 (UNCLOS) và chủ quyền biển đảo Việt Nam:",
                    options: [
                        { text: "a) (Nhận biết) Lãnh hải của quốc gia ven biển có chiều rộng không vượt quá 12 hải lí tính từ đường cơ sở.", answer: true },
                        { text: "b) (Thông hiểu) Trong vùng lãnh hải của Việt Nam, tàu thuyền quân sự nước ngoài được quyền tự do tập trận và bắn đạn thật mà không cần xin phép.", answer: false },
                        { text: "c) (Vận dụng) Trong vùng đặc quyền kinh tế rộng 200 hải lí tính từ đường cơ sở, Việt Nam có quyền chủ quyền về thăm dò, khai thác, bảo tồn và quản lí tài nguyên thiên nhiên.", answer: true },
                        { text: "d) (Vận dụng cao) Mọi tranh chấp chủ quyền trên Biển Đông cần được giải quyết bằng các biện pháp hoà bình trên cơ sở tôn trọng pháp luật quốc tế, đặc biệt là UNCLOS 1982.", answer: true }
                    ]
                }
            ]
        }
    }
};

window.appDatabase.khoi12 = dataKhoi12;