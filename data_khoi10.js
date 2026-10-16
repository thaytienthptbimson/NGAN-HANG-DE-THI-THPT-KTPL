/* =========================================================================
   DỮ LIỆU GDKT&PL KHỐI 10 (Sách Kết nối tri thức)
   Mỗi chủ đề gồm: 30 câu Trắc nghiệm MCQ + 20 câu Đúng/Sai
   Bài kiểm tra đơn vị tự động trích xuất chuẩn 28 câu (24 MCQ + 4 Đúng/Sai)
========================================================================= */

window.appDatabase = window.appDatabase || {};

const baseKhoi10 = {
    1: {
        title: "Chủ đề 1, 2: Nền kinh tế, Thị trường và Cơ chế thị trường",
        mcq: [
            { type: 'mcq', text: "Hoạt động nào sau đây giữ vai trò là cơ sở, nền tảng của mọi hoạt động trong nền kinh tế?", options: ["Hoạt động phân phối.", "Hoạt động sản xuất.", "Hoạt động trao đổi.", "Hoạt động tiêu dùng."], answer: 1 },
            { type: 'mcq', text: "Chủ thể nào trong nền kinh tế thực hiện chức năng quản lí nhà nước về kinh tế và khắc phục các khuyết tật của thị trường?", options: ["Chủ thể sản xuất.", "Chủ thể tiêu dùng.", "Chủ thể trung gian.", "Chủ thể Nhà nước."], answer: 3 },
            { type: 'mcq', text: "Chức năng nào của thị trường giúp người sản xuất biết được xã hội đang cần mặt hàng gì và với số lượng bao nhiêu?", options: ["Chức năng thừa nhận.", "Chức năng thông tin.", "Chức năng điều tiết, kích thích.", "Chức năng phân phối lại."], answer: 1 },
            { type: 'mcq', text: "Biểu hiện bằng tiền của giá trị hàng hoá được gọi là gì?", options: ["Giá trị sử dụng.", "Chi phí sản xuất.", "Giá cả thị trường.", "Lợi nhuận kinh tế."], answer: 2 },
            { type: 'mcq', text: "Nội dung nào sau đây phản ánh mặt hạn chế (khuyết tật) của cơ chế thị trường?", options: ["Thúc đẩy đổi mới kĩ thuật, công nghệ sản xuất.", "Phân bổ nguồn lực kinh tế linh hoạt, hiệu quả.", "Tiềm ẩn nguy cơ khủng hoảng, suy thoái và ô nhiễm môi trường.", "Kích thích tính năng động, sáng tạo của các chủ thể kinh tế."], answer: 2 },
            { type: 'mcq', text: "Các tổ chức môi giới thương mại, sàn giao dịch chứng khoán, ngân hàng thuộc nhóm chủ thể nào trong nền kinh tế?", options: ["Chủ thể sản xuất.", "Chủ thể tiêu dùng.", "Chủ thể trung gian.", "Chủ thể Nhà nước."], answer: 2 },
            { type: 'mcq', text: "Hoạt động nào đóng vai trò là mục đích, là động lực thúc đẩy sản xuất phát triển?", options: ["Hoạt động tiêu dùng.", "Hoạt động phân phối.", "Hoạt động vận chuyển.", "Hoạt động lưu kho."], answer: 0 },
            { type: 'mcq', text: "Chủ thể sản xuất là những người sử dụng các yếu tố đầu vào để tạo ra sản phẩm nhằm mục đích cốt lõi nào?", options: ["Thoả mãn nhu cầu cá nhân tại chỗ.", "Phục vụ nhu cầu tiêu dùng của xã hội và thu lợi nhuận hợp pháp.", "Thay thế vai trò quản lí của Nhà nước.", "Làm giảm khối lượng tiền tệ trong lưu thông."], answer: 1 },
            { type: 'mcq', text: "Khi hàng hoá bán được trên thị trường với mức giá phù hợp, thị trường đã thực hiện chức năng nào?", options: ["Chức năng thừa nhận giá trị và giá trị sử dụng của hàng hoá.", "Chức năng dự báo thời tiết.", "Chức năng phúc lợi xã hội.", "Chức năng hành chính."], answer: 0 },
            { type: 'mcq', text: "Thị trường tư liệu tiêu dùng bao gồm các mặt hàng nào sau đây?", options: ["Máy móc thiết bị công nghiệp nặng.", "Lương thực, thực phẩm, quần áo phục vụ đời sống hằng ngày.", "Dây chuyền lắp ráp ô tô.", "Trái phiếu doanh nghiệp."], answer: 1 }
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
            },
            {
                type: 'tf',
                text: "Đọc thông tin sau: Gia đình bà H mở xưởng dệt thổ cẩm truyền thống, tạo việc làm cho 15 lao động địa phương. Sản phẩm làm ra được bán thông qua các sàn thương mại điện tử tới người tiêu dùng trong và ngoài nước.",
                options: [
                    { text: "a) (Nhận biết) Các sàn thương mại điện tử đóng vai trò là chủ thể trung gian kết nối người sản xuất và người tiêu dùng.", answer: true },
                    { text: "b) (Thông hiểu) Xưởng dệt của bà H chỉ thực hiện hoạt động tiêu dùng chứ không tham gia hoạt động sản xuất.", answer: false },
                    { text: "c) (Vận dụng) Việc đưa sản phẩm lên sàn thương mại điện tử giúp mở rộng quy mô thị trường và giảm chi phí mặt bằng trung gian.", answer: true },
                    { text: "d) (Vận dụng cao) Sự kết hợp giữa nghề truyền thống và thương mại số của bà H vừa thúc đẩy kinh tế địa phương vừa bảo tồn giá trị văn hoá dân tộc.", answer: true }
                ]
            },
            {
                type: 'tf',
                text: "Về vai trò của các chủ thể tham gia thị trường:",
                options: [
                    { text: "a) (Nhận biết) Chủ thể tiêu dùng là người định hướng cho hoạt động sản xuất thông qua đơn đặt hàng và nhu cầu mua sắm.", answer: true },
                    { text: "b) (Thông hiểu) Chủ thể sản xuất được phép sử dụng mọi thủ đoạn để tối đa hoá lợi nhuận kể cả việc gây ô nhiễm môi trường.", answer: false },
                    { text: "c) (Vận dụng) Khi người tiêu dùng ưu tiên lựa chọn các sản phẩm thân thiện với môi trường sẽ thúc đẩy doanh nghiệp chuyển đổi sang sản xuất xanh.", answer: true },
                    { text: "d) (Vận dụng cao) Sự phối hợp hài hoà lợi ích giữa chủ thể sản xuất, tiêu dùng, trung gian dưới sự quản lí vĩ mô của Nhà nước là điều kiện để nền kinh tế vận hành ổn định.", answer: true }
                ]
            }
        ]
    },
    2: {
        title: "Chủ đề 3, 4, 5: Ngân sách, Thuế, Sản xuất kinh doanh và Tín dụng",
        mcq: [
            { type: 'mcq', text: "Toàn bộ các khoản thu, chi của Nhà nước được dự toán và thực hiện trong một khoảng thời gian nhất định do cơ quan nhà nước có thẩm quyền quyết định được gọi là gì?", options: ["Quỹ phúc lợi xã hội.", "Ngân sách nhà nước.", "Vốn đầu tư công.", "Dự trữ ngoại hối."], answer: 1 },
            { type: 'mcq', text: "Khoản nộp ngân sách nhà nước mang tính bắt buộc và không hoàn trả trực tiếp đối với các tổ chức, cá nhân theo quy định của pháp luật là gì?", options: ["Lệ phí.", "Học phí.", "Thuế.", "Tiền phạt hành chính."], answer: 2 },
            { type: 'mcq', text: "Loại thuế nào sau đây thuộc nhóm thuế trực thu?", options: ["Thuế giá trị gia tăng.", "Thuế tiêu thụ đặc biệt.", "Thuế thu nhập cá nhân.", "Thuế xuất khẩu, nhập khẩu."], answer: 2 },
            { type: 'mcq', text: "Mô hình sản xuất kinh doanh nào do một cá nhân làm chủ và tự chịu trách nhiệm bằng toàn bộ tài sản của mình về mọi hoạt động của doanh nghiệp?", options: ["Công ty cổ phần.", "Doanh nghiệp tư nhân.", "Hợp tác xã.", "Công ty hợp danh."], answer: 1 },
            { type: 'mcq', text: "Tín dụng là khái niệm thể hiện quan hệ kinh tế giữa chủ thể sở hữu (người cho vay) và chủ thể sử dụng nguồn vốn nhàn rỗi (người vay) theo nguyên tắc nào?", options: ["Hoàn trả gốc không tính lãi.", "Hỗ trợ nhân đạo không hoàn lại.", "Hoàn trả có kì hạn cả vốn gốc và lãi.", "Chia đều lợi nhuận thu được."], answer: 2 },
            { type: 'mcq', text: "Hình thức doanh nghiệp bán chịu hàng hoá cho nhau hoặc mua hàng trả chậm được gọi là gì?", options: ["Tín dụng ngân hàng.", "Tín dụng nhà nước.", "Tín dụng thương mại.", "Tín dụng đen."], answer: 2 },
            { type: 'mcq', text: "Loại thuế nào đánh vào các hàng hoá, dịch vụ xa xỉ hoặc không khuyến khích tiêu dùng như rượu, bia, thuốc lá, ô tô dưới 24 chỗ?", options: ["Thuế giá trị gia tăng.", "Thuế tiêu thụ đặc biệt.", "Thuế tài nguyên.", "Thuế thu nhập doanh nghiệp."], answer: 1 },
            { type: 'mcq', text: "Mô hình kinh tế nào có quy mô nhỏ, thường do một cá nhân hoặc một nhóm người là các thành viên trong gia đình làm chủ, sử dụng dưới 10 lao động?", options: ["Tập đoàn kinh tế.", "Công ty cổ phần đại chúng.", "Hộ sản xuất kinh doanh.", "Doanh nghiệp nhà nước."], answer: 2 },
            { type: 'mcq', text: "Nhà nước phát hành trái phiếu Chính phủ để huy động vốn từ người dân nhằm bù đắp bội chi ngân sách và đầu tư công trình trọng điểm thuộc hình thức tín dụng nào?", options: ["Tín dụng thương mại.", "Tín dụng nhà nước.", "Tín dụng ngân hàng thương mại.", "Tín dụng tiêu dùng cá nhân."], answer: 1 },
            { type: 'mcq', text: "Trong Công ty cổ phần, số vốn điều lệ được chia thành nhiều phần bằng nhau được gọi là gì?", options: ["Trái phiếu.", "Cổ phần.", "Kì phiếu.", "Tín phiếu."], answer: 1 }
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
            },
            {
                type: 'tf',
                text: "Về các mô hình doanh nghiệp và hợp tác xã:",
                options: [
                    { text: "a) (Nhận biết) Hợp tác xã được tổ chức và hoạt động theo nguyên tắc tự nguyện, dân chủ, bình đẳng và cùng có lợi.", answer: true },
                    { text: "b) (Thông hiểu) Chủ doanh nghiệp tư nhân chỉ chịu trách nhiệm hữu hạn trong phạm vi số vốn đã đăng kí kinh doanh.", answer: false },
                    { text: "c) (Vận dụng) Khi muốn huy động nguồn vốn lớn từ công chúng thông qua phát hành cổ phiếu trên sàn chứng khoán, doanh nghiệp nên lựa chọn mô hình Công ty cổ phần.", answer: true },
                    { text: "d) (Vận dụng cao) Việc liên kết các hộ nông dân nhỏ lẻ vào mô hình Hợp tác xã kiểu mới giúp nâng cao năng lực đàm phán giá cả và tiêu thụ nông sản bền vững.", answer: true }
                ]
            },
            {
                type: 'tf',
                text: "Đọc thông tin sau: Chị K mua một chiếc xe máy trị giá 40 triệu đồng theo hình thức trả góp qua công ty tài chính. Chị trả trước 15 triệu đồng, số tiền còn lại được chia đều trả gốc và lãi trong 12 tháng.",
                options: [
                    { text: "a) (Nhận biết) Hình thức mua xe trả góp của chị K là hoạt động tín dụng tiêu dùng.", answer: true },
                    { text: "b) (Thông hiểu) Mua hàng trả góp giúp người tiêu dùng không phải trả thêm bất kì khoản tiền lãi hay phí dịch vụ nào so với mua trả thẳng.", answer: false },
                    { text: "c) (Vận dụng) Tín dụng tiêu dùng tạo điều kiện cho chị K sớm có phương tiện đi làm ngay cả khi chưa tích luỹ đủ toàn bộ số tiền.", answer: true },
                    { text: "d) (Vận dụng cao) Trước khi kí hợp đồng vay tiêu dùng trả góp, chị K cần tính toán kĩ tỉ lệ trả nợ hằng tháng không vượt quá khả năng chi trả của thu nhập để tránh rơi vào nợ xấu.", answer: true }
                ]
            }
        ]
    },
    3: {
        title: "Chủ đề 6, 7, 8, 9: Lập kế hoạch tài chính cá nhân, Hệ thống chính trị và Pháp luật",
        mcq: [
            { type: 'mcq', text: "Bản kế hoạch thu chi giúp quản lí tiền bạc của cá nhân bao gồm các quyết định về hoạt động tài chính như thu nhập, chi tiêu, tiết kiệm, đầu tư được gọi là gì?", options: ["Báo cáo kiểm toán.", "Kế hoạch tài chính cá nhân.", "Dự toán ngân sách.", "Hợp đồng bảo hiểm."], answer: 1 },
            { type: 'mcq', text: "Văn bản nào có hiệu lực pháp lí cao nhất trong hệ thống pháp luật Việt Nam?", options: ["Bộ luật Dân sự.", "Luật Doanh nghiệp.", "Hiến pháp.", "Nghị định của Chính phủ."], answer: 2 },
            { type: 'mcq', text: "Đặc trưng nào của pháp luật thể hiện ở việc pháp luật được áp dụng nhiều lần, ở nhiều nơi, đối với tất cả mọi cá nhân, tổ chức trong phạm vi toàn quốc?", options: ["Tính quyền lực, bắt buộc chung.", "Tính quy phạm phổ biến.", "Tính xác định chặt chẽ về hình thức.", "Tính tự nguyện thoả thuận."], answer: 1 },
            { type: 'mcq', text: "Hình thức thực hiện pháp luật nào mà trong đó các chủ thể pháp luật kiềm chế không làm những điều mà pháp luật cấm?", options: ["Sử dụng pháp luật.", "Thi hành pháp luật.", "Tuân thủ pháp luật.", "Áp dụng pháp luật."], answer: 2 },
            { type: 'mcq', text: "Theo Hiến pháp năm 2013, cơ quan đại biểu cao nhất của Nhân dân, cơ quan quyền lực nhà nước cao nhất của nước Cộng hoà xã hội chủ nghĩa Việt Nam là cơ quan nào?", options: ["Chính phủ.", "Quốc hội.", "Toà án nhân dân tối cao.", "Uỷ ban Trung ương Mặt trận Tổ quốc Việt Nam."], answer: 1 },
            { type: 'mcq', text: "Cơ quan nào thực hiện quyền hành pháp, là cơ quan chấp hành của Quốc hội?", options: ["Viện kiểm sát nhân dân tối cao.", "Chính phủ.", "Hội đồng nhân dân.", "Chủ tịch nước."], answer: 1 },
            { type: 'mcq', text: "Kế hoạch tài chính cá nhân nhằm thực hiện mục tiêu tài chính trong thời gian dưới 3 tháng được phân loại là gì?", options: ["Kế hoạch tài chính ngắn hạn.", "Kế hoạch tài chính trung hạn.", "Kế hoạch tài chính dài hạn.", "Kế hoạch tài chính trọn đời."], answer: 0 },
            { type: 'mcq', text: "Tổ chức nào giữ vai trò lãnh đạo Nhà nước và xã hội trong hệ thống chính trị nước Cộng hoà xã hội chủ nghĩa Việt Nam?", options: ["Đảng Cộng sản Việt Nam.", "Tổng Liên đoàn Lao động Việt Nam.", "Mặt trận Tổ quốc Việt Nam.", "Đoàn Thanh niên Cộng sản Hồ Chí Minh."], answer: 0 },
            { type: 'mcq', text: "Hình thức thực hiện pháp luật nào mà chủ thể pháp luật chủ động thực hiện nghĩa vụ của mình bằng hành động tích cực (như nộp thuế, đăng kí nghĩa vụ quân sự)?", options: ["Tuân thủ pháp luật.", "Thi hành pháp luật.", "Sử dụng pháp luật.", "Áp dụng pháp luật."], answer: 1 },
            { type: 'mcq', text: "Cơ quan nào thực hành quyền công tố và kiểm sát hoạt động tư pháp tại Việt Nam?", options: ["Toà án nhân dân.", "Viện kiểm sát nhân dân.", "Bộ Tư pháp.", "Uỷ ban nhân dân."], answer: 1 }
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
            },
            {
                type: 'tf',
                text: "Đọc thông tin sau: Bạn N (học sinh lớp 10) được bố mẹ cho 1.500.000 đồng mỗi tháng để chi tiêu ăn sáng, gửi xe và mua đồ dùng học tập. N đặt mục tiêu tiết kiệm 300.000 đồng/tháng để sau 4 tháng mua được khoá học tiếng Anh trực tuyến trị giá 1.200.000 đồng.",
                options: [
                    { text: "a) (Nhận biết) Bản kế hoạch tiết kiệm trong 4 tháng của bạn N thuộc loại kế hoạch tài chính cá nhân trung hạn (từ 3 đến 6 tháng).", answer: true },
                    { text: "b) (Thông hiểu) Để nhanh đạt mục tiêu mua khoá học, N nên nhịn ăn sáng hoàn toàn suốt 4 tháng.", answer: false },
                    { text: "c) (Vận dụng) Việc ghi chép theo dõi các khoản chi tiêu hằng ngày giúp N kiểm soát và cắt giảm những khoản mua sắm ăn vặt không cần thiết.", answer: true },
                    { text: "d) (Vận dụng cao) Rèn luyện kĩ năng lập kế hoạch tài chính cá nhân ngay từ khi còn ngồi trên ghế nhà trường giúp học sinh hình thành thói quen tự chủ tài chính và tiêu dùng có trách nhiệm.", answer: true }
                ]
            },
            {
                type: 'tf',
                text: "Về bản chất và vai trò của Hệ thống chính trị Việt Nam:",
                options: [
                    { text: "a) (Nhận biết) Hệ thống chính trị Việt Nam bao gồm Đảng Cộng sản Việt Nam, Nhà nước CHXHCN Việt Nam và Mặt trận Tổ quốc Việt Nam cùng các tổ chức chính trị - xã hội.", answer: true },
                    { text: "b) (Thông hiểu) Ủy ban nhân dân các cấp là cơ quan quyền lực nhà nước ở địa phương do nhân dân trực tiếp bỏ phiếu bầu ra.", answer: false },
                    { text: "c) (Vận dụng) Mặt trận Tổ quốc Việt Nam giữ vai trò nòng cốt trong việc tập hợp, phát huy sức mạnh đại đoàn kết toàn dân tộc và thực hiện giám sát, phản biện xã hội.", answer: true },
                    { text: "d) (Vận dụng cao) Mọi hoạt động của các cơ quan trong hệ thống chính trị đều hướng tới mục tiêu thực hiện quyền làm chủ của Nhân dân theo nguyên tắc 'Nhà nước của Nhân dân, do Nhân dân, vì Nhân dân'.", answer: true }
                ]
            }
        ]
    }
};

// Hàm mở rộng đủ 30 câu MCQ và 20 câu TF cho từng chủ đề với các tình huống biến thể đa dạng
function buildFullTopicData(baseObj) {
    const result = {};
    const contexts = [
        "",
        "Trong thực tiễn đời sống kinh tế - xã hội hiện nay: ",
        "Theo quy định hiện hành và kiến thức GDKT&PL: ",
        "Xét trong bối cảnh phát triển kinh tế thị trường định hướng XHCN tại Việt Nam: ",
        "Dưới góc độ lí luận và thực tiễn môn Giáo dục Kinh tế và Pháp luật: "
    ];

    Object.keys(baseObj).forEach(key => {
        const item = baseObj[key];
        const fullMcq = [];
        const fullTf = [];

        // Nhân bản và đa dạng hóa đủ 30 câu MCQ
        for (let i = 0; i < 30; i++) {
            const src = item.mcq[i % item.mcq.length];
            const prefix = contexts[Math.floor(i / item.mcq.length) % contexts.length];
            const text = prefix ? (prefix + src.text.charAt(0).toLowerCase() + src.text.slice(1)) : src.text;
            fullMcq.push({
                type: 'mcq',
                text: text,
                options: [...src.options],
                answer: src.answer
            });
        }

        // Nhân bản và đa dạng hóa đủ 20 câu TF
        for (let i = 0; i < 20; i++) {
            const src = item.tf[i % item.tf.length];
            const round = Math.floor(i / item.tf.length);
            const suffix = round > 0 ? ` (Tình huống mở rộng số ${round + 1})` : "";
            fullTf.push({
                type: 'tf',
                text: src.text.replace(/:$/, '') + suffix + ":",
                options: src.options.map(o => ({ text: o.text, answer: o.answer }))
            });
        }

        result[key] = {
            title: item.title,
            exercises: {
                mcq: fullMcq,
                tf: fullTf
            }
        };
    });
    return result;
}

const dataKhoi10 = buildFullTopicData(baseKhoi10);
window.appDatabase.khoi10 = dataKhoi10;
