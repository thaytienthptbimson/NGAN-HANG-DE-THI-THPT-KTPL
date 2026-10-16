/* =========================================================================
   DỮ LIỆU GDKT&PL KHỐI 12 (Sách Kết nối tri thức - Chia theo 16 Bài học)
   Mỗi bài học gồm: 30 câu Trắc nghiệm MCQ + 20 câu Đúng/Sai
   Bài kiểm tra đơn vị tự động trích xuất chuẩn 28 câu (24 MCQ + 4 Đúng/Sai)
   Bản quyền thuộc về số ĐT: 0943.930.787
========================================================================= */

(function() {
    window.appDatabase = window.appDatabase || {
        khoi10: {},
        khoi11: {},
        khoi12: {},
        mocktest: {}
    };

    const rawKhoi12ByLesson = {
        1: {
            title: "Bài 1: Tăng trưởng và phát triển kinh tế",
            mcq: [
                { type: 'mcq', text: "Tổng sản phẩm quốc nội (GDP) là thước đo phản ánh giá trị nào sau đây?", options: ["Tổng thu nhập do công dân một nước tạo ra ở cả trong và ngoài nước.", "Giá trị bằng tiền của tất cả hàng hoá, dịch vụ cuối cùng được sản xuất ra trên lãnh thổ một nước trong thời gian nhất định.", "Tổng giá trị tài sản xuất khẩu ròng của quốc gia.", "Lượng kiều hối gửi về nước hằng năm."], answer: 1 },
                { type: 'mcq', text: "Phát triển kinh tế là quá trình biến đổi cả về lượng và chất của nền kinh tế, được đo lường thông qua các tiêu chí nào?", options: ["Sự tăng trưởng kinh tế gắn liền với cơ cấu kinh tế hợp lí và tiến bộ, công bằng xã hội.", "Chỉ cần tốc độ tăng trưởng GDP đạt hai con số.", "Giảm hoàn toàn tỉ trọng sản xuất nông nghiệp về 0%.", "Chỉ quan tâm đến chỉ số bảo vệ môi trường."], answer: 0 },
                { type: 'mcq', text: "Chỉ tiêu nào phản ánh tổng thu nhập từ hàng hoá, dịch vụ cuối cùng do công dân một quốc gia tạo ra cả ở trong nước và ở nước ngoài trong một thời kì nhất định?", options: ["Tổng sản phẩm quốc nội (GDP).", "Tổng thu nhập quốc dân (GNI).", "Chỉ số giá tiêu dùng (CPI).", "Chỉ số phát triển con người (HDI)."], answer: 1 },
                { type: 'mcq', text: "Chỉ số phát triển con người (HDI) được tổng hợp từ ba tiêu chí cơ bản nào?", options: ["Tài nguyên thiên nhiên, diện tích đất đai và dân số.", "Sức khoẻ (tuổi thọ trung bình), giáo dục (tri thức) và thu nhập (mức sống).", "Tốc độ xuất khẩu, dự trữ ngoại hối và lạm phát.", "Số lượng doanh nghiệp, tỉ lệ đô thị hoá và hạ tầng giao thông."], answer: 1 },
                { type: 'mcq', text: "Hệ số Gini dùng để đo lường yếu tố nào trong quá trình phát triển kinh tế - xã hội?", options: ["Mức độ ô nhiễm không khí.", "Mức độ bất bình đẳng trong phân phối thu nhập của dân cư.", "Tốc độ tăng trưởng kim ngạch xuất nhập khẩu.", "Tỉ lệ thất nghiệp ở khu vực thành thị."], answer: 1 },
                { type: 'mcq', text: "Mối quan hệ giữa tăng trưởng kinh tế và phát triển bền vững được hiểu đúng nhất là gì?", options: ["Chỉ cần tăng trưởng kinh tế nhanh là sẽ tự động phát triển bền vững.", "Tăng trưởng kinh tế là điều kiện tiền đề vật chất, nội dung cấu thành của phát triển bền vững.", "Phát triển bền vững sẽ cản trở tốc độ tăng trưởng kinh tế.", "Hai khái niệm này mâu thuẫn triệt để với nhau."], answer: 1 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về Tăng trưởng kinh tế và Phát triển bền vững:",
                    options: [
                        { text: "a) (Nhận biết) Tăng trưởng kinh tế là điều kiện vật chất tiên quyết để thực hiện phát triển bền vững và tiến bộ xã hội.", answer: true },
                        { text: "b) (Thông hiểu) Phát triển kinh tế đồng nghĩa với việc tăng trưởng GDP bằng mọi giá, kể cả việc khai thác cạn kiệt tài nguyên thiên nhiên.", answer: false },
                        { text: "c) (Vận dụng) Chuyển dịch cơ cấu ngành kinh tế theo hướng tăng tỉ trọng công nghiệp - dịch vụ và giảm tỉ trọng nông nghiệp là phù hợp xu thế phát triển.", answer: true },
                        { text: "d) (Vận dụng cao) Mô hình kinh tế tuần hoàn, kinh tế xanh giúp giải quyết hài hoà bài toán giữa mục tiêu tăng trưởng GDP và bảo vệ môi trường sống.", answer: true }
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
                }
            ]
        },
        2: {
            title: "Bài 2: Hội nhập kinh tế quốc tế",
            mcq: [
                { type: 'mcq', text: "Việt Nam gia nhập Tổ chức Thương mại Thế giới (WTO) là hình thức hội nhập kinh tế quốc tế ở cấp độ nào?", options: ["Hội nhập song phương.", "Hội nhập khu vực.", "Hội nhập toàn cầu.", "Khu vực mậu dịch tự do đơn phương."], answer: 2 },
                { type: 'mcq', text: "Hiệp hội các quốc gia Đông Nam Á (ASEAN) thành lập Cộng đồng Kinh tế ASEAN (AEC) là biểu hiện của hình thức hội nhập kinh tế nào?", options: ["Hội nhập song phương.", "Hội nhập khu vực.", "Hội nhập toàn cầu.", "Hợp tác nội khối địa phương."], answer: 1 },
                { type: 'mcq', text: "Hình thức hợp tác kinh tế được kí kết giữa hai quốc gia dựa trên nguyên tắc bình đẳng, cùng có lợi được gọi là gì?", options: ["Hội nhập kinh tế song phương.", "Hội nhập kinh tế đa phương toàn cầu.", "Liên minh tiền tệ khu vực.", "Thị trường chung toàn cầu."], answer: 0 },
                { type: 'mcq', text: "Hình thức đầu tư trực tiếp của nước ngoài vào Việt Nam (như các tập đoàn Samsung, LG xây dựng nhà máy tại Việt Nam) được viết tắt là gì?", options: ["Vốn ODA.", "Vốn FDI.", "Quỹ NGO.", "Trái phiếu Chính phủ."], answer: 1 },
                { type: 'mcq', text: "Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương (CPTPP) mà Việt Nam là thành viên thuộc cấp độ hội nhập nào?", options: ["Hội nhập song phương.", "Hội nhập khu vực và liên khu vực.", "Hợp tác biên mậu.", "Liên minh chính trị."], answer: 1 },
                { type: 'mcq', text: "Sự kiện Việt Nam kí kết Hiệp định thương mại tự do với Liên minh châu Âu (EVFTA) giúp hàng hoá Việt Nam đạt được lợi thế chiến lược nào?", options: ["Được phép sử dụng đồng EUR trong giao dịch nội địa.", "Giảm hoặc xoá bỏ thuế quan theo lộ trình và tham gia sâu vào chuỗi cung ứng giá trị cao.", "Công dân Việt Nam được tự do đi lại không cần thị thực ở châu Âu.", "Xoá bỏ mọi rào cản kĩ thuật và kiểm dịch thực vật."], answer: 1 }
            ],
            tf: [
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
                    text: "Về cơ hội và thách thức của Hội nhập kinh tế quốc tế đối với Việt Nam:",
                    options: [
                        { text: "a) (Nhận biết) Hội nhập kinh tế quốc tế là quá trình gắn kết nền kinh tế của một quốc gia với nền kinh tế thế giới dựa trên sự chia sẻ lợi ích đồng thời tuân thủ các chuẩn mực quốc tế chung.", answer: true },
                        { text: "b) (Thông hiểu) Hội nhập kinh tế quốc tế làm mất hoàn toàn quyền tự chủ kinh tế của các quốc gia đang phát triển.", answer: false },
                        { text: "c) (Vận dụng) Nguồn vốn ODA và FDI thu hút vào Việt Nam giúp bổ sung nguồn vốn phát triển cơ sở hạ tầng và chuyển giao công nghệ hiện đại.", answer: true },
                        { text: "d) (Vận dụng cao) Để hội nhập hiệu quả, Việt Nam cần nâng cao năng lực cạnh tranh nội sinh của doanh nghiệp trong nước kết hợp xây dựng nền kinh tế độc lập, tự chủ.", answer: true }
                    ]
                }
            ]
        },
        3: {
            title: "Bài 3: Bảo hiểm",
            mcq: [
                { type: 'mcq', text: "Bảo hiểm thất nghiệp hỗ trợ người lao động bù đắp một phần thu nhập khi họ gặp rủi ro gì?", options: ["Tai nạn giao thông ngoài giờ làm việc.", "Ốm đau, thai sản.", "Mất việc làm, cần hỗ trợ học nghề, duy trì và tìm kiếm việc làm mới.", "Cháy nổ tài sản nhà xưởng."], answer: 2 },
                { type: 'mcq', text: "Loại hình bảo hiểm nào do Nhà nước tổ chức mà người dân tham gia để được chi trả chi phí khám, chữa bệnh khi ốm đau, tai nạn?", options: ["Bảo hiểm xã hội tự nguyện.", "Bảo hiểm y tế.", "Bảo hiểm nhân thọ thương mại.", "Bảo hiểm trách nhiệm dân sự xe cơ giới."], answer: 1 },
                { type: 'mcq', text: "Bảo hiểm xã hội ở Việt Nam hiện nay bao gồm hai loại hình nào?", options: ["Bảo hiểm bắt buộc và bảo hiểm tự nguyện.", "Bảo hiểm nhân thọ và phi nhân thọ.", "Bảo hiểm tài sản và bảo hiểm hàng hải.", "Bảo hiểm y tế và bảo hiểm xe máy."], answer: 0 },
                { type: 'mcq', text: "Đặc điểm của loại hình bảo hiểm thương mại (như bảo hiểm nhân thọ, bảo hiểm thân vỏ ô tô) là gì?", options: ["Hoạt động theo nguyên tắc phi lợi nhuận do Nhà nước bao cấp.", "Hoạt động kinh doanh vì mục tiêu lợi nhuận trên cơ sở hợp đồng tự nguyện.", "Mọi công dân bắt buộc phải mua từ khi mới sinh ra.", "Sử dụng nguồn vốn từ ngân sách nhà nước."], answer: 1 },
                { type: 'mcq', text: "Người tham gia Bảo hiểm xã hội tự nguyện được hưởng hai chế độ cơ bản nào sau đây khi đủ điều kiện?", options: ["Ốm đau và thai sản.", "Hưu trí và tử tuất.", "Tai nạn lao động và bệnh nghề nghiệp.", "Bảo hiểm thất nghiệp và khám sức khoẻ định kì."], answer: 1 },
                { type: 'mcq', text: "Loại hình bảo hiểm nào bắt buộc đối với chủ xe cơ giới khi tham gia giao thông đường bộ tại Việt Nam?", options: ["Bảo hiểm nhân thọ trọn đời.", "Bảo hiểm trách nhiệm dân sự của chủ xe cơ giới.", "Bảo hiểm hàng không.", "Bảo hiểm thất nghiệp."], answer: 1 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Đọc thông tin sau: Ông V là lao động tự do (làm nghề buôn bán nhỏ). Để chuẩn bị cho tuổi già có lương hưu ổn định và có thẻ bảo hiểm y tế miễn phí, ông V đã đăng kí tham gia Bảo hiểm xã hội tự nguyện với mức đóng phù hợp thu nhập hằng tháng và được Nhà nước hỗ trợ một phần mức đóng.",
                    options: [
                        { text: "a) (Nhận biết) Bảo hiểm xã hội tự nguyện là chính sách bảo hiểm dành cho người lao động khu vực phi chính thức (lao động tự do).", answer: true },
                        { text: "b) (Thông hiểu) Người tham gia Bảo hiểm xã hội tự nguyện được hưởng đầy đủ cả chế độ ốm đau, thai sản và tai nạn lao động như BHXH bắt buộc.", answer: false },
                        { text: "c) (Vận dụng) Quyết định tham gia BHXH tự nguyện của ông V giúp ông chủ động đảm bảo tài chính và chăm sóc sức khoẻ khi hết tuổi lao động.", answer: true },
                        { text: "d) (Vận dụng cao) Việc Nhà nước hỗ trợ một phần tiền đóng BHXH tự nguyện cho người dân thể hiện tính ưu việt trong mục tiêu tiến tới bảo hiểm xã hội toàn dân.", answer: true }
                    ]
                },
                {
                    type: 'tf',
                    text: "Đọc thông tin sau: Chị L làm việc tại Công ty may mặc Z theo hợp đồng lao động xác định thời hạn 24 tháng và tham gia đầy đủ bảo hiểm xã hội, bảo hiểm y tế, bảo hiểm thất nghiệp. Sau khi sinh con đầu lòng, chị L được nghỉ chế độ thai sản 6 tháng và nhận được khoản tiền trợ cấp thai sản do cơ quan bảo hiểm chi trả.",
                    options: [
                        { text: "a) (Nhận biết) Khoản tiền trợ cấp thai sản mà chị L nhận được là quyền lợi từ quỹ Bảo hiểm xã hội bắt buộc.", answer: true },
                        { text: "b) (Thông hiểu) Trong thời gian chị L nghỉ hưởng chế độ thai sản, Công ty Z có quyền đơn phương chấm dứt hợp đồng lao động với chị L để tuyển người mới.", answer: false },
                        { text: "c) (Vận dụng) Việc tham gia bảo hiểm xã hội và bảo hiểm y tế giúp người lao động như chị L có nguồn tài chính bù đắp thu nhập và chăm sóc sức khoẻ khi sinh con.", answer: true },
                        { text: "d) (Vận dụng cao) Trốn đóng bảo hiểm xã hội bắt buộc cho người lao động là hành vi vi phạm pháp luật và xâm phạm trực tiếp đến quyền lợi chính đáng của người lao động.", answer: true }
                    ]
                }
            ]
        },
        4: {
            title: "Bài 4: An sinh xã hội",
            mcq: [
                { type: 'mcq', text: "Mục tiêu cốt lõi của hệ thống chính sách an sinh xã hội tại Việt Nam là gì?", options: ["Tối đa hoá lợi nhuận cho các quỹ đầu tư tài chính.", "Giúp mọi người dân phòng ngừa, hạn chế, khắc phục rủi ro và bảo đảm mức sống tối thiểu.", "Thay thế hoàn toàn nghĩa vụ lao động của công dân.", "Cào bằng mức thu nhập giữa mọi tầng lớp trong xã hội."], answer: 1 },
                { type: 'mcq', text: "Chính sách hỗ trợ nhà ở, nước sạch, giáo dục và y tế cho đồng bào vùng sâu, vùng xa thuộc nhóm chính sách nào trong hệ thống an sinh xã hội?", options: ["Chính sách bảo đảm các dịch vụ xã hội cơ bản.", "Chính sách bảo hiểm thương mại.", "Chính sách tiền tệ.", "Chính sách thu hút vốn FDI."], answer: 0 },
                { type: 'mcq', text: "Chính sách cứu trợ khẩn cấp lương thực, nhu yếu phẩm và kinh phí sửa chữa nhà ở cho đồng bào bị thiệt hại do bão lũ thuộc chính sách nào?", options: ["Chính sách trợ giúp xã hội đột xuất.", "Chính sách bảo hiểm thương mại.", "Chính sách tín dụng thương mại.", "Chính sách thuế xuất nhập khẩu."], answer: 0 },
                { type: 'mcq', text: "Chính sách Nhà nước cấp thẻ Bảo hiểm y tế miễn phí cho người thuộc hộ nghèo và đồng bào dân tộc thiểu số ở vùng đặc biệt khó khăn thể hiện mục tiêu nào?", options: ["Phân phối thu nhập bình quân chủ nghĩa.", "Thực hiện tiến bộ và công bằng xã hội, đảm bảo an sinh xã hội cho nhóm yếu thế.", "Xoá bỏ hệ thống bệnh viện tư nhân.", "Thay thế hoàn toàn chính sách giảm nghèo."], answer: 1 },
                { type: 'mcq', text: "Việc Ngân hàng Chính sách xã hội cho hộ nghèo, hộ cận nghèo vay vốn với lãi suất ưu đãi để chăn nuôi, trồng trọt thuộc chính sách an sinh xã hội nào?", options: ["Chính sách việc làm, bảo đảm thu nhập và giảm nghèo bền vững.", "Chính sách bảo hiểm thất nghiệp.", "Chính sách cứu trợ thiên tai.", "Chính sách thương mại quốc tế."], answer: 0 },
                { type: 'mcq', text: "Đối tượng nào sau đây được hưởng chế độ trợ cấp xã hội hằng tháng từ ngân sách nhà nước?", options: ["Thanh niên khỏe mạnh tự nguyện nghỉ việc.", "Trẻ em mồ côi cả cha và mẹ, người cao tuổi cô đơn không nơi nương tựa, người khuyết tật nặng.", "Chủ doanh nghiệp tư nhân kinh doanh thua lỗ.", "Người đầu tư chứng khoán gặp rủi ro."], answer: 1 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về hệ thống chính sách An sinh xã hội tại Việt Nam:",
                    options: [
                        { text: "a) (Nhận biết) Hệ thống an sinh xã hội ở Việt Nam bao gồm các trụ cột chính: chính sách việc làm - giảm nghèo, chính sách bảo hiểm, chính sách trợ giúp xã hội và chính sách dịch vụ xã hội cơ bản.", answer: true },
                        { text: "b) (Thông hiểu) Chính sách an sinh xã hội chỉ mang lại lợi ích cho người nghèo chứ không đóng góp gì cho sự ổn định chính trị - xã hội của đất nước.", answer: false },
                        { text: "c) (Vận dụng) Chương trình đào tạo nghề miễn phí và giới thiệu việc làm cho lao động nông thôn là giải pháp an sinh chủ động giúp người dân tự vươn lên thoát nghèo bền vững.", answer: true },
                        { text: "d) (Vận dụng cao) Kết hợp nguồn lực đầu tư từ ngân sách nhà nước với sự chung tay của cộng đồng doanh nghiệp, các tổ chức thiện nguyện giúp mở rộng mạng lưới an sinh xã hội, không để ai bị bỏ lại phía sau.", answer: true }
                    ]
                }
            ]
        },
        5: {
            title: "Bài 5: Lập kế hoạch kinh doanh",
            mcq: [
                { type: 'mcq', text: "Yếu tố nào sau đây KHÔNG thuộc nội dung cơ bản của một bản kế hoạch kinh doanh?", options: ["Ý tưởng kinh doanh và mục tiêu kinh doanh.", "Kế hoạch sản xuất, tài chính và nhân sự.", "Phân tích rủi ro và biện pháp xử lí.", "Chi tiết tiểu sử cá nhân của tất cả khách hàng tiềm năng."], answer: 3 },
                { type: 'mcq', text: "Khi lập kế hoạch kinh doanh, việc xác định 'vốn đầu tư ban đầu, chi phí vận hành, doanh thu dự kiến và điểm hoà vốn' thuộc nội dung nào?", options: ["Kế hoạch nhân sự.", "Kế hoạch tài chính.", "Kế hoạch truyền thông.", "Phân tích đối thủ."], answer: 1 },
                { type: 'mcq', text: "Trong kế hoạch kinh doanh, hoạt động quảng bá thương hiệu, chương trình khuyến mãi và chăm sóc khách hàng thuộc bộ phận kế hoạch nào?", options: ["Kế hoạch tiếp thị (Marketing) và bán hàng.", "Kế hoạch kiểm toán nội bộ.", "Kế hoạch thanh lí tài sản.", "Kế hoạch nhập khẩu máy móc."], answer: 0 },
                { type: 'mcq', text: "Khi đặt mục tiêu kinh doanh theo nguyên tắc SMART, chữ 'M' (Measurable) có nghĩa là mục tiêu phải đảm bảo yêu cầu gì?", options: ["Mơ hồ, chung chung.", "Đo lường được bằng các con số, chỉ tiêu cụ thể.", "Miễn phí hoàn toàn.", "Mạo hiểm tối đa."], answer: 1 },
                { type: 'mcq', text: "Khi lập kế hoạch kinh doanh, bước 'Phân tích rủi ro và biện pháp xử lí' có ý nghĩa quan trọng nhất ở điểm nào?", options: ["Để nộp phạt hành chính trước cho cơ quan thuế.", "Để đảm bảo 100% không bao giờ gặp biến cố thị trường.", "Để chủ động nhận diện các yếu tố bất định và chuẩn bị sẵn phương án ứng phó, giảm thiểu thiệt hại.", "Để loại bỏ toàn bộ đối thủ cạnh tranh trên thị trường."], answer: 2 },
                { type: 'mcq', text: "Anh D dự định mở cửa hàng kinh doanh thực phẩm sạch tại khu chung cư mới. Anh đã khảo sát số lượng hộ dân, mức thu nhập trung bình và các siêu thị xung quanh. Hoạt động này của anh D thuộc bước nào trong lập kế hoạch kinh doanh?", options: ["Phân tích các điều kiện kinh doanh và thị trường khách hàng.", "Thanh lí tài sản doanh nghiệp.", "Đánh giá kết quả tài chính cuối năm.", "Tuyển dụng giám đốc điều hành."], answer: 0 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Đọc thông tin sau: Bạn M cùng nhóm bạn lập kế hoạch kinh doanh cửa hàng hoa tươi và quà tặng thủ công gần cổng trường đại học. Nhóm đã xác định số vốn góp là 60 triệu đồng, khảo sát giá thuê mặt bằng, nguồn nhập hoa từ Đà Lạt và xây dựng fanpage bán hàng trực tuyến.",
                    options: [
                        { text: "a) (Nhận biết) Việc khảo sát nguồn nhập hoa và lập fanpage bán hàng thuộc nội dung kế hoạch sản xuất, cung ứng và tiếp thị (marketing).", answer: true },
                        { text: "b) (Thông hiểu) Vì cửa hàng có quy mô nhỏ nên nhóm của M không cần dự tính rủi ro hoa bị héo hỏng trong những ngày vắng khách.", answer: false },
                        { text: "c) (Vận dụng) Xác định đúng phân khúc khách hàng mục tiêu là sinh viên giúp nhóm của M thiết kế các mẫu bó hoa có mức giá vừa túi tiền và kiểu dáng trẻ trung.", answer: true },
                        { text: "d) (Vận dụng cao) Để kiểm soát rủi ro hư hỏng hàng tươi sống, nhóm M nên áp dụng hình thức nhận đặt hàng trước qua mạng kết hợp đa dạng hoá sản phẩm hoa sáp, quà lưu niệm để bảo quản được lâu.", answer: true }
                    ]
                }
            ]
        },
        6: {
            title: "Bài 6: Trách nhiệm xã hội của doanh nghiệp",
            mcq: [
                { type: 'mcq', text: "Trách nhiệm xã hội của doanh nghiệp (CSR) bao gồm những khía cạnh cơ bản nào?", options: ["Trách nhiệm kinh tế, pháp lí, đạo đức và nhân văn (từ thiện).", "Chỉ bao gồm trách nhiệm đóng thuế cho Nhà nước.", "Chỉ bao gồm hoạt động quyên góp từ thiện cuối năm.", "Trách nhiệm thôn tính các doanh nghiệp nhỏ hơn."], answer: 0 },
                { type: 'mcq', text: "Việc doanh nghiệp đầu tư sản xuất sản phẩm chất lượng, tạo việc làm và trả lương thoả đáng cho người lao động thể hiện hình thức trách nhiệm xã hội nào?", options: ["Trách nhiệm nhân văn.", "Trách nhiệm kinh tế.", "Trách nhiệm chính trị.", "Trách nhiệm ngoại giao."], answer: 1 },
                { type: 'mcq', text: "Doanh nghiệp đóng góp quỹ xây dựng nhà tình nghĩa, trao học bổng cho học sinh nghèo vượt khó là thực hiện trách nhiệm xã hội nào?", options: ["Trách nhiệm nhân văn (từ thiện, thiện nguyện).", "Trách nhiệm pháp lí bắt buộc.", "Trách nhiệm hành chính.", "Trách nhiệm kiểm toán."], answer: 0 },
                { type: 'mcq', text: "Việc doanh nghiệp thực hiện nghiêm chỉnh các quy định về an toàn vệ sinh lao động, phòng cháy chữa cháy và đóng bảo hiểm xã hội cho công nhân là thực hiện trách nhiệm nào?", options: ["Trách nhiệm pháp lí.", "Trách nhiệm từ thiện tự nguyện.", "Trách nhiệm ngoại giao.", "Trách nhiệm quảng cáo."], answer: 0 },
                { type: 'mcq', text: "Doanh nghiệp X thay vì xả thẳng nước thải ra sông đã đầu tư hệ thống xử lí nước thải đạt chuẩn. Hành vi này thể hiện trách nhiệm xã hội nào của doanh nghiệp?", options: ["Chỉ là trách nhiệm nhân đạo.", "Trách nhiệm pháp lí và đạo đức đối với bảo vệ môi trường.", "Trách nhiệm từ thiện tự nguyện.", "Trách nhiệm đối nội với cổ đông."], answer: 1 },
                { type: 'mcq', text: "Một tập đoàn sản xuất sữa đầu tư xây dựng trang trại bò sữa sinh thái, sử dụng năng lượng mặt trời và đồng thời trao tặng 1 triệu li sữa miễn phí cho trẻ em vùng sâu vùng xa. Tập đoàn này đã kết hợp thực hiện những trách nhiệm xã hội nào?", options: ["Chỉ thực hiện trách nhiệm pháp lí.", "Kết hợp hài hoà giữa trách nhiệm kinh tế, đạo đức bảo vệ môi trường và trách nhiệm nhân văn (từ thiện).", "Chỉ làm từ thiện để trốn nghĩa vụ đóng thuế.", "Thực hiện trách nhiệm quản lí hành chính nhà nước."], answer: 1 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về Trách nhiệm xã hội của doanh nghiệp:",
                    options: [
                        { text: "a) (Nhận biết) Kê khai, nộp thuế đầy đủ và tuân thủ luật bảo vệ môi trường là trách nhiệm pháp lí bắt buộc của mọi doanh nghiệp.", answer: true },
                        { text: "b) (Thông hiểu) Doanh nghiệp xả trực tiếp nước thải chưa qua xử lí ra sông để tiết kiệm chi phí là thực hiện tốt trách nhiệm kinh tế với xã hội.", answer: false },
                        { text: "c) (Vận dụng) Khi doanh nghiệp chăm lo tốt đời sống vật chất, tinh thần cho công nhân sẽ giúp người lao động gắn bó lâu dài và tăng năng suất lao động.", answer: true },
                        { text: "d) (Vận dụng cao) Thực hiện tốt trách nhiệm xã hội giúp doanh nghiệp nâng cao uy tín thương hiệu, vượt qua các rào cản thương mại xanh và phát triển bền vững.", answer: true }
                    ]
                }
            ]
        },
        7: {
            title: "Bài 7: Quản lí thu, chi trong gia đình",
            mcq: [
                { type: 'mcq', text: "Trong quản lí thu, chi trong gia đình, khoản thu nào sau đây thuộc nguồn thu nhập chủ động?", options: ["Tiền lãi gửi tiết kiệm ngân hàng.", "Tiền lương, tiền công làm việc hằng tháng.", "Tiền cho thuê căn hộ dư thừa.", "Tiền cổ tức được chia từ cổ phiếu."], answer: 1 },
                { type: 'mcq', text: "Bước đầu tiên khi xây dựng kế hoạch quản lí thu, chi trong gia đình là gì?", options: ["Vay tiền ngân hàng để chi tiêu.", "Thảo luận và xác định mục tiêu tài chính của gia đình.", "Mua sắm toàn bộ các mặt hàng giảm giá.", "Cắt giảm toàn bộ chi phí ăn uống thiết yếu."], answer: 1 },
                { type: 'mcq', text: "Theo quy tắc quản lí tài chính 50/30/20, tỉ lệ 20% thu nhập nên được ưu tiên phân bổ vào mục đích nào?", options: ["Chi tiêu thiết yếu (ăn ở, đi lại).", "Chi tiêu hưởng thụ, giải trí cá nhân.", "Tiết kiệm, dự phòng rủi ro và đầu tư tài chính.", "Mua sắm hàng hiệu xa xỉ."], answer: 2 },
                { type: 'mcq', text: "Khoản chi nào trong gia đình dưới đây được xếp vào nhóm 'chi tiêu không thiết yếu (chi tiêu linh hoạt)'?", options: ["Tiền đóng học phí cho con và tiền điện, nước sinh hoạt.", "Tiền mua lương thực, thực phẩm hằng ngày.", "Tiền đi du lịch nghỉ dưỡng cao cấp và mua túi xách hàng hiệu.", "Tiền mua thuốc chữa bệnh."], answer: 2 },
                { type: 'mcq', text: "Mục đích của việc lập quỹ dự phòng khẩn cấp trong quản lí tài chính gia đình là gì?", options: ["Để dùng vào việc đánh bạc hoặc đầu cơ mạo hiểm.", "Để ứng phó kịp thời với các biến cố bất ngờ (như ốm đau, mất việc làm) mà không làm xáo trộn đời sống gia đình.", "Để trốn tránh nghĩa vụ nộp thuế.", "Để giảm tổng thu nhập của gia đình."], answer: 1 },
                { type: 'mcq', text: "Khoản thu nhập từ tiền cho thuê mặt bằng hoặc tiền lãi gửi tiết kiệm ngân hàng của hộ gia đình được gọi là gì?", options: ["Thu nhập chủ động.", "Thu nhập thụ động.", "Trợ cấp xã hội.", "Ngân sách nhà nước."], answer: 1 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Đọc thông tin sau: Vợ chồng anh T và chị H có tổng thu nhập 30 triệu đồng/tháng. Hai anh chị thống nhất đặt mục tiêu sau 3 năm sẽ tiết kiệm đủ 300 triệu đồng để sửa sang lại ngôi nhà. Hằng tháng, ngay khi nhận lương, chị H trích ngay 8,5 triệu đồng gửi vào tài khoản tiết kiệm tích luỹ, số tiền còn lại mới phân bổ cho chi tiêu thiết yếu và sinh hoạt.",
                    options: [
                        { text: "a) (Nhận biết) Mục tiêu tiết kiệm 300 triệu đồng sau 3 năm là mục tiêu tài chính dài hạn của gia đình anh T, chị H.", answer: true },
                        { text: "b) (Thông hiểu) Việc trích tiền tiết kiệm trước khi chi tiêu sẽ khiến gia đình anh T luôn rơi vào cảnh thiếu đói và nợ nần.", answer: false },
                        { text: "c) (Vận dụng) Sự thống nhất và đồng thuận giữa hai vợ chồng trong việc thực hiện kế hoạch thu chi là yếu tố quyết định giúp gia đình đạt được mục tiêu tài chính đúng hạn.", answer: true },
                        { text: "d) (Vận dụng cao) Nếu trong 3 năm đó phát sinh lạm phát hoặc biến cố ốm đau, gia đình anh T cần linh hoạt điều chỉnh cắt giảm các khoản chi giải trí không thiết yếu hoặc gia tăng nguồn thu nhập phụ.", answer: true }
                    ]
                }
            ]
        },
        8: {
            title: "Bài 8: Quyền và nghĩa vụ của công dân về kinh doanh và nộp thuế",
            mcq: [
                { type: 'mcq', text: "Theo quy định của pháp luật hiện hành, công dân có quyền tự do kinh doanh trong những ngành, nghề nào?", options: ["Kinh doanh bất cứ loại hàng hoá nào mang lại lợi nhuận cao.", "Tự do kinh doanh trong những ngành, nghề mà pháp luật không cấm.", "Chỉ được kinh doanh các mặt hàng do Nhà nước chỉ định.", "Được phép kinh doanh pháo nổ nếu có giấy phép hộ kinh doanh."], answer: 1 },
                { type: 'mcq', text: "Nghĩa vụ nào sau đây là bắt buộc đối với mọi chủ thể khi tiến hành hoạt động sản xuất kinh doanh?", options: ["Kinh doanh đúng ngành, nghề đã đăng kí, bảo đảm quyền lợi người lao động và nộp thuế đầy đủ.", "Chỉ tuyển dụng người thân trong gia đình vào làm việc.", "Tự in tiền để thanh toán nội bộ.", "Từ chối sự thanh tra, kiểm tra của cơ quan thuế."], answer: 0 },
                { type: 'mcq', text: "Quyền nào sau đây là quyền hợp pháp của công dân với tư cách là người nộp thuế?", options: ["Tự ý ấn định mức thuế phải nộp hằng năm.", "Được hướng dẫn thực hiện việc nộp thuế, được giữ bí mật thông tin và được hoàn thuế theo quy định của pháp luật.", "Được miễn toàn bộ các loại thuế suốt đời.", "Kê khai giảm doanh thu để giảm tiền thuế."], answer: 1 },
                { type: 'mcq', text: "Hành vi kinh doanh hàng lậu, hàng giả, hàng xâm phạm quyền sở hữu trí tuệ là vi phạm quy định nào của pháp luật?", options: ["Vi phạm nghĩa vụ của công dân về kinh doanh.", "Thực hiện đúng quyền tự do tìm kiếm lợi nhuận.", "Vi phạm quy chế bầu cử địa phương.", "Chỉ vi phạm quy tắc đạo đức nghề nghiệp."], answer: 0 },
                { type: 'mcq', text: "Khi kinh doanh các ngành, nghề đầu tư kinh doanh có điều kiện (như kinh doanh dược phẩm, dịch vụ phòng cháy chữa cháy), chủ thể kinh doanh phải đảm bảo yêu cầu gì?", options: ["Không cần bất kì giấy phép hay chứng chỉ hành nghề nào.", "Phải đáp ứng đủ các điều kiện kinh doanh theo quy định của luật và duy trì đủ điều kiện đó trong suốt quá trình hoạt động.", "Chỉ cần thông báo bằng miệng với tổ trưởng tổ dân phố.", "Đóng thuế cao gấp 5 lần doanh nghiệp bình thường."], answer: 1 },
                { type: 'mcq', text: "Công dân thực hiện quyền khiếu nại, khởi kiện quyết định hành chính về thuế khi nào?", options: ["Khi không muốn đóng thuế cho Nhà nước.", "Khi có căn cứ cho rằng quyết định ấn định thuế hoặc xử phạt thuế đó là không đúng quy định pháp luật, xâm phạm quyền lợi hợp pháp của mình.", "Khi doanh nghiệp muốn giải thể.", "Khi muốn chuyển nhượng cổ phần cho người khác."], answer: 1 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Đọc thông tin sau: Anh K kinh doanh chuỗi cửa hàng mỹ phẩm nhập khẩu. Để tăng lợi nhuận, anh K đã nhập lậu một lô mỹ phẩm không rõ nguồn gốc và chỉ đạo nhân viên kê khai gian lận giảm 50% doanh thu thực tế nhằm trốn đóng thuế thu nhập doanh nghiệp.",
                    options: [
                        { text: "a) (Nhận biết) Anh K đã thực hiện quyền tự do kinh doanh nhưng vi phạm nghiêm trọng nghĩa vụ của người kinh doanh và người nộp thuế.", answer: true },
                        { text: "b) (Thông hiểu) Pháp luật cho phép hộ kinh doanh và doanh nghiệp tự thoả thuận mức doanh thu kê khai thấp hơn thực tế nếu kinh doanh gặp khó khăn.", answer: false },
                        { text: "c) (Vận dụng) Hành vi buôn lậu mỹ phẩm giả và trốn thuế của anh K vừa xâm hại quyền lợi người tiêu dùng vừa gây thất thu ngân sách nhà nước.", answer: true },
                        { text: "d) (Vận dụng cao) Tuỳ theo tính chất và số tiền trốn thuế, giá trị hàng nhập lậu, anh K sẽ bị truy thu thuế, phạt tiền hành chính hoặc bị truy cứu trách nhiệm hình sự theo quy định của Bộ luật Hình sự.", answer: true }
                    ]
                }
            ]
        },
        9: {
            title: "Bài 9: Quyền và nghĩa vụ của công dân về sở hữu tài sản và tôn trọng tài sản của người khác",
            mcq: [
                { type: 'mcq', text: "Quyền sở hữu tài sản của công dân bao gồm các quyền năng cơ bản nào sau đây?", options: ["Quyền chiếm hữu, quyền sử dụng và quyền định đoạt.", "Quyền cho thuê, mượn và cầm cố vô điều kiện.", "Quyền kinh doanh, đóng thuế và thừa kế.", "Quyền tiêu dùng, tàng trữ và huỷ hoại tài sản công."], answer: 0 },
                { type: 'mcq', text: "Trong 3 quyền năng của chủ sở hữu tài sản, quyền khai thác công dụng, hưởng hoa lợi, lợi tức từ tài sản được gọi là gì?", options: ["Quyền chiếm hữu.", "Quyền sử dụng.", "Quyền định đoạt.", "Quyền giám sát."], answer: 1 },
                { type: 'mcq', text: "Trong quyền sở hữu tài sản, quyền chuyển giao quyền sở hữu tài sản, từ bỏ quyền sở hữu, tiêu dùng hoặc tiêu huỷ tài sản được gọi là gì?", options: ["Quyền chiếm hữu.", "Quyền sử dụng.", "Quyền định đoạt.", "Quyền quản lí."], answer: 2 },
                { type: 'mcq', text: "Quyền của chủ thể tự mình nắm giữ, chi phối trực tiếp hoặc gián tiếp đối với tài sản được gọi là quyền gì?", options: ["Quyền chiếm hữu.", "Quyền sử dụng.", "Quyền định đoạt.", "Quyền thừa kế."], answer: 0 },
                { type: 'mcq', text: "Khi mượn tài sản của người khác để sử dụng, người mượn có nghĩa vụ pháp lí nào sau đây?", options: ["Có quyền đem bán tài sản đó nếu cần tiền gấp.", "Giữ gìn, bảo quản tài sản mượn như tài sản của mình và trả lại đúng hạn.", "Tự ý cho người thứ ba thuê lại để kiếm lời mà không cần hỏi chủ sở hữu.", "Không cần bồi thường nếu làm mất tài sản."], answer: 1 },
                { type: 'mcq', text: "Gia đình ông B đào móng xây nhà làm sụt lún và nứt tường nhà bà C liền kề. Theo quy định pháp luật dân sự về quyền sở hữu tài sản, ông B phải có nghĩa vụ gì?", options: ["Tiếp tục xây bình thường vì xây trên đất của mình.", "Yêu cầu bà C tự bỏ tiền ra sửa chữa.", "Tạm dừng thi công, khắc phục sự cố và bồi thường thiệt hại cho gia đình bà C theo quy định.", "Kiện bà C vì xây nhà sát ranh giới."], answer: 2 }
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
                }
            ]
        },
        10: {
            title: "Bài 10: Quyền và nghĩa vụ của công dân trong hôn nhân và gia đình",
            mcq: [
                { type: 'mcq', text: "Theo Luật Hôn nhân và Gia đình, kết hôn giả tạo hoặc tảo hôn, cưỡng ép kết hôn là những hành vi như thế nào?", options: ["Được khuyến khích ở vùng sâu, vùng xa.", "Bị pháp luật nghiêm cấm.", "Do phong tục địa phương tự quyết định.", "Chỉ bị nhắc nhở nếu hai bên tự nguyện."], answer: 1 },
                { type: 'mcq', text: "Theo Luật Hôn nhân và Gia đình năm 2014, độ tuổi kết hôn hợp pháp đối với nam và nữ được quy định như thế nào?", options: ["Nam từ đủ 18 tuổi trở lên, nữ từ đủ 16 tuổi trở lên.", "Nam từ đủ 20 tuổi trở lên, nữ từ đủ 18 tuổi trở lên.", "Cả nam và nữ từ đủ 18 tuổi trở lên.", "Nam từ đủ 22 tuổi trở lên, nữ từ đủ 20 tuổi trở lên."], answer: 1 },
                { type: 'mcq', text: "Nguyên tắc cơ bản của chế độ hôn nhân và gia đình ở nước ta hiện nay là gì?", options: ["Hôn nhân tự nguyện, tiến bộ, một vợ một chồng, vợ chồng bình đẳng.", "Cha mẹ đặt đâu con ngồi đấy.", "Người chồng có quyền quyết định cao hơn người vợ trong mọi việc lớn.", "Được phép kết hôn giữa những người có cùng dòng máu về trực hệ."], answer: 0 },
                { type: 'mcq', text: "Anh P và chị Q kết hôn hợp pháp năm 2020. Năm 2023, hai vợ chồng cùng góp tiền mua một mảnh đất. Tuy nhiên, trên Giấy chứng nhận quyền sử dụng đất chỉ ghi tên một mình anh P. Năm 2026, anh P muốn bán mảnh đất này thì theo Luật Hôn nhân và Gia đình, anh P phải làm gì?", options: ["Toàn quyền tự quyết định bán vì sổ đỏ chỉ đứng tên anh P.", "Việc định đoạt tài sản chung là bất động sản phải có sự thoả thuận bằng văn bản của cả hai vợ chồng anh P và chị Q.", "Chỉ cần hỏi ý kiến bố mẹ ruột của anh P.", "Bán xong không cần chia tiền cho chị Q."], answer: 1 },
                { type: 'mcq', text: "Nghĩa vụ và quyền của cha mẹ đối với con cái được pháp luật quy định như thế nào?", options: ["Thương yêu, trông nom, nuôi dưỡng, chăm sóc, bảo vệ quyền lợi hợp pháp của con và không được phân biệt đối xử giữa các con.", "Chỉ chăm sóc con trai nối dõi tông đường.", "Được quyền ép con nghỉ học đi làm thuê khi con mới 10 tuổi.", "Không chịu trách nhiệm bồi thường khi con chưa thành niên gây thiệt hại cho người khác."], answer: 0 },
                { type: 'mcq', text: "Trường hợp người đang có vợ, có chồng mà kết hôn hoặc chung sống như vợ chồng với người khác là vi phạm nguyên tắc nào?", options: ["Vi phạm nguyên tắc hôn nhân một vợ một chồng.", "Thực hiện quyền tự do cá nhân hợp pháp.", "Chỉ vi phạm quy ước khu dân cư.", "Được pháp luật cho phép nếu có đủ điều kiện kinh tế."], answer: 0 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về quyền và nghĩa vụ của công dân trong hôn nhân và gia đình:",
                    options: [
                        { text: "a) (Nhận biết) Hôn nhân tiến bộ được xây dựng trên nguyên tắc tự nguyện, tiến bộ, một vợ một chồng, vợ chồng bình đẳng.", answer: true },
                        { text: "b) (Thông hiểu) Con đã thành niên có thu nhập cao chỉ có nghĩa vụ chăm sóc cha mẹ khi cha mẹ để lại tài sản thừa kế cho mình.", answer: false },
                        { text: "c) (Vận dụng) Hành vi bạo lực gia đình hoặc ép buộc con cái kết hôn khi chưa đủ tuổi theo luật định đều là hành vi vi phạm pháp luật và bị xử lí nghiêm.", answer: true },
                        { text: "d) (Vận dụng cao) Thực hiện tốt pháp luật về hôn nhân và gia đình là nền tảng để xây dựng gia đình ấm no, tiến bộ, hạnh phúc, góp phần giữ gìn sự ổn định và phát triển của xã hội.", answer: true }
                    ]
                }
            ]
        },
        11: {
            title: "Bài 11: Quyền và nghĩa vụ của công dân trong học tập",
            mcq: [
                { type: 'mcq', text: "Công dân thực hiện quyền học tập không hạn chế thông qua hành vi nào sau đây?", options: ["Chỉ được học hết cấp Trung học phổ thông.", "Có thể học ở bất kì ngành nghề nào mà không cần thi tuyển hoặc xét tuyển.", "Được học từ tiểu học đến đại học, sau đại học và học tập suốt đời bằng nhiều hình thức phù hợp.", "Yêu cầu nhà trường cấp bằng tốt nghiệp mà không cần tham gia kì thi."], answer: 2 },
                { type: 'mcq', text: "Mọi công dân không phân biệt dân tộc, tôn giáo, tín ngưỡng, giới tính, nguồn gốc gia đình, địa vị xã hội, hoàn cảnh kinh tế đều được tạo cơ hội học tập là thể hiện nội dung gì?", options: ["Bình đẳng về cơ hội học tập.", "Đặc quyền giáo dục cho người giàu.", "Miễn thi tốt nghiệp cho tất cả học sinh.", "Bắt buộc mọi người phải học cùng một ngành nghề."], answer: 0 },
                { type: 'mcq', text: "Theo Luật Giáo dục hiện hành, cấp học nào là giáo dục bắt buộc đối với mọi trẻ em trong độ tuổi quy định?", options: ["Giáo dục mầm non.", "Giáo dục tiểu học.", "Giáo dục trung học phổ thông.", "Giáo dục đại học."], answer: 1 },
                { type: 'mcq', text: "Nghĩa vụ của công dân trong học tập được thể hiện qua hành vi nào sau đây?", options: ["Gian lận trong thi cử để đạt điểm cao.", "Hoàn thành chương trình giáo dục phổ cập, chấp hành nội quy cơ sở giáo dục và tôn trọng nhà giáo.", "Nghỉ học tuỳ ý không cần xin phép.", "Sử dụng văn bằng, chứng chỉ giả để xin việc."], answer: 1 },
                { type: 'mcq', text: "Chính sách miễn, giảm học phí và cấp học bổng khuyến khích học tập, trợ cấp xã hội cho học sinh, sinh viên thuộc hộ nghèo, vùng đặc biệt khó khăn nhằm mục đích gì?", options: ["Tạo điều kiện thực hiện công bằng xã hội trong giáo dục.", "Giảm chất lượng đào tạo của các trường đại học.", "Thay thế hoàn toàn nguồn ngân sách giáo dục.", "Khuyến khích học sinh bỏ học sớm."], answer: 0 },
                { type: 'mcq', text: "Công dân có thể học ở hệ chính quy, giáo dục thường xuyên, học từ xa, học trực tuyến hoặc vừa làm vừa học là biểu hiện của quyền nào?", options: ["Quyền học thường xuyên, học suốt đời bằng nhiều hình thức.", "Quyền tự do kinh doanh giáo dục.", "Quyền miễn trừ nghĩa vụ học tập.", "Quyền quản lí hành chính nhà trường."], answer: 0 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Đọc thông tin sau: Bạn H là học sinh người dân tộc thiểu số ở xã đặc biệt khó khăn. Nhờ nỗ lực học tập đạt kết quả xuất sắc và được hưởng chính sách cộng điểm ưu tiên khu vực cũng như hỗ trợ chi phí học tập của Nhà nước, H đã trúng tuyển vào trường Đại học Y Dược với ước mơ sau khi tốt nghiệp sẽ trở về phục vụ bản làng.",
                    options: [
                        { text: "a) (Nhận biết) Việc bạn H đăng kí dự thi và theo học tại trường Đại học Y Dược là thực hiện quyền học tập của công dân.", answer: true },
                        { text: "b) (Thông hiểu) Chính sách cộng điểm ưu tiên và hỗ trợ chi phí học tập cho học sinh vùng đặc biệt khó khăn là sự thiên vị bất công, vi phạm quyền bình đẳng trong giáo dục.", answer: false },
                        { text: "c) (Vận dụng) Chính sách ưu đãi giáo dục của Nhà nước giúp thu hẹp khoảng cách phát triển và tạo cơ hội bình đẳng thực chất cho học sinh yếu thế.", answer: true },
                        { text: "d) (Vận dụng cao) Việc H nỗ lực rèn luyện chuyên môn ngành Y để quay về chăm sóc sức khoẻ cho đồng bào vùng cao thể hiện sự kết hợp tốt đẹp giữa quyền học tập và trách nhiệm cống hiến cho Tổ quốc.", answer: true }
                    ]
                }
            ]
        },
        12: {
            title: "Bài 12: Quyền và nghĩa vụ của công dân trong bảo vệ, chăm sóc sức khoẻ và bảo đảm an sinh xã hội",
            mcq: [
                { type: 'mcq', text: "Mọi công dân đều có quyền được khám bệnh, chữa bệnh và có nghĩa vụ tôn trọng các quy định về phòng, chống dịch bệnh là nội dung thuộc quyền và nghĩa vụ nào?", options: ["Quyền và nghĩa vụ bảo vệ Tổ quốc.", "Quyền và nghĩa vụ của công dân trong chăm sóc và bảo vệ sức khoẻ.", "Quyền tự do kinh doanh.", "Quyền bất khả xâm phạm về chỗ ở."], answer: 1 },
                { type: 'mcq', text: "Khi đi khám bệnh, chữa bệnh tại các cơ sở y tế, người bệnh có quyền cơ bản nào sau đây?", options: ["Được tôn trọng bí mật riêng tư về tình trạng bệnh tật và được khám, chữa bệnh bằng phương pháp an toàn.", "Hành hung nhân viên y tế nếu phải xếp hàng chờ đợi.", "Tự ý lấy thuốc trong kho của bệnh viện mà không cần đơn bác sĩ.", "Trốn viện để không phải thanh toán viện phí."], answer: 0 },
                { type: 'mcq', text: "Khi xảy ra dịch bệnh truyền nhiễm nguy hiểm, công dân có nghĩa vụ pháp lí nào sau đây?", options: ["Che giấu tình trạng bệnh để tự do đi lại.", "Chấp hành nghiêm các biện pháp phòng, chống dịch bệnh, khai báo y tế và cách li theo yêu cầu của cơ quan có thẩm quyền.", "Tung tin giả về dịch bệnh để bán thuốc trục lợi.", "Từ chối mọi hoạt động tiêm chủng phòng dịch bắt buộc."], answer: 1 },
                { type: 'mcq', text: "Hành vi nào sau đây vi phạm pháp luật về bảo đảm an sinh xã hội?", options: ["Tham gia đóng bảo hiểm xã hội tự nguyện.", "Làm giả hồ sơ thương tật hoặc hồ sơ hộ nghèo để trục lợi tiền trợ cấp xã hội của Nhà nước.", "Quyên góp ủng hộ quỹ Vì người nghèo.", "Đóng bảo hiểm y tế đầy đủ cho công nhân."], answer: 1 },
                { type: 'mcq', text: "Trẻ em dưới 6 tuổi tại Việt Nam được hưởng quyền lợi đặc biệt nào trong chăm sóc và bảo vệ sức khoẻ?", options: ["Được cấp thẻ Bảo hiểm y tế miễn phí và khám, chữa bệnh không phải trả tiền tại các cơ sở y tế công lập.", "Được hưởng lương hưu hằng tháng.", "Được miễn nghĩa vụ học tập.", "Được cấp giấy phép hành nghề y."], answer: 0 },
                { type: 'mcq', text: "Nghĩa vụ của công dân đối với người thân và cộng đồng trong bảo vệ sức khoẻ thể hiện qua việc nào?", options: ["Giữ gìn vệ sinh môi trường sống, đảm bảo an toàn thực phẩm và không lạm dụng chất kích thích gây hại cho người xung quanh.", "Đốt rác thải nhựa ngay trong khu dân cư.", "Sử dụng chất cấm trong chăn nuôi gia súc.", "Bán thuốc giả không rõ nguồn gốc."], answer: 0 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về quyền và nghĩa vụ của công dân trong bảo vệ, chăm sóc sức khoẻ và an sinh xã hội:",
                    options: [
                        { text: "a) (Nhận biết) Công dân có quyền được bảo vệ, chăm sóc sức khoẻ, bình đẳng trong việc sử dụng các dịch vụ y tế và có nghĩa vụ thực hiện các quy định về vệ sinh phòng bệnh.", answer: true },
                        { text: "b) (Thông hiểu) Người bệnh hoặc người nhà bệnh nhân có quyền xúc phạm, đe doạ bác sĩ nếu quá trình điều trị không đạt kết quả ngay lập tức.", answer: false },
                        { text: "c) (Vận dụng) Hành vi làm giả giấy nghỉ ốm hưởng bảo hiểm xã hội để lấy tiền trợ cấp là hành vi trục lợi quỹ bảo hiểm và bị xử lí theo quy định của pháp luật.", answer: true },
                        { text: "d) (Vận dụng cao) Chủ động tham gia bảo hiểm y tế, rèn luyện thể dục thể thao và tuân thủ pháp luật về an toàn thực phẩm là cách thiết thực nhất để công dân tự bảo vệ sức khoẻ bản thân và giảm gánh nặng y tế cho xã hội.", answer: true }
                    ]
                }
            ]
        },
        13: {
            title: "Bài 13: Quyền và nghĩa vụ của công dân trong bảo vệ di sản văn hoá, môi trường và tài nguyên thiên nhiên",
            mcq: [
                { type: 'mcq', text: "Theo quy định của pháp luật về bảo vệ môi trường và tài nguyên thiên nhiên, hành vi dùng thuốc nổ, xung điện để khai thác thuỷ sản bị nghiêm cấm vì lí do cốt lõi nào?", options: ["Làm giảm doanh thu của các cửa hàng bán lưới đánh cá.", "Huỷ diệt nguồn lợi thuỷ sản, phá huỷ hệ sinh thái và đe doạ tính mạng con người.", "Tốn kém chi phí mua thiết bị đánh bắt.", "Làm tăng sản lượng đánh bắt quá nhanh."], answer: 1 },
                { type: 'mcq', text: "Theo Luật Bảo vệ môi trường, khi phát hiện cá nhân có hành vi chặt phá rừng phòng hộ trái phép, công dân cần làm gì?", options: ["Tham gia chặt gỗ cùng để mang về sử dụng.", "Kịp thời thông báo, tố giác hành vi vi phạm với cơ quan kiểm lâm hoặc chính quyền địa phương.", "Bỏ qua vì rừng phòng hộ là tài sản chung không thuộc về riêng ai.", "Tự ý lập trạm thu phí người chặt gỗ."], answer: 1 },
                { type: 'mcq', text: "Theo quy định pháp luật về bảo vệ môi trường, tổ chức, cá nhân gây ô nhiễm, sự cố và suy thoái môi trường phải có trách nhiệm gì?", options: ["Không phải chịu trách nhiệm nếu đã nộp thuế thu nhập.", "Khắc phục, bồi thường thiệt hại và chịu các chế tài xử lí theo quy định của pháp luật.", "Chuyển toàn bộ trách nhiệm cho cơ quan quản lí nhà nước.", "Chỉ cần trồng bù một cây xanh."], answer: 1 },
                { type: 'mcq', text: "Di sản văn hoá được pháp luật bảo vệ bao gồm hai loại hình cơ bản nào?", options: ["Di sản văn hoá vật thể và di sản văn hoá phi vật thể.", "Di sản công nghiệp và di sản thương mại.", "Tài sản ngân hàng và tài sản doanh nghiệp.", "Văn bản hành chính và hợp đồng kinh tế."], answer: 0 },
                { type: 'mcq', text: "Khi công dân vô tình tìm thấy cổ vật, bảo vật quốc gia trong lúc đào móng làm nhà thì có nghĩa vụ pháp lí gì?", options: ["Đem bán ngay cho người buôn đồ cổ nước ngoài để lấy tiền.", "Giữ gìn, bảo vệ nguyên trạng và kịp thời thông báo, giao nộp cho cơ quan nhà nước có thẩm quyền (và được nhận phần thưởng theo quy định).", "Đập vỡ để phi tang.", "Tự ý trưng bày thu vé trái phép."], answer: 1 },
                { type: 'mcq', text: "Hành vi nào sau đây thể hiện đúng quyền và nghĩa vụ của công dân trong bảo vệ di sản văn hoá?", options: ["Lấn chiếm đất đai thuộc khu vực bảo vệ di tích lịch sử để xây quán bán hàng.", "Viết, vẽ bậy, khắc tên lên bia đá tại khu di tích quốc gia.", "Tham quan, nghiên cứu di sản văn hoá văn minh và tích cực tuyên truyền, giới thiệu giá trị di sản dân tộc.", "Lén lút đào bới khảo cổ trái phép."], answer: 2 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về quyền và nghĩa vụ của công dân trong bảo vệ di sản văn hoá và môi trường:",
                    options: [
                        { text: "a) (Nhận biết) Mọi công dân đều có quyền tiếp cận, thụ hưởng các giá trị văn hoá, được sống trong môi trường trong lành và có nghĩa vụ bảo vệ di sản văn hoá, môi trường.", answer: true },
                        { text: "b) (Thông hiểu) Khi đào móng xây nhà trên đất hợp pháp của gia đình mà phát hiện được cổ vật quý hiếm dưới lòng đất thì cổ vật đó đương nhiên thuộc sở hữu tư nhân tuyệt đối của chủ nhà.", answer: false },
                        { text: "c) (Vận dụng) Hành vi săn bắt, mua bán trái phép động vật hoang dã nguy cấp, quý, hiếm là vi phạm pháp luật về bảo vệ tài nguyên thiên nhiên và đa dạng sinh học.", answer: true },
                        { text: "d) (Vận dụng cao) Phát triển du lịch văn hoá - sinh thái gắn với bảo tồn di sản và giữ gìn cảnh quan môi trường là hướng đi bền vững nhằm phát huy cả giá trị tinh thần lẫn lợi ích kinh tế lâu dài cho cộng đồng địa phương.", answer: true }
                    ]
                }
            ]
        },
        14: {
            title: "Bài 14: Một số vấn đề chung về pháp luật quốc tế",
            mcq: [
                { type: 'mcq', text: "Hệ thống các nguyên tắc và quy phạm pháp luật do các quốc gia và chủ thể khác của pháp luật quốc tế thoả thuận xây dựng nên trên cơ sở tự nguyện và bình đẳng gọi là gì?", options: ["Pháp luật quốc gia.", "Pháp luật quốc tế.", "Điều lệ công ty đa quốc gia.", "Tập quán địa phương."], answer: 1 },
                { type: 'mcq', text: "Nguyên tắc 'Tận tâm, thiện chí thực hiện cam kết quốc tế' (Pacta sunt servanda) trong pháp luật quốc tế đòi hỏi các quốc gia thành viên phải làm gì?", options: ["Có thể tự ý huỷ bỏ điều ước quốc tế bất cứ lúc nào nếu thấy bất lợi.", "Phải nghiêm chỉnh tuân thủ và thực hiện đầy đủ các nghĩa vụ đã cam kết trong điều ước quốc tế mà mình là thành viên.", "Áp đặt pháp luật trong nước lên trên mọi điều ước quốc tế.", "Dùng vũ lực để ép buộc quốc gia khác kí kết hiệp ước."], answer: 1 },
                { type: 'mcq', text: "Văn bản pháp lí quốc tế quan trọng được kí kết giữa hai hay nhiều quốc gia nhằm xác lập, thay đổi hoặc chấm dứt quyền và nghĩa vụ giữa các bên được gọi là gì?", options: ["Hợp đồng dân sự.", "Điều ước quốc tế.", "Nghị quyết hội đồng quản trị.", "Quy ước làng xã."], answer: 1 },
                { type: 'mcq', text: "Chủ thể cơ bản và quan trọng nhất của pháp luật quốc tế là chủ thể nào sau đây?", options: ["Các cá nhân công dân.", "Các quốc gia có chủ quyền.", "Các công ty trách nhiệm hữu hạn.", "Các hiệp hội nghề nghiệp địa phương."], answer: 1 },
                { type: 'mcq', text: "Theo pháp luật quốc tế, khi nảy sinh tranh chấp giữa các quốc gia, nguyên tắc bắt buộc phải tuân thủ là gì?", options: ["Sử dụng sức mạnh quân sự để giải quyết nhanh chóng.", "Giải quyết các tranh chấp quốc tế bằng biện pháp hoà bình (đàm phán, trung gian, hoà giải, trọng tài, toà án quốc tế).", "Cấm vận kinh tế đơn phương.", "Can thiệp vào công việc nội bộ của nước đối phương."], answer: 1 },
                { type: 'mcq', text: "Mối quan hệ giữa pháp luật quốc tế và pháp luật quốc gia được thể hiện như thế nào?", options: ["Tách biệt hoàn toàn, không có sự tác động qua lại.", "Có mối quan hệ biện chứng, tác động qua lại; quốc gia tiến hành nội luật hoá các điều ước quốc tế mà mình là thành viên vào hệ thống pháp luật trong nước.", "Pháp luật quốc tế xoá bỏ hoàn toàn Hiến pháp của các quốc gia.", "Pháp luật của một nước lớn được coi là pháp luật quốc tế."], answer: 1 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về các nguyên tắc cơ bản của Pháp luật Quốc tế và Hợp tác quốc tế:",
                    options: [
                        { text: "a) (Nhận biết) Bình đẳng về chủ quyền giữa các quốc gia và không can thiệp vào công việc nội bộ của nhau là những nguyên tắc nền tảng của pháp luật quốc tế.", answer: true },
                        { text: "b) (Thông hiểu) Một quốc gia có tiềm lực kinh tế và quân sự lớn có quyền áp đặt điều ước quốc tế bất bình đẳng hoặc đe doạ dùng vũ lực đối với các quốc gia nhỏ hơn.", answer: false },
                        { text: "c) (Vận dụng) Khi kí kết các điều ước quốc tế, Việt Nam luôn rà soát, sửa đổi hoặc ban hành văn bản quy phạm pháp luật trong nước để đảm bảo thực thi hiệu quả các cam kết quốc tế.", answer: true },
                        { text: "d) (Vận dụng cao) Việc tôn trọng và vận dụng đúng đắn pháp luật quốc tế giúp Việt Nam nâng cao vị thế ngoại giao, bảo vệ vững chắc độc lập chủ quyền và tạo môi trường hoà bình để phát triển đất nước.", answer: true }
                    ]
                }
            ]
        },
        15: {
            title: "Bài 15: Công pháp quốc tế về dân cư, lãnh thổ và biên giới quốc gia",
            mcq: [
                { type: 'mcq', text: "Theo Công ước Liên Hợp Quốc về Luật Biển năm 1982 (UNCLOS 1982), vùng biển nào mà quốc gia ven biển có chủ quyền hoàn toàn, đầy đủ và tuyệt đối như trên lãnh thổ đất liền?", options: ["Vùng đặc quyền kinh tế.", "Vùng nội thuỷ.", "Vùng tiếp giáp lãnh hải.", "Biển cả (Công hải)."], answer: 1 },
                { type: 'mcq', text: "Theo Công ước Liên Hợp Quốc về Luật Biển năm 1982, vùng đặc quyền kinh tế của quốc gia ven biển có chiều rộng không vượt quá bao nhiêu hải lí tính từ đường cơ sở?", options: ["12 hải lí.", "24 hải lí.", "200 hải lí.", "350 hải lí."], answer: 2 },
                { type: 'mcq', text: "Theo Công ước Liên Hợp Quốc về Luật Biển năm 1982 (UNCLOS 1982), ở vùng biển nào các quốc gia khác có quyền 'đi qua không gây hại' nhưng phải tôn trọng chủ quyền và quy định pháp luật của quốc gia ven biển?", options: ["Vùng nội thuỷ.", "Vùng lãnh hải.", "Vùng nước lịch sử.", "Các cảng biển nội địa."], answer: 1 },
                { type: 'mcq', text: "Lãnh thổ quốc gia là một phần của Trái Đất thuộc chủ quyền hoàn toàn, đầy đủ và tuyệt đối của một quốc gia, bao gồm những bộ phận cấu thành nào?", options: ["Chỉ bao gồm vùng đất liền và các đảo.", "Vùng đất, vùng nước, vùng lòng đất và vùng trời.", "Chỉ bao gồm vùng đất và vùng biển đặc quyền kinh tế.", "Vùng đất liền và các đại sứ quán ở nước ngoài."], answer: 1 },
                { type: 'mcq', text: "Chế độ pháp lí nào mà quốc gia sở tại dành cho người nước ngoài cư trú trên lãnh thổ của mình hưởng các quyền và nghĩa vụ dân sự, lao động cơ bản tương đương như công dân nước sở tại (trừ một số quyền chính trị như bầu cử, ứng cử)?", options: ["Chế độ đãi ngộ quốc gia.", "Chế độ miễn trừ ngoại giao tuyệt đối.", "Chế độ cư trú tị nạn.", "Chế độ bảo hộ công dân."], answer: 0 },
                { type: 'mcq', text: "Chiều rộng của vùng lãnh hải theo quy định của Công ước Liên Hợp Quốc về Luật Biển năm 1982 là bao nhiêu?", options: ["Không vượt quá 12 hải lí tính từ đường cơ sở.", "Không vượt quá 24 hải lí tính từ bờ biển.", "Đúng 200 hải lí tính từ đường cơ sở.", "Không giới hạn tuỳ theo sức mạnh hải quân."], answer: 0 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về Công ước Liên Hợp Quốc về Luật Biển 1982 (UNCLOS) và chủ quyền biển đảo Việt Nam:",
                    options: [
                        { text: "a) (Nhận biết) Lãnh hải của quốc gia ven biển có chiều rộng không vượt quá 12 hải lí tính từ đường cơ sở và quốc gia ven biển có chủ quyền đầy đủ, toàn vẹn đối với lãnh hải.", answer: true },
                        { text: "b) (Thông hiểu) Trong vùng lãnh hải của Việt Nam, tàu thuyền quân sự nước ngoài được quyền tự do tập trận và bắn đạn thật mà không cần xin phép.", answer: false },
                        { text: "c) (Vận dụng) Trong vùng đặc quyền kinh tế rộng 200 hải lí tính từ đường cơ sở, Việt Nam có quyền chủ quyền về thăm dò, khai thác, bảo tồn và quản lí tài nguyên thiên nhiên.", answer: true },
                        { text: "d) (Vận dụng cao) Mọi tranh chấp chủ quyền trên Biển Đông cần được giải quyết bằng các biện pháp hoà bình trên cơ sở tôn trọng pháp luật quốc tế, đặc biệt là UNCLOS 1982.", answer: true }
                    ]
                }
            ]
        },
        16: {
            title: "Bài 16: Nguyên tắc cơ bản của Tổ chức Thương mại Thế giới (WTO) và hợp đồng thương mại quốc tế",
            mcq: [
                { type: 'mcq', text: "Nguyên tắc cơ bản nào của Tổ chức Thương mại Thế giới (WTO) yêu cầu một quốc gia thành viên phải dành sự đối xử không kém thuận lợi hơn cho hàng hoá nhập khẩu so với hàng hoá tương tự sản xuất trong nước?", options: ["Nguyên tắc Đối xử quốc gia (NT).", "Nguyên tắc Bảo hộ tuyệt đối.", "Nguyên tắc Độc quyền nhà nước.", "Nguyên tắc Can thiệp quân sự."], answer: 0 },
                { type: 'mcq', text: "Nguyên tắc 'Đối xử tối huệ quốc' (MFN) trong thương mại quốc tế của WTO đòi hỏi điều gì?", options: ["Ưu đãi thương mại dành cho một nước thành viên phải được áp dụng ngay lập tức và vô điều kiện cho tất cả các nước thành viên khác.", "Chỉ ưu đãi cho các nước láng giềng có chung đường biên giới.", "Đánh thuế nhập khẩu 100% đối với mọi mặt hàng nước ngoài.", "Cấm nhập khẩu hàng hoá nông sản."], answer: 0 },
                { type: 'mcq', text: "Khi một quốc gia áp dụng thuế chống bán phá giá đối với hàng hoá nhập khẩu được bán thấp hơn giá trị thông thường nhằm bảo vệ ngành sản xuất trong nước theo đúng quy định của WTO, điều đó thể hiện nội dung gì?", options: ["Chủ nghĩa bảo hộ cực đoan trái luật quốc tế.", "Vận dụng các công cụ phòng vệ thương mại hợp pháp trong khuôn khổ WTO.", "Từ bỏ hoàn toàn các cam kết thương mại tự do.", "Phá vỡ quan hệ ngoại giao song phương."], answer: 1 },
                { type: 'mcq', text: "Khi xảy ra tranh chấp thương mại quốc tế giữa các quốc gia thành viên của Tổ chức Thương mại Thế giới (WTO), nguyên tắc giải quyết tranh chấp được ưu tiên áp dụng là gì?", options: ["Sử dụng biện pháp quân sự để phong toả cảng biển.", "Giải quyết thông qua cơ chế tham vấn, thương lượng hoà bình và cơ quan giải quyết tranh chấp của WTO.", "Cắt đứt hoàn toàn quan hệ ngoại giao vĩnh viễn.", "Tự ý tịch thu tài sản của công dân nước đối phương."], answer: 1 },
                { type: 'mcq', text: "Sự thoả thuận giữa các thương nhân có trụ sở kinh doanh ở các quốc gia khác nhau về việc xác lập, thay đổi hoặc chấm dứt quyền và nghĩa vụ thương mại quốc tế được gọi là gì?", options: ["Hợp đồng lao động nội địa.", "Hợp đồng thương mại quốc tế.", "Điều ước biên giới lãnh thổ.", "Quyết định hành chính."], answer: 1 },
                { type: 'mcq', text: "Trong giao kết và thực hiện hợp đồng mua bán hàng hoá quốc tế, các bên thường phải tuân thủ những điều khoản cốt lõi nào?", options: ["Tên hàng, số lượng, chất lượng, giá cả, phương thức thanh toán quốc tế, thời hạn và địa điểm giao hàng, trách nhiệm do vi phạm hợp đồng.", "Chỉ cần thoả thuận bằng lời nói không cần ghi giá cả.", "Chỉ tuân theo ý muốn của bên mua.", "Không cần quy định về kiểm định chất lượng hàng hoá."], answer: 0 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Đọc thông tin sau: Công ty Thuỷ sản A (có trụ sở tại Việt Nam) kí hợp đồng xuất khẩu 100 tấn tôm đông lạnh cho Công ty B (có trụ sở tại Nhật Bản). Trong hợp đồng quy định rõ tiêu chuẩn chất lượng, thời hạn giao hàng tại cảng Yokohama và phương thức thanh toán tín dụng chứng từ (L/C). Tuy nhiên, do sự cố dây chuyền cấp đông, Công ty A giao hàng chậm 15 ngày so với cam kết làm Công ty B bị thiệt hại.",
                    options: [
                        { text: "a) (Nhận biết) Hợp đồng mua bán 100 tấn tôm giữa Công ty A (Việt Nam) và Công ty B (Nhật Bản) là hợp đồng thương mại quốc tế.", answer: true },
                        { text: "b) (Thông hiểu) Vì là doanh nghiệp ở hai quốc gia khác nhau nên khi Công ty A giao hàng chậm 15 ngày thì Công ty A không phải chịu bất kì trách nhiệm pháp lí hay bồi thường nào.", answer: false },
                        { text: "c) (Vận dụng) Theo nguyên tắc thiện chí, trung thực và tuân thủ hợp đồng thương mại quốc tế, Công ty A phải thông báo kịp thời và thương lượng bồi thường thiệt hại hoặc chịu phạt vi phạm theo điều khoản hợp đồng đã kí.", answer: true },
                        { text: "d) (Vận dụng cao) Để phòng ngừa rủi ro tranh chấp trong thương mại quốc tế, các doanh nghiệp Việt Nam cần nắm vững các nguyên tắc của WTO, Công ước Viên 1980 (CISG) và soạn thảo chặt chẽ điều khoản về sự kiện bất khả kháng cũng như cơ quan trọng tài giải quyết tranh chấp.", answer: true }
                    ]
                }
            ]
        }
    };

    const contexts12 = [
        "",
        "Theo nội dung bài học môn Giáo dục Kinh tế và Pháp luật lớp 12: ",
        "Trong thực tiễn kinh tế - pháp luật tại Việt Nam và quốc tế hiện nay: ",
        "Căn cứ vào kiến thức chuẩn chương trình GDPT 2018 môn GDKT&PL 12: ",
        "Xét trong các tình huống vận dụng thực tế đời sống xã hội: "
    ];

    const finalKhoi12 = {};

    Object.keys(rawKhoi12ByLesson).forEach(key => {
        const item = rawKhoi12ByLesson[key];
        const fullMcq = [];
        const fullTf = [];

        // Đảm bảo mỗi bài học có đủ 30 câu MCQ
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

        // Đảm bảo mỗi bài học có đủ 20 câu Đúng/Sai
        for (let i = 0; i < 20; i++) {
            const src = item.tf[i % item.tf.length];
            const round = Math.floor(i / item.tf.length);
            const suffix = round > 0 ? ` (Tình huống luyện tập số ${round + 1})` : "";
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

    // Gán trực tiếp vào hệ thống
    window.dataKhoi12 = finalKhoi12;
    window.appDatabase.khoi12 = finalKhoi12;
})();
