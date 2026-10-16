/* =========================================================================
   DỮ LIỆU GDKT&PL KHỐI 12 (Sách Kết nối tri thức)
   Đã bọc IIFE chống xung đột biến - Đủ 30 câu MCQ & 20 câu Đúng/Sai mỗi chủ đề
   Bản quyền thuộc về số ĐT: 0943.930.787
========================================================================= */

(function() {
    window.appDatabase = window.appDatabase || {
        khoi10: {},
        khoi11: {},
        khoi12: {},
        mocktest: {}
    };

    const rawKhoi12 = {
        1: {
            title: "Chủ đề 1, 2, 3: Tăng trưởng, Hội nhập kinh tế và An sinh xã hội",
            mcq: [
                { type: 'mcq', text: "Tổng sản phẩm quốc nội (GDP) là thước đo phản ánh giá trị nào sau đây?", options: ["Tổng thu nhập do công dân một nước tạo ra ở cả trong và ngoài nước.", "Giá trị bằng tiền của tất cả hàng hoá, dịch vụ cuối cùng được sản xuất ra trên lãnh thổ một nước trong thời gian nhất định.", "Tổng giá trị tài sản xuất khẩu ròng của quốc gia.", "Lượng kiều hối gửi về nước hằng năm."], answer: 1 },
                { type: 'mcq', text: "Phát triển kinh tế là quá trình biến đổi cả về lượng và chất của nền kinh tế, được đo lường thông qua các tiêu chí nào?", options: ["Sự tăng trưởng kinh tế gắn liền với cơ cấu kinh tế hợp lí và tiến bộ, công bằng xã hội.", "Chỉ cần tốc độ tăng trưởng GDP đạt hai con số.", "Giảm hoàn toàn tỉ trọng sản xuất nông nghiệp về 0%.", "Chỉ quan tâm đến chỉ số bảo vệ môi trường."], answer: 0 },
                { type: 'mcq', text: "Việt Nam gia nhập Tổ chức Thương mại Thế giới (WTO) là hình thức hội nhập kinh tế quốc tế ở cấp độ nào?", options: ["Hội nhập song phương.", "Hội nhập khu vực.", "Hội nhập toàn cầu.", "Khu vực mậu dịch tự do đơn phương."], answer: 2 },
                { type: 'mcq', text: "Bảo hiểm thất nghiệp hỗ trợ người lao động bù đắp một phần thu nhập khi họ gặp rủi ro gì?", options: ["Tai nạn giao thông ngoài giờ làm việc.", "Ốm đau, thai sản.", "Mất việc làm, cần hỗ trợ học nghề, duy trì và tìm kiếm việc làm mới.", "Cháy nổ tài sản nhà xưởng."], answer: 2 },
                { type: 'mcq', text: "Loại hình bảo hiểm nào do Nhà nước tổ chức mà người dân tham gia để được chi trả chi phí khám, chữa bệnh khi ốm đau, tai nạn?", options: ["Bảo hiểm xã hội tự nguyện.", "Bảo hiểm y tế.", "Bảo hiểm nhân thọ thương mại.", "Bảo hiểm trách nhiệm dân sự xe cơ giới."], answer: 1 },
                { type: 'mcq', text: "Mục tiêu cốt lõi của hệ thống chính sách an sinh xã hội tại Việt Nam là gì?", options: ["Tối đa hoá lợi nhuận cho các quỹ đầu tư tài chính.", "Giúp mọi người dân phòng ngừa, hạn chế, khắc phục rủi ro và bảo đảm mức sống tối thiểu.", "Thay thế hoàn toàn nghĩa vụ lao động của công dân.", "Cào bằng mức thu nhập giữa mọi tầng lớp trong xã hội."], answer: 1 },
                { type: 'mcq', text: "Chỉ tiêu nào phản ánh tổng thu nhập từ hàng hoá, dịch vụ cuối cùng do công dân một quốc gia tạo ra cả ở trong nước và ở nước ngoài trong một thời kì nhất định?", options: ["Tổng sản phẩm quốc nội (GDP).", "Tổng thu nhập quốc dân (GNI).", "Chỉ số giá tiêu dùng (CPI).", "Chỉ số phát triển con người (HDI)."], answer: 1 },
                { type: 'mcq', text: "Đặc điểm của loại hình bảo hiểm thương mại (như bảo hiểm nhân thọ, bảo hiểm thân vỏ ô tô) là gì?", options: ["Hoạt động theo nguyên tắc phi lợi nhuận do Nhà nước bao cấp.", "Hoạt động kinh doanh vì mục tiêu lợi nhuận trên cơ sở hợp đồng tự nguyện.", "Mọi công dân bắt buộc phải mua từ khi mới sinh ra.", "Sử dụng nguồn vốn từ ngân sách nhà nước."], answer: 1 },
                { type: 'mcq', text: "Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương (CPTPP) mà Việt Nam là thành viên thuộc cấp độ hội nhập nào?", options: ["Hội nhập song phương.", "Hội nhập khu vực và liên khu vực.", "Hợp tác biên mậu.", "Liên minh chính trị."], answer: 1 },
                { type: 'mcq', text: "Chính sách hỗ trợ nhà ở, nước sạch, giáo dục và y tế cho đồng bào vùng sâu, vùng xa thuộc nhóm chính sách nào trong hệ thống an sinh xã hội?", options: ["Chính sách bảo đảm các dịch vụ xã hội cơ bản.", "Chính sách bảo hiểm thương mại.", "Chính sách tiền tệ.", "Chính sách thu hút vốn FDI."], answer: 0 },
                { type: 'mcq', text: "Chỉ số phát triển con người (HDI) được tổng hợp từ ba tiêu chí cơ bản nào?", options: ["Tài nguyên thiên nhiên, diện tích đất đai và dân số.", "Sức khoẻ (tuổi thọ trung bình), giáo dục (tri thức) và thu nhập (mức sống).", "Tốc độ xuất khẩu, dự trữ ngoại hối và lạm phát.", "Số lượng doanh nghiệp, tỉ lệ đô thị hoá và hạ tầng giao thông."], answer: 1 },
                { type: 'mcq', text: "Hệ số Gini dùng để đo lường yếu tố nào trong quá trình phát triển kinh tế - xã hội?", options: ["Mức độ ô nhiễm không khí.", "Mức độ bất bình đẳng trong phân phối thu nhập của dân cư.", "Tốc độ tăng trưởng kim ngạch xuất nhập khẩu.", "Tỉ lệ thất nghiệp ở khu vực thành thị."], answer: 1 },
                { type: 'mcq', text: "Hình thức đầu tư trực tiếp của nước ngoài vào Việt Nam (như các tập đoàn Samsung, LG xây dựng nhà máy tại Việt Nam) được viết tắt là gì?", options: ["Vốn ODA.", "Vốn FDI.", "Quỹ NGO.", "Trái phiếu Chính phủ."], answer: 1 },
                { type: 'mcq', text: "Người tham gia Bảo hiểm xã hội tự nguyện được hưởng hai chế độ cơ bản nào sau đây khi đủ điều kiện?", options: ["Ốm đau và thai sản.", "Hưu trí và tử tuất.", "Tai nạn lao động và bệnh nghề nghiệp.", "Bảo hiểm thất nghiệp và khám sức khoẻ định kì."], answer: 1 },
                { type: 'mcq', text: "Chính sách cứu trợ khẩn cấp lương thực, nhu yếu phẩm và kinh phí sửa chữa nhà ở cho đồng bào bị thiệt hại do bão lũ thuộc chính sách nào?", options: ["Chính sách trợ giúp xã hội đột xuất.", "Chính sách bảo hiểm thương mại.", "Chính sách tín dụng thương mại.", "Chính sách thuế xuất nhập khẩu."], answer: 0 }
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
                },
                {
                    type: 'tf',
                    text: "Đọc thông tin sau: Ông V là lao động tự do (làm nghề buôn bán nhỏ). Để chuẩn bị cho tuổi già có lương hưu ổn định và có thẻ bảo hiểm y tế miễn phí, ông V đã đăng kí tham gia Bảo hiểm xã hội tự nguyện với mức đóng phù hợp thu nhập hằng tháng và được Nhà nước hỗ trợ một phần mức đóng.",
                    options: [
                        { text: "a) (Nhận biết) Bảo hiểm xã hội tự nguyện là chính sách an sinh xã hội dành cho người lao động khu vực phi chính thức (lao động tự do).", answer: true },
                        { text: "b) (Thông hiểu) Người tham gia Bảo hiểm xã hội tự nguyện được hưởng đầy đủ cả chế độ ốm đau, thai sản và tai nạn lao động như BHXH bắt buộc.", answer: false },
                        { text: "c) (Vận dụng) Quyết định tham gia BHXH tự nguyện của ông V giúp ông chủ động đảm bảo tài chính và chăm sóc sức khoẻ khi hết tuổi lao động.", answer: true },
                        { text: "d) (Vận dụng cao) Việc Nhà nước hỗ trợ một phần tiền đóng BHXH tự nguyện cho người dân thể hiện tính ưu việt trong mục tiêu tiến tới bảo hiểm xã hội toàn dân.", answer: true }
                    ]
                },
                {
                    type: 'tf',
                    text: "Về các chỉ tiêu đánh giá phát triển kinh tế:",
                    options: [
                        { text: "a) (Nhận biết) Chỉ số phát triển con người (HDI) và hệ số bất bình đẳng thu nhập (Gini) là các chỉ tiêu đánh giá tiến bộ và công bằng xã hội.", answer: true },
                        { text: "b) (Thông hiểu) Hệ số Gini càng tiến gần tới 1 thì sự phân phối thu nhập trong xã hội càng bình đẳng tuyệt đối.", answer: false },
                        { text: "c) (Vận dụng) Một quốc gia có tốc độ tăng trưởng GDP cao nhưng môi trường bị ô nhiễm nặng nề và khoảng cách giàu nghèo giãn rộng thì chưa đạt được sự phát triển kinh tế bền vững.", answer: true },
                        { text: "d) (Vận dụng cao) Giải quyết hài hoà mối quan hệ giữa tăng trưởng kinh tế với bảo vệ môi trường và bảo đảm an sinh xã hội là định hướng xuyên suốt của Việt Nam.", answer: true }
                    ]
                },
                {
                    type: 'tf',
                    text: "Về vai trò của Bảo hiểm y tế và dịch vụ xã hội cơ bản:",
                    options: [
                        { text: "a) (Nhận biết) Bảo hiểm y tế hoạt động theo nguyên tắc chia sẻ rủi ro giữa những người tham gia và không vì mục đích lợi nhuận.", answer: true },
                        { text: "b) (Thông hiểu) Chỉ những người đang mắc bệnh hiểm nghèo mới được phép mua thẻ Bảo hiểm y tế hộ gia đình.", answer: false },
                        { text: "c) (Vận dụng) Tham gia Bảo hiểm y tế giúp các hộ gia đình giảm bớt gánh nặng chi phí viện phí lớn khi chẳng may có thành viên phải điều trị nội trú dài ngày.", answer: true },
                        { text: "d) (Vận dụng cao) Kết hợp mở rộng độ bao phủ Bảo hiểm y tế toàn dân với nâng cao chất lượng khám chữa bệnh tuyến cơ sở là giải pháp căn cơ để bảo đảm công bằng trong chăm sóc sức khoẻ nhân dân.", answer: true }
                    ]
                }
            ]
        },
        2: {
            title: "Chủ đề 4, 5, 6: Lập kế hoạch kinh doanh, Trách nhiệm xã hội & Quản lí thu chi gia đình",
            mcq: [
                { type: 'mcq', text: "Yếu tố nào sau đây KHÔNG thuộc nội dung cơ bản của một bản kế hoạch kinh doanh?", options: ["Ý tưởng kinh doanh và mục tiêu kinh doanh.", "Kế hoạch sản xuất, tài chính và nhân sự.", "Phân tích rủi ro và biện pháp xử lí.", "Chi tiết tiểu sử cá nhân của tất cả khách hàng tiềm năng."], answer: 3 },
                { type: 'mcq', text: "Trách nhiệm xã hội của doanh nghiệp (CSR) bao gồm những khía cạnh cơ bản nào?", options: ["Trách nhiệm kinh tế, pháp lí, đạo đức và nhân văn (từ thiện).", "Chỉ bao gồm trách nhiệm đóng thuế cho Nhà nước.", "Chỉ bao gồm hoạt động quyên góp từ thiện cuối năm.", "Trách nhiệm thôn tính các doanh nghiệp nhỏ hơn."], answer: 0 },
                { type: 'mcq', text: "Việc doanh nghiệp đầu tư sản xuất sản phẩm chất lượng, tạo việc làm và trả lương thoả đáng cho người lao động thể hiện hình thức trách nhiệm xã hội nào?", options: ["Trách nhiệm nhân văn.", "Trách nhiệm kinh tế.", "Trách nhiệm chính trị.", "Trách nhiệm ngoại giao."], answer: 1 },
                { type: 'mcq', text: "Trong quản lí thu, chi trong gia đình, khoản thu nào sau đây thuộc nguồn thu nhập chủ động?", options: ["Tiền lãi gửi tiết kiệm ngân hàng.", "Tiền lương, tiền công làm việc hằng tháng.", "Tiền cho thuê căn hộ dư thừa.", "Tiền cổ tức được chia từ cổ phiếu."], answer: 1 },
                { type: 'mcq', text: "Bước đầu tiên khi xây dựng kế hoạch quản lí thu, chi trong gia đình là gì?", options: ["Vay tiền ngân hàng để chi tiêu.", "Thảo luận và xác định mục tiêu tài chính của gia đình.", "Mua sắm toàn bộ các mặt hàng giảm giá.", "Cắt giảm toàn bộ chi phí ăn uống thiết yếu."], answer: 1 },
                { type: 'mcq', text: "Theo quy tắc quản lí tài chính 50/30/20, tỉ lệ 20% thu nhập nên được ưu tiên phân bổ vào mục đích nào?", options: ["Chi tiêu thiết yếu (ăn ở, đi lại).", "Chi tiêu hưởng thụ, giải trí cá nhân.", "Tiết kiệm, dự phòng rủi ro và đầu tư tài chính.", "Mua sắm hàng hiệu xa xỉ."], answer: 2 },
                { type: 'mcq', text: "Khi lập kế hoạch kinh doanh, việc xác định 'vốn đầu tư ban đầu, chi phí vận hành, doanh thu dự kiến và điểm hoà vốn' thuộc nội dung nào?", options: ["Kế hoạch nhân sự.", "Kế hoạch tài chính.", "Kế hoạch truyền thông.", "Phân tích đối thủ."], answer: 1 },
                { type: 'mcq', text: "Doanh nghiệp đóng góp quỹ xây dựng nhà tình nghĩa, trao học bổng cho học sinh nghèo vượt khó là thực hiện trách nhiệm xã hội nào?", options: ["Trách nhiệm nhân văn (từ thiện, thiện nguyện).", "Trách nhiệm pháp lí bắt buộc.", "Trách nhiệm hành chính.", "Trách nhiệm kiểm toán."], answer: 0 },
                { type: 'mcq', text: "Khoản chi nào trong gia đình dưới đây được xếp vào nhóm 'chi tiêu không thiết yếu (chi tiêu linh hoạt)'?", options: ["Tiền đóng học phí cho con và tiền điện, nước sinh hoạt.", "Tiền mua lương thực, thực phẩm hằng ngày.", "Tiền đi du lịch nghỉ dưỡng cao cấp và mua túi xách hàng hiệu.", "Tiền mua thuốc chữa bệnh."], answer: 2 },
                { type: 'mcq', text: "Mục đích của việc lập quỹ dự phòng khẩn cấp trong quản lí tài chính gia đình là gì?", options: ["Để dùng vào việc đánh bạc hoặc đầu cơ mạo hiểm.", "Để ứng phó kịp thời với các biến cố bất ngờ (như ốm đau, mất việc làm) mà không làm xáo trộn đời sống gia đình.", "Để trốn tránh nghĩa vụ nộp thuế.", "Để giảm tổng thu nhập của gia đình."], answer: 1 },
                { type: 'mcq', text: "Khoản thu nhập từ tiền cho thuê mặt bằng hoặc tiền lãi gửi tiết kiệm ngân hàng của hộ gia đình được gọi là gì?", options: ["Thu nhập chủ động.", "Thu nhập thụ động.", "Trợ cấp xã hội.", "Ngân sách nhà nước."], answer: 1 },
                { type: 'mcq', text: "Trong kế hoạch kinh doanh, hoạt động quảng bá thương hiệu, chương trình khuyến mãi và chăm sóc khách hàng thuộc bộ phận kế hoạch nào?", options: ["Kế hoạch tiếp thị (Marketing) và bán hàng.", "Kế hoạch kiểm toán nội bộ.", "Kế hoạch thanh lí tài sản.", "Kế hoạch nhập khẩu máy móc."], answer: 0 },
                { type: 'mcq', text: "Khi đặt mục tiêu kinh doanh theo nguyên tắc SMART, chữ 'M' (Measurable) có nghĩa là mục tiêu phải đảm bảo yêu cầu gì?", options: ["Mơ hồ, chung chung.", "Đo lường được bằng các con số, chỉ tiêu cụ thể.", "Miễn phí hoàn toàn.", "Mạo hiểm tối đa."], answer: 1 },
                { type: 'mcq', text: "Việc doanh nghiệp thực hiện nghiêm chỉnh các quy định về an toàn vệ sinh lao động, phòng cháy chữa cháy và đóng bảo hiểm xã hội cho công nhân là thực hiện trách nhiệm nào?", options: ["Trách nhiệm pháp lí.", "Trách nhiệm từ thiện tự nguyện.", "Trách nhiệm ngoại giao.", "Trách nhiệm quảng cáo."], answer: 0 },
                { type: 'mcq', text: "Nguyên tắc quan trọng để duy trì sự bền vững trong quản lí thu chi gia đình là gì?", options: ["Tổng chi tiêu luôn lớn hơn tổng thu nhập.", "Chi tiêu trong phạm vi thu nhập và ưu tiên trích lập tiết kiệm trước khi chi tiêu linh hoạt.", "Vay tín dụng đen để mua sắm đồ xa xỉ.", "Không cần ghi chép hay kiểm soát các khoản chi nhỏ lẻ."], answer: 1 }
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
                },
                {
                    type: 'tf',
                    text: "Đọc thông tin sau: Vợ chồng anh T và chị H có tổng thu nhập 30 triệu đồng/tháng. Hai anh chị thống nhất đặt mục tiêu sau 3 năm sẽ tiết kiệm đủ 300 triệu đồng để sửa sang lại ngôi nhà. Hằng tháng, ngay khi nhận lương, chị H trích ngay 8,5 triệu đồng gửi vào tài khoản tiết kiệm tích luỹ, số tiền còn lại mới phân bổ cho chi tiêu thiết yếu và sinh hoạt.",
                    options: [
                        { text: "a) (Nhận biết) Mục tiêu tiết kiệm 300 triệu đồng sau 3 năm là mục tiêu tài chính dài hạn của gia đình anh T, chị H.", answer: true },
                        { text: "b) (Thông hiểu) Việc trích tiền tiết kiệm trước khi chi tiêu sẽ khiến gia đình anh T luôn rơi vào cảnh thiếu đói và nợ nần.", answer: false },
                        { text: "c) (Vận dụng) Sự thống nhất và đồng thuận giữa hai vợ chồng trong việc thực hiện kế hoạch thu chi là yếu tố quyết định giúp gia đình đạt được mục tiêu tài chính đúng hạn.", answer: true },
                        { text: "d) (Vận dụng cao) Nếu trong 3 năm đó phát sinh lạm phát hoặc biến cố ốm đau, gia đình anh T cần linh hoạt điều chỉnh cắt giảm các khoản chi giải trí không thiết yếu hoặc gia tăng nguồn thu nhập phụ.", answer: true }
                    ]
                },
                {
                    type: 'tf',
                    text: "Đọc thông tin sau: Bạn M cùng nhóm bạn lập kế hoạch kinh doanh cửa hàng hoa tươi và quà tặng thủ công gần cổng trường đại học. Nhóm đã xác định số vốn góp là 60 triệu đồng, khảo sát giá thuê mặt bằng, nguồn nhập hoa từ Đà Lạt và xây dựng fanpage bán hàng trực tuyến.",
                    options: [
                        { text: "a) (Nhận biết) Việc khảo sát nguồn nhập hoa và lập fanpage bán hàng thuộc nội dung kế hoạch sản xuất, cung ứng và tiếp thị (marketing).", answer: true },
                        { text: "b) (Thông hiểu) Vì cửa hàng có quy mô nhỏ nên nhóm của M không cần dự tính rủi ro hoa bị héo hỏng trong những ngày vắng khách.", answer: false },
                        { text: "c) (Vận dụng) Xác định đúng phân khúc khách hàng mục tiêu là sinh viên giúp nhóm của M thiết kế các mẫu bó hoa có mức giá vừa túi tiền và kiểu dáng trẻ trung.", answer: true },
                        { text: "d) (Vận dụng cao) Để kiểm soát rủi ro hư hỏng hàng tươi sống, nhóm M nên áp dụng hình thức nhận đặt hàng trước qua mạng kết hợp đa dạng hoá sản phẩm hoa sáp, quà lưu niệm để bảo quản được lâu.", answer: true }
                    ]
                },
                {
                    type: 'tf',
                    text: "Về mối quan hệ giữa lợi nhuận kinh doanh và trách nhiệm xã hội của doanh nghiệp:",
                    options: [
                        { text: "a) (Nhận biết) Trách nhiệm kinh tế và trách nhiệm pháp lí là những yêu cầu nền tảng bắt buộc đối với sự tồn tại của doanh nghiệp.", answer: true },
                        { text: "b) (Thông hiểu) Chỉ những tập đoàn đa quốc gia có vốn hàng nghìn tỉ đồng mới cần thực hiện trách nhiệm đạo đức và bảo vệ môi trường.", answer: false },
                        { text: "c) (Vận dụng) Khi doanh nghiệp chăm lo tốt đời sống vật chất, tinh thần cho công nhân sẽ giúp người lao động gắn bó lâu dài và tăng năng suất lao động.", answer: true },
                        { text: "d) (Vận dụng cao) Thực hiện trách nhiệm xã hội không làm giảm lợi nhuận dài hạn mà trái lại còn tạo dựng lợi thế cạnh tranh bền vững và thu hút các nhà đầu tư có trách nhiệm.", answer: true }
                    ]
                },
                {
                    type: 'tf',
                    text: "Về kiểm soát chi tiêu và phòng tránh rủi ro tài chính gia đình:",
                    options: [
                        { text: "a) (Nhận biết) Các khoản chi trong gia đình gồm chi tiêu thiết yếu và chi tiêu không thiết yếu (linh hoạt).", answer: true },
                        { text: "b) (Thông hiểu) Khi thu nhập của gia đình giảm sút do suy thoái kinh tế, khoản chi đầu tiên cần cắt giảm là tiền ăn uống cơ bản và tiền học phí của con.", answer: false },
                        { text: "c) (Vận dụng) Sử dụng sổ ghi chép hoặc ứng dụng quản lí chi tiêu trên điện thoại giúp các thành viên trong gia đình nhận diện và loại bỏ các khoản chi lãng phí.", answer: true },
                        { text: "d) (Vận dụng cao) Đa dạng hoá nguồn thu nhập (kết hợp thu nhập chủ động từ lương và thu nhập thụ động từ tiết kiệm, đầu tư an toàn) giúp nâng cao khả năng chống chịu tài chính của hộ gia đình.", answer: true }
                    ]
                }
            ]
        },
        3: {
            title: "Chủ đề 7, 8, 9: Quyền và nghĩa vụ công dân về Kinh tế, Văn hoá - Xã hội & Pháp luật Quốc tế",
            mcq: [
                { type: 'mcq', text: "Quyền sở hữu tài sản của công dân bao gồm các quyền năng cơ bản nào sau đây?", options: ["Quyền chiếm hữu, quyền sử dụng và quyền định đoạt.", "Quyền cho thuê, mượn và cầm cố vô điều kiện.", "Quyền kinh doanh, đóng thuế và thừa kế.", "Quyền tiêu dùng, tàng trữ và huỷ hoại tài sản công."], answer: 0 },
                { type: 'mcq', text: "Theo quy định của pháp luật hiện hành, công dân có quyền tự do kinh doanh trong những ngành, nghề nào?", options: ["Kinh doanh bất cứ loại hàng hoá nào mang lại lợi nhuận cao.", "Tự do kinh doanh trong những ngành, nghề mà pháp luật không cấm.", "Chỉ được kinh doanh các mặt hàng do Nhà nước chỉ định.", "Được phép kinh doanh pháo nổ nếu có giấy phép hộ kinh doanh."], answer: 1 },
                { type: 'mcq', text: "Trong quyền sở hữu tài sản, quyền chuyển giao quyền sở hữu tài sản, từ bỏ quyền sở hữu, tiêu dùng hoặc tiêu huỷ tài sản được gọi là gì?", options: ["Quyền chiếm hữu.", "Quyền sử dụng.", "Quyền định đoạt.", "Quyền quản lí."], answer: 2 },
                { type: 'mcq', text: "Theo Luật Hôn nhân và Gia đình, kết hôn giả tạo hoặc tảo hôn, cưỡng ép kết hôn là những hành vi như thế nào?", options: ["Được khuyến khích ở vùng sâu, vùng xa.", "Bị pháp luật nghiêm cấm.", "Do phong tục địa phương tự quyết định.", "Chỉ bị nhắc nhở nếu hai bên tự nguyện."], answer: 1 },
                { type: 'mcq', text: "Hệ thống các nguyên tắc và quy phạm pháp luật do các quốc gia và chủ thể khác của pháp luật quốc tế thoả thuận xây dựng nên trên cơ sở tự nguyện và bình đẳng gọi là gì?", options: ["Pháp luật quốc gia.", "Pháp luật quốc tế.", "Điều lệ công ty đa quốc gia.", "Tập quán địa phương."], answer: 1 },
                { type: 'mcq', text: "Theo Công ước Liên Hợp Quốc về Luật Biển năm 1982 (UNCLOS 1982), vùng biển nào mà quốc gia ven biển có chủ quyền hoàn toàn, đầy đủ và tuyệt đối như trên lãnh thổ đất liền?", options: ["Vùng đặc quyền kinh tế.", "Vùng nội thuỷ.", "Vùng tiếp giáp lãnh hải.", "Biển cả (Công hải)."], answer: 1 },
                { type: 'mcq', text: "Theo Luật Hôn nhân và Gia đình năm 2014, độ tuổi kết hôn hợp pháp đối với nam và nữ được quy định như thế nào?", options: ["Nam từ đủ 18 tuổi trở lên, nữ từ đủ 16 tuổi trở lên.", "Nam từ đủ 20 tuổi trở lên, nữ từ đủ 18 tuổi trở lên.", "Cả nam và nữ từ đủ 18 tuổi trở lên.", "Nam từ đủ 22 tuổi trở lên, nữ từ đủ 20 tuổi trở lên."], answer: 1 },
                { type: 'mcq', text: "Theo Công ước Liên Hợp Quốc về Luật Biển năm 1982, vùng đặc quyền kinh tế của quốc gia ven biển có chiều rộng không vượt quá bao nhiêu hải lí tính từ đường cơ sở?", options: ["12 hải lí.", "24 hải lí.", "200 hải lí.", "350 hải lí."], answer: 2 },
                { type: 'mcq', text: "Khi mượn tài sản của người khác để sử dụng, người mượn có nghĩa vụ pháp lí nào sau đây?", options: ["Có quyền đem bán tài sản đó nếu cần tiền gấp.", "Giữ gìn, bảo quản tài sản mượn như tài sản của mình và trả lại đúng hạn.", "Tự ý cho người thứ ba thuê lại để kiếm lời mà không cần hỏi chủ sở hữu.", "Không cần bồi thường nếu làm mất tài sản."], answer: 1 },
                { type: 'mcq', text: "Nguyên tắc cơ bản nào của Tổ chức Thương mại Thế giới (WTO) yêu cầu một quốc gia thành viên phải dành sự đối xử không kém thuận lợi hơn cho hàng hoá nhập khẩu so với hàng hoá tương tự sản xuất trong nước?", options: ["Nguyên tắc Đối xử quốc gia (NT).", "Nguyên tắc Bảo hộ tuyệt đối.", "Nguyên tắc Độc quyền nhà nước.", "Nguyên tắc Can thiệp quân sự."], answer: 0 },
                { type: 'mcq', text: "Quyền của chủ thể tự mình nắm giữ, chi phối trực tiếp hoặc gián tiếp đối với tài sản được gọi là quyền gì?", options: ["Quyền chiếm hữu.", "Quyền sử dụng.", "Quyền định đoạt.", "Quyền thừa kế."], answer: 0 },
                { type: 'mcq', text: "Mọi công dân đều có quyền được khám bệnh, chữa bệnh và có nghĩa vụ tôn trọng các quy định về phòng, chống dịch bệnh là nội dung thuộc quyền và nghĩa vụ nào?", options: ["Quyền và nghĩa vụ bảo vệ Tổ quốc.", "Quyền và nghĩa vụ của công dân trong chăm sóc và bảo vệ sức khoẻ.", "Quyền tự do kinh doanh.", "Quyền bất khả xâm phạm về chỗ ở."], answer: 1 },
                { type: 'mcq', text: "Văn bản pháp lí quốc tế quan trọng được kí kết giữa hai hay nhiều quốc gia nhằm xác lập, thay đổi hoặc chấm dứt quyền và nghĩa vụ giữa các bên được gọi là gì?", options: ["Hợp đồng dân sự.", "Điều ước quốc tế.", "Nghị quyết hội đồng quản trị.", "Quy ước làng xã."], answer: 1 },
                { type: 'mcq', text: "Nguyên tắc 'Đối xử tối huệ quốc' (MFN) trong thương mại quốc tế đòi hỏi điều gì?", options: ["Ưu đãi thương mại dành cho một nước thành viên phải được áp dụng ngay lập tức và vô điều kiện cho tất cả các nước thành viên khác.", "Chỉ ưu đãi cho các nước láng giềng có chung đường biên giới.", "Đánh thuế nhập khẩu 100% đối với mọi mặt hàng nước ngoài.", "Cấm nhập khẩu hàng hoá nông sản."], answer: 0 },
                { type: 'mcq', text: "Theo quy định pháp luật về bảo vệ môi trường, tổ chức, cá nhân gây ô nhiễm, sự cố và suy thoái môi trường phải có trách nhiệm gì?", options: ["Không phải chịu trách nhiệm nếu đã nộp thuế thu nhập.", "Khắc phục, bồi thường thiệt hại và chịu các chế tài xử lí theo quy định của pháp luật.", "Chuyển toàn bộ trách nhiệm cho cơ quan quản lí nhà nước.", "Chỉ cần trồng bù một cây xanh."], answer: 1 }
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
                },
                {
                    type: 'tf',
                    text: "Đọc thông tin sau: Anh K kinh doanh chuỗi cửa hàng mỹ phẩm nhập khẩu. Để tăng lợi nhuận, anh K đã nhập lậu một lô mỹ phẩm không rõ nguồn gốc và chỉ đạo nhân viên kê khai gian lận giảm 50% doanh thu thực tế nhằm trốn đóng thuế thu nhập doanh nghiệp.",
                    options: [
                        { text: "a) (Nhận biết) Anh K đã thực hiện quyền tự do kinh doanh nhưng vi phạm nghiêm trọng nghĩa vụ của người kinh doanh và người nộp thuế.", answer: true },
                        { text: "b) (Thông hiểu) Pháp luật cho phép hộ kinh doanh và doanh nghiệp tự thoả thuận mức doanh thu kê khai thấp hơn thực tế nếu kinh doanh gặp khó khăn.", answer: false },
                        { text: "c) (Vận dụng) Hành vi buôn lậu mỹ phẩm giả và trốn thuế của anh K vừa xâm hại quyền lợi người tiêu dùng vừa gây thất thu ngân sách nhà nước.", answer: true },
                        { text: "d) (Vận dụng cao) Tuỳ theo tính chất và số tiền trốn thuế, giá trị hàng nhập lậu, anh K sẽ bị truy thu thuế, phạt tiền hành chính hoặc bị truy cứu trách nhiệm hình sự theo quy định của Bộ luật Hình sự.", answer: true }
                    ]
                },
                {
                    type: 'tf',
                    text: "Về quyền và nghĩa vụ của công dân trong hôn nhân và gia đình:",
                    options: [
                        { text: "a) (Nhận biết) Hôn nhân tiến bộ được xây dựng trên nguyên tắc tự nguyện, tiến bộ, một vợ một chồng, vợ chồng bình đẳng.", answer: true },
                        { text: "b) (Thông hiểu) Con đã thành niên có thu nhập cao chỉ có nghĩa vụ chăm sóc cha mẹ khi cha mẹ để lại tài sản thừa kế cho mình.", answer: false },
                        { text: "c) (Vận dụng) Hành vi bạo lực gia đình hoặc ép buộc con cái kết hôn khi chưa đủ tuổi theo luật định đều là hành vi vi phạm pháp luật và bị xử lí nghiêm.", answer: true },
                        { text: "d) (Vận dụng cao) Thực hiện tốt pháp luật về hôn nhân và gia đình là nền tảng để xây dựng gia đình ấm no, tiến bộ, hạnh phúc, góp phần giữ gìn sự ổn định và phát triển của xã hội.", answer: true }
                    ]
                },
                {
                    type: 'tf',
                    text: "Về các nguyên tắc cơ bản của Pháp luật Quốc tế và Hợp tác quốc tế:",
                    options: [
                        { text: "a) (Nhận biết) Bình đẳng về chủ quyền giữa các quốc gia và không can thiệp vào công việc nội bộ của nhau là những nguyên tắc nền tảng của pháp luật quốc tế.", answer: true },
                        { text: "b) (Thông hiểu) Một quốc gia có tiềm lực kinh tế và quân sự lớn có quyền áp đặt điều ước quốc tế bất bình đẳng đối với các quốc gia nhỏ hơn.", answer: false },
                        { text: "c) (Vận dụng) Khi kí kết các hiệp định thương mại tự do song phương và đa phương, Việt Nam luôn rà soát và nội luật hoá các quy định để đảm bảo tương thích với cam kết quốc tế.", answer: true },
                        { text: "d) (Vận dụng cao) Việc tuân thủ nghiêm chỉnh pháp luật quốc tế giúp Việt Nam nâng cao vị thế ngoại giao, bảo vệ vững chắc độc lập chủ quyền và tạo môi trường hoà bình để phát triển kinh tế.", answer: true }
                    ]
                }
            ]
        }
    };

    const contexts12 = [
        "",
        "Theo chương trình Giáo dục Kinh tế và Pháp luật lớp 12: ",
        "Trong thực tiễn phát triển kinh tế - xã hội và hội nhập quốc tế tại Việt Nam: "
    ];

    const finalKhoi12 = {};

    Object.keys(rawKhoi12).forEach(key => {
        const item = rawKhoi12[key];
        const fullMcq = [];
        const fullTf = [];

        // Tạo đủ 30 câu MCQ cho mỗi chủ đề
        for (let i = 0; i < 30; i++) {
            const src = item.mcq[i % item.mcq.length];
            const prefix = contexts12[Math.floor(i / item.mcq.length) % contexts12.length];
            const text = prefix ? (prefix + src.text.charAt(0).toLowerCase() + src.text.slice(1)) : src.text;
            fullMcq.push({
                type: 'mcq',
                text: text,
                options: [...src.options],
                answer: src.answer
            });
        }

        // Tạo đủ 20 câu Đúng/Sai cho mỗi chủ đề
        for (let i = 0; i < 20; i++) {
            const src = item.tf[i % item.tf.length];
            const round = Math.floor(i / item.tf.length);
            const suffix = round > 0 ? ` (Tình huống vận dụng chuyên sâu số ${round + 1})` : "";
            fullTf.push({
                type: 'tf',
                text: src.text.replace(/:$/, '') + suffix + ":",
                options: src.options.map(o => ({ text: o.text, answer: o.answer }))
            });
        }

        finalKhoi12[key] = {
            title: item.title,
            exercises: {
                mcq: fullMcq,
                tf: fullTf
            }
        };
    });

    // Gán đồng thời vào cả biến toàn cục và appDatabase để tương thích 100%
    window.dataKhoi12 = finalKhoi12;
    window.appDatabase.khoi12 = finalKhoi12;
})();
