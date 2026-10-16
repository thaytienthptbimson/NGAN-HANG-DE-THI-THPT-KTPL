/* =========================================================================
   DỮ LIỆU GDKT&PL KHỐI 10 - CHIA THEO 22 ĐƠN VỊ BÀI HỌC (Sách Kết nối tri thức)
   Mỗi bài gồm: 30 câu Trắc nghiệm MCQ + 20 câu Đúng/Sai + Kiểm tra 28 câu chuẩn
   Bản quyền thuộc về số ĐT: 0943.930.787
========================================================================= */

(function() {
    window.appDatabase = window.appDatabase || { khoi10: {}, khoi11: {}, khoi12: {}, mocktest: {} };

    const lessonsKhoi10 = [
        {
            id: 1,
            title: "Bài 1: Các hoạt động kinh tế cơ bản trong đời sống xã hội",
            coreConcept: "hoạt động sản xuất, phân phối, trao đổi và tiêu dùng",
            mcqSeed: [
                { text: "Hoạt động nào giữ vai trò là cơ sở, nền tảng quyết định mọi hoạt động khác trong đời sống kinh tế?", options: ["Hoạt động phân phối.", "Hoạt động sản xuất.", "Hoạt động trao đổi.", "Hoạt động tiêu dùng."], answer: 1 },
                { text: "Hoạt động phân chia các yếu tố sản xuất cho các ngành, các đơn vị sản xuất được gọi là gì?", options: ["Phân phối cho sản xuất.", "Phân phối cho tiêu dùng.", "Trao đổi hàng hoá.", "Tiêu dùng sản phẩm."], answer: 0 },
                { text: "Hoạt động nào đóng vai trò là cầu nối trung gian gắn kết người sản xuất với người tiêu dùng?", options: ["Sản xuất vật chất.", "Trao đổi và phân phối.", "Tự cung tự cấp.", "Dự trữ nguyên liệu."], answer: 1 },
                { text: "Hoạt động sử dụng các sản phẩm hàng hoá, dịch vụ để thoả mãn nhu cầu vật chất và tinh thần của con người là gì?", options: ["Hoạt động sản xuất.", "Hoạt động phân phối.", "Hoạt động trao đổi.", "Hoạt động tiêu dùng."], answer: 3 },
                { text: "Mục đích cuối cùng và cũng là động lực thúc đẩy sản xuất phát triển mạnh mẽ là hoạt động nào?", options: ["Hoạt động tiêu dùng.", "Hoạt động vận chuyển.", "Hoạt động lưu kho.", "Hoạt động kiểm kê."], answer: 0 }
            ],
            tfSeed: {
                context: "Về mối quan hệ giữa các hoạt động kinh tế cơ bản (sản xuất, phân phối, trao đổi, tiêu dùng) trong nền kinh tế",
                a: "Hoạt động sản xuất tạo ra sản phẩm hàng hoá, dịch vụ cung cấp cho toàn xã hội.",
                b: "Hoạt động tiêu dùng diễn ra hoàn toàn độc lập và không chịu ảnh hưởng bởi trình độ của hoạt động sản xuất.",
                c: "Khi khâu trao đổi và phân phối diễn ra thông suốt, hợp lí sẽ rút ngắn thời gian lưu thông và kích thích sản xuất mở rộng.",
                d: "Học sinh rèn luyện thói quen tiêu dùng tiết kiệm, ưu tiên hàng Việt Nam chất lượng cao là trực tiếp góp phần thúc đẩy sản xuất trong nước phát triển."
            }
        },
        {
            id: 2,
            title: "Bài 2: Các chủ thể của nền kinh tế",
            coreConcept: "chủ thể sản xuất, chủ thể tiêu dùng, chủ thể trung gian và chủ thể Nhà nước",
            mcqSeed: [
                { text: "Những người sản xuất, cung cấp hàng hoá, dịch vụ ra thị trường nhằm đáp ứng nhu cầu tiêu dùng của xã hội được gọi là gì?", options: ["Chủ thể sản xuất.", "Chủ thể tiêu dùng.", "Chủ thể trung gian.", "Chủ thể Nhà nước."], answer: 0 },
                { text: "Chủ thể nào đóng vai trò định hướng cho hoạt động sản xuất thông qua nhu cầu mua sắm của mình?", options: ["Chủ thể sản xuất.", "Chủ thể tiêu dùng.", "Chủ thể trung gian.", "Chủ thể quản lí."], answer: 1 },
                { text: "Các thương lái, siêu thị phân phối, sàn thương mại điện tử và ngân hàng thuộc nhóm chủ thể nào?", options: ["Chủ thể sản xuất.", "Chủ thể tiêu dùng.", "Chủ thể trung gian.", "Chủ thể Nhà nước."], answer: 2 },
                { text: "Chủ thể nào có vai trò quản lí vĩ mô nền kinh tế và khắc phục các khuyết tật của thị trường?", options: ["Chủ thể sản xuất.", "Chủ thể tiêu dùng.", "Chủ thể trung gian.", "Chủ thể Nhà nước."], answer: 3 },
                { text: "Trách nhiệm xã hội cơ bản của chủ thể sản xuất đối với người tiêu dùng là gì?", options: ["Cung cấp hàng hoá đảm bảo chất lượng, an toàn và trung thực về thông tin.", "Tối đa hoá lợi nhuận bằng mọi giá.", "Độc quyền thao túng giá bán trên thị trường.", "Chỉ bán hàng cho người có thu nhập cao."], answer: 0 }
            ],
            tfSeed: {
                context: "Về vai trò và trách nhiệm của các chủ thể tham gia nền kinh tế",
                a: "Trong nền kinh tế thị trường có 4 nhóm chủ thể cơ bản gồm: sản xuất, tiêu dùng, trung gian và Nhà nước.",
                b: "Chủ thể trung gian chỉ làm tăng giá bán hàng hoá chứ không mang lại giá trị kết nối nào cho nền kinh tế.",
                c: "Một công dân khi đi làm ở công ty là tham gia sản xuất, nhưng khi đi siêu thị mua sắm lại đóng vai trò là chủ thể tiêu dùng.",
                d: "Nhà nước kiến tạo môi trường pháp lí minh bạch và đầu tư hạ tầng công cộng là điều kiện tiên quyết để mọi chủ thể kinh tế phát huy tối đa năng lực."
            }
        },
        {
            id: 3,
            title: "Bài 3: Thị trường",
            coreConcept: "khái niệm, các loại thị trường và 3 chức năng cơ bản của thị trường",
            mcqSeed: [
                { text: "Lĩnh vực trao đổi, mua bán mà ở đó các chủ thể kinh tế tác động qua lại lẫn nhau để xác định giá cả và số lượng hàng hoá, dịch vụ gọi là gì?", options: ["Ngân sách.", "Thị trường.", "Kế hoạch.", "Phân phối."], answer: 1 },
                { text: "Chức năng nào của thị trường giúp kiểm chứng xem hàng hoá sản xuất ra có phù hợp với nhu cầu xã hội hay không?", options: ["Chức năng thừa nhận.", "Chức năng thông tin.", "Chức năng điều tiết, kích thích.", "Chức năng cào bằng."], answer: 0 },
                { text: "Khi thị trường cung cấp dữ liệu về biến động giá cả, quy mô cung - cầu cho người mua và người bán, thị trường thực hiện chức năng nào?", options: ["Chức năng thừa nhận.", "Chức năng thông tin.", "Chức năng hành chính.", "Chức năng cưỡng chế."], answer: 1 },
                { text: "Theo đối tượng hàng hoá đem ra trao đổi, thị trường được chia thành những loại nào?", options: ["Thị trường tư liệu sản xuất và thị trường tư liệu tiêu dùng.", "Thị trường trong nước và thị trường quốc tế.", "Thị trường truyền thống và thị trường trực tuyến.", "Thị trường tự do và thị trường độc quyền."], answer: 0 },
                { text: "Sự dịch chuyển vốn và lao động từ ngành có lợi nhuận thấp sang ngành có lợi nhuận cao thể hiện chức năng nào của thị trường?", options: ["Chức năng thừa nhận.", "Chức năng thông tin.", "Chức năng điều tiết, kích thích hoặc hạn chế sản xuất và tiêu dùng.", "Chức năng bảo hiểm."], answer: 2 }
            ],
            tfSeed: {
                context: "Về khái niệm, phân loại và các chức năng cơ bản của thị trường",
                a: "Các yếu tố cơ bản cấu thành thị trường bao gồm: hàng hoá, tiền tệ, người mua, người bán và giá cả.",
                b: "Thị trường chỉ tồn tại ở những địa điểm hữu hình cụ thể như chợ truyền thống hoặc trung tâm thương mại.",
                c: "Nhờ chức năng thông tin của thị trường, người sản xuất biết cần sản xuất mặt hàng gì và người tiêu dùng biết nên mua hàng ở thời điểm nào có lợi nhất.",
                d: "Nắm bắt và vận dụng nhạy bén các chức năng của thị trường giúp doanh nghiệp nâng cao sức cạnh tranh và tránh rủi ro ứ đọng hàng hoá."
            }
        },
        {
            id: 4,
            title: "Bài 4: Cơ chế thị trường",
            coreConcept: "cơ chế thị trường, ưu điểm, khuyết tật của cơ chế thị trường và giá cả thị trường",
            mcqSeed: [
                { text: "Hệ thống các quan hệ kinh tế mang tính tự điều chỉnh tuân theo yêu cầu của các quy luật kinh tế được gọi là gì?", options: ["Cơ chế kế hoạch hoá tập trung.", "Cơ chế thị trường.", "Cơ chế bao cấp.", "Cơ chế hành chính."], answer: 1 },
                { text: "Biểu hiện bằng tiền của giá trị hàng hoá trên thị trường được gọi là gì?", options: ["Giá trị sử dụng.", "Chi phí cố định.", "Giá cả thị trường.", "Tiền công lao động."], answer: 2 },
                { text: "Nội dung nào sau đây là ưu điểm của cơ chế thị trường?", options: ["Tự động dẫn đến phân phối thu nhập đồng đều cho mọi người.", "Kích thích đổi mới kĩ thuật, hợp lí hoá sản xuất và phân bổ nguồn lực hiệu quả.", "Loại bỏ hoàn toàn nguy cơ ô nhiễm môi trường.", "Đảm bảo không bao giờ xảy ra khủng hoảng kinh tế."], answer: 1 },
                { text: "Hiện tượng nào sau đây là biểu hiện khuyết tật của cơ chế thị trường?", options: ["Đa dạng hoá mẫu mã hàng hoá.", "Cạnh tranh không lành mạnh, làm hàng giả và gây ô nhiễm môi trường vì chạy theo lợi nhuận.", "Tăng năng suất lao động xã hội.", "Ứng dụng trí tuệ nhân tạo vào quản trị doanh nghiệp."], answer: 1 },
                { text: "Chức năng nào sau đây thuộc về giá cả thị trường?", options: ["Cung cấp thông tin, phân bổ nguồn lực và là công cụ điều tiết vĩ mô của Nhà nước.", "Xoá bỏ nghĩa vụ nộp thuế của doanh nghiệp.", "Đảm bảo mọi hàng hoá đều bán cùng một mức giá.", "Thay thế hoàn toàn vai trò của pháp luật."], answer: 0 }
            ],
            tfSeed: {
                context: "Về cơ chế thị trường và vai trò của giá cả thị trường",
                a: "Cơ chế thị trường vận hành dựa trên sự tác động của các quy luật kinh tế như quy luật giá trị, cung - cầu và cạnh tranh.",
                b: "Cơ chế thị trường luôn hoàn hảo và tự khắc phục được mọi vấn đề bất bình đẳng xã hội mà không cần sự quản lí của Nhà nước.",
                c: "Khi giá cả một mặt hàng tăng cao do khan hiếm, tín hiệu giá cả sẽ thu hút các nhà sản xuất mở rộng quy mô cung ứng mặt hàng đó.",
                d: "Phát triển kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam đòi hỏi phải phát huy tối đa mặt tích cực của cơ chế thị trường đi đôi với tăng cường quản lí nhà nước để khắc phục khuyết tật."
            }
        },
        {
            id: 5,
            title: "Bài 5: Ngân sách nhà nước",
            coreConcept: "khái niệm, đặc điểm, vai trò của ngân sách nhà nước và quyền, nghĩa vụ công dân",
            mcqSeed: [
                { text: "Toàn bộ các khoản thu, chi của Nhà nước được dự toán và thực hiện trong một khoảng thời gian nhất định do cơ quan nhà nước có thẩm quyền quyết định gọi là gì?", options: ["Quỹ bảo hiểm thương mại.", "Ngân sách nhà nước.", "Vốn điều lệ công ty.", "Quỹ tín dụng đen."], answer: 1 },
                { text: "Cơ quan nào có thẩm quyền quyết định dự toán và phân bổ ngân sách nhà nước trung ương hằng năm?", options: ["Quốc hội.", "Toà án nhân dân tối cao.", "Ngân hàng thương mại.", "Liên đoàn thương mại."], answer: 0 },
                { text: "Đặc điểm nào sau đây phản ánh bản chất pháp lí của Ngân sách nhà nước?", options: ["Hoạt động thu chi ngân sách nhà nước luôn được thực hiện theo luật định và phục vụ lợi ích chung của quốc gia.", "Ai đóng góp vào ngân sách bao nhiêu sẽ được hoàn trả trực tiếp bấy nhiêu.", "Ngân sách nhà nước thuộc quyền sở hữu riêng của các doanh nghiệp tư nhân.", "Mọi khoản thu chi ngân sách đều được giữ bí mật tuyệt đối với người dân."], answer: 0 },
                { text: "Vai trò nào sau đây thuộc về Ngân sách nhà nước?", options: ["Huy động nguồn tài chính để đảm bảo hoạt động của bộ máy nhà nước, điều tiết thị trường và thực hiện công bằng xã hội.", "Giúp các công ty đa quốc gia thâu tóm thị trường nội địa.", "Tăng tỉ lệ lạm phát lên mức phi mã.", "Thay thế hoạt động tín dụng của các ngân hàng."], answer: 0 },
                { text: "Quỹ nào được trích lập từ ngân sách nhà nước để sử dụng cho các nhiệm vụ cấp bách như phòng chống, khắc phục hậu quả thiên tai, dịch bệnh?", options: ["Quỹ khen thưởng doanh nghiệp.", "Dự phòng ngân sách nhà nước và Quỹ dự trữ tài chính.", "Quỹ đầu tư chứng khoán.", "Quỹ hưu trí tự nguyện."], answer: 1 }
            ],
            tfSeed: {
                context: "Về Ngân sách nhà nước và quyền, nghĩa vụ của công dân đối với ngân sách nhà nước",
                a: "Ngân sách nhà nước gồm ngân sách trung ương và ngân sách địa phương, là quỹ tiền tệ tập trung lớn nhất của Nhà nước.",
                b: "Các khoản thu từ ngân sách nhà nước mang tính hoàn trả trực tiếp theo tỉ lệ đóng góp của từng cá nhân.",
                c: "Nhà nước chi ngân sách để xây dựng trường học, bệnh viện, đường giao thông vùng sâu vùng xa là thực hiện vai trò định hướng phát triển và đảm bảo an sinh xã hội.",
                d: "Công dân vừa có nghĩa vụ đóng góp đầy đủ các khoản thu vào ngân sách theo luật định, vừa có quyền giám sát việc sử dụng ngân sách công khai, minh bạch tại địa phương."
            }
        },
        {
            id: 6,
            title: "Bài 6: Thuế",
            coreConcept: "khái niệm thuế, các loại thuế trực thu, gián thu và vai trò của thuế",
            mcqSeed: [
                { text: "Khoản nộp ngân sách nhà nước bắt buộc của tổ chức, hộ gia đình, cá nhân theo quy định của các luật thuế được gọi là gì?", options: ["Tiền quyên góp từ thiện.", "Thuế.", "Học phí.", "Tiền gửi tiết kiệm."], answer: 1 },
                { text: "Loại thuế điều tiết trực tiếp vào thu nhập hoặc tài sản của người nộp thuế (người nộp thuế đồng thời là người chịu thuế) gọi là gì?", options: ["Thuế gián thu.", "Thuế trực thu.", "Thuế giá trị gia tăng.", "Thuế xuất nhập khẩu."], answer: 1 },
                { text: "Loại thuế nào dưới đây thuộc nhóm thuế gián thu?", options: ["Thuế thu nhập cá nhân.", "Thuế thu nhập doanh nghiệp.", "Thuế giá trị gia tăng (VAT) và thuế tiêu thụ đặc biệt.", "Thuế sử dụng đất nông nghiệp."], answer: 2 },
                { text: "Nhà nước áp dụng mức thuế suất thuế tiêu thụ đặc biệt cao đối với rượu, bia, thuốc lá nhằm mục đích chính nào?", options: ["Khuyến khích người dân tiêu thụ nhiều hơn.", "Hướng dẫn tiêu dùng hợp lí, hạn chế các mặt hàng có hại cho sức khoẻ và điều tiết thu nhập.", "Giúp các công ty sản xuất rượu bia giảm giá bán.", "Xoá bỏ thuế giá trị gia tăng."], answer: 1 },
                { text: "Hành vi nào sau đây là thực hiện đúng pháp luật về thuế của công dân và doanh nghiệp?", options: ["Khai man doanh thu để giảm số tiền thuế phải nộp.", "Đăng kí mã số thuế, kê khai trung thực và nộp thuế đầy đủ, đúng hạn.", "Mua bán hoá đơn giá trị gia tăng khống.", "Trì hoãn nộp thuế để lấy tiền gửi ngân hàng."], answer: 1 }
            ],
            tfSeed: {
                context: "Về vai trò của Thuế, phân loại thuế và trách nhiệm công dân trong việc nộp thuế",
                a: "Thuế là nguồn thu chủ yếu, quan trọng và ổn định nhất của ngân sách nhà nước.",
                b: "Đối với thuế giá trị gia tăng (VAT), doanh nghiệp bán hàng là người chịu thuế cuối cùng chứ không phải người tiêu dùng.",
                c: "Chính sách miễn, giảm thuế thu nhập doanh nghiệp cho các dự án công nghệ cao, nông nghiệp sạch là công cụ để Nhà nước định hướng đầu tư.",
                d: "Mọi hành vi gian lận, trốn thuế không chỉ xâm phạm pháp luật tài chính quốc gia mà còn làm suy giảm nguồn lực đầu tư cho phúc lợi công cộng."
            }
        },
        {
            id: 7,
            title: "Bài 7: Sản xuất kinh doanh và các mô hình sản xuất kinh doanh",
            coreConcept: "vai trò của sản xuất kinh doanh và các mô hình hộ kinh doanh, hợp tác xã, doanh nghiệp",
            mcqSeed: [
                { text: "Hoạt động sản xuất ra sản phẩm hàng hoá, dịch vụ để đáp ứng nhu cầu của thị trường với mục đích thu lợi nhuận được gọi là gì?", options: ["Hoạt động từ thiện.", "Sản xuất kinh doanh.", "Quản lí hành chính.", "Tiêu dùng cá nhân."], answer: 1 },
                { text: "Mô hình kinh tế do một cá nhân hoặc một nhóm người là các thành viên hộ gia đình làm chủ, chỉ được đăng kí kinh doanh tại một địa điểm và tự chịu trách nhiệm bằng toàn bộ tài sản của mình là gì?", options: ["Công ty cổ phần.", "Hộ sản xuất kinh doanh.", "Tập đoàn nhà nước.", "Hợp tác xã liên hiệp."], answer: 1 },
                { text: "Tổ chức kinh tế tập thể, đồng sở hữu, có tư cách pháp nhân, do ít nhất 05 thành viên chính thức tự nguyện thành lập và hợp tác tương trợ lẫn nhau gọi là gì?", options: ["Doanh nghiệp tư nhân.", "Hợp tác xã.", "Công ty hợp danh.", "Hộ kinh doanh cá thể."], answer: 1 },
                { text: "Loại hình doanh nghiệp nào có vốn điều lệ được chia thành nhiều phần bằng nhau gọi là cổ phần và có quyền phát hành cổ phiếu để huy động vốn?", options: ["Doanh nghiệp tư nhân.", "Công ty trách nhiệm hữu hạn một thành viên.", "Công ty cổ phần.", "Hộ kinh doanh gia đình."], answer: 2 },
                { text: "Điểm hạn chế của mô hình Doanh nghiệp tư nhân so với Công ty trách nhiệm hữu hạn là gì?", options: ["Doanh nghiệp tư nhân không có tư cách pháp nhân và chủ doanh nghiệp phải chịu trách nhiệm vô hạn bằng toàn bộ tài sản của mình.", "Chủ doanh nghiệp tư nhân không có quyền quyết định hoạt động kinh doanh.", "Doanh nghiệp tư nhân bắt buộc phải có trên 100 cổ đông.", "Doanh nghiệp tư nhân do Nhà nước nắm giữ 100% vốn."], answer: 0 }
            ],
            tfSeed: {
                context: "Về các mô hình sản xuất kinh doanh (Hộ kinh doanh, Hợp tác xã, Doanh nghiệp) tại Việt Nam",
                a: "Sản xuất kinh doanh góp phần tạo việc làm, nâng cao thu nhập cho người lao động và đóng góp cho tăng trưởng kinh tế.",
                b: "Hộ sản xuất kinh doanh có quy mô vốn lớn, có tư cách pháp nhân và được quyền phát hành cổ phiếu ra công chúng.",
                c: "Các thành viên tham gia Hợp tác xã nông nghiệp kiểu mới vừa được cung ứng giống, vật tư giá tốt vừa được hỗ trợ bao tiêu nông sản đầu ra ổn định.",
                d: "Khi lựa chọn mô hình sản xuất kinh doanh, nhà đầu tư cần cân nhắc kĩ quy mô vốn, năng lực quản trị và mức độ chấp nhận rủi ro pháp lí về tài sản."
            }
        },
        {
            id: 8,
            title: "Bài 8: Tín dụng và vai trò của tín dụng trong đời sống",
            coreConcept: "khái niệm, đặc điểm và vai trò của tín dụng trong nền kinh tế",
            mcqSeed: [
                { text: "Quan hệ kinh tế giữa chủ thể sở hữu (người cho vay) và chủ thể sử dụng nguồn vốn nhàn rỗi (người vay) theo nguyên tắc hoàn trả có kì hạn cả vốn gốc và lãi được gọi là gì?", options: ["Viện trợ nhân đạo.", "Tín dụng.", "Thuế trực thu.", "Phân phối ngân sách."], answer: 1 },
                { text: "Đặc điểm cơ bản nào phân biệt quan hệ tín dụng với hoạt động cấp phát ngân sách nhà nước?", options: ["Tính hoàn trả có kì hạn cả vốn gốc và tiền lãi.", "Tính bắt buộc không hoàn trả.", "Không có sự thoả thuận về thời gian.", "Chỉ sử dụng vàng nguyên khối."], answer: 0 },
                { text: "Số tiền mà người đi vay phải trả thêm cho người cho vay ngoài phần vốn gốc ban đầu khi đến hạn được gọi là gì?", options: ["Tiền thuế.", "Lợi tức tín dụng (tiền lãi).", "Vốn điều lệ.", "Trợ cấp xã hội."], answer: 1 },
                { text: "Vai trò tích cực của tín dụng đối với nền kinh tế là gì?", options: ["Tập trung và phân bổ nguồn vốn nhàn rỗi hiệu quả, thúc đẩy sản xuất, tiêu dùng và luân chuyển hàng hoá.", "Làm gia tăng lượng tiền nhàn rỗi cất trữ trong dân cư.", "Xoá bỏ hoàn toàn rủi ro phá sản cho người đi vay.", "Giúp người vay không cần làm việc vẫn có thu nhập."], answer: 0 },
                { text: "Khi xét duyệt hồ sơ cho vay tín dụng, yếu tố nào của người đi vay luôn được người cho vay đặc biệt coi trọng?", options: ["Sở thích giải trí cá nhân.", "Chữ tín, lịch sử trả nợ và khả năng tài chính hoàn trả vốn vay.", "Số lượng bạn bè trên mạng xã hội.", "Nơi sinh của người vay."], answer: 1 }
            ],
            tfSeed: {
                context: "Về bản chất, đặc điểm và vai trò của Tín dụng trong đời sống xã hội",
                a: "Tín dụng hoạt động dựa trên sự tin tưởng và cam kết hoàn trả đúng hạn cả gốc lẫn lãi giữa bên cho vay và bên đi vay.",
                b: "Trong quan hệ tín dụng, người cho vay chuyển giao vĩnh viễn quyền sở hữu số tiền vốn cho người đi vay.",
                c: "Nguồn vốn tín dụng ưu đãi từ Ngân hàng Chính sách xã hội đã giúp hàng triệu hộ nghèo, sinh viên có vốn để sản xuất kinh doanh và học tập.",
                d: "Để sử dụng tín dụng an toàn, người đi vay phải tính toán phương án sử dụng vốn sinh lời hoặc nguồn thu nhập đảm bảo khả năng trả nợ đúng hạn."
            }
        },
        {
            id: 9,
            title: "Bài 9: Dịch vụ tín dụng",
            coreConcept: "tín dụng ngân hàng, tín dụng thương mại, tín dụng nhà nước và tín dụng tiêu dùng",
            mcqSeed: [
                { text: "Hình thức tín dụng trong đó ngân hàng nhận tiền gửi của người có tiền nhàn rỗi và cho các doanh nghiệp, cá nhân vay lại gọi là gì?", options: ["Tín dụng thương mại.", "Tín dụng ngân hàng.", "Tín dụng nhà nước.", "Họ, hụi tự phát."], answer: 1 },
                { text: "Khi ngân hàng cho khách hàng vay vốn dựa hoàn toàn vào uy tín của người vay và chứng minh thu nhập ổn định mà không cần tài sản đảm bảo thì gọi là hình thức vay gì?", options: ["Cho vay thế chấp.", "Cho vay tín chấp.", "Cho vay cầm cố.", "Mua bán nợ."], answer: 1 },
                { text: "Quan hệ tín dụng giữa các doanh nghiệp trực tiếp sản xuất kinh doanh thông qua hình thức mua bán chịu hàng hoá, trả chậm được gọi là gì?", options: ["Tín dụng thương mại.", "Tín dụng nhà nước.", "Tín dụng ngân hàng.", "Bảo hiểm tài sản."], answer: 0 },
                { text: "Việc công dân sử dụng thẻ tín dụng ngân hàng để mua hàng trước, thanh toán sau hoặc mua điện thoại trả góp thuộc dịch vụ tín dụng nào?", options: ["Tín dụng nhà nước.", "Tín dụng tiêu dùng.", "Đầu tư công.", "Thuế gián thu."], answer: 1 },
                { text: "Nhà nước phát hành trái phiếu Chính phủ hoặc công trái để vay tiền của nhân dân phục vụ đầu tư phát triển kinh tế - xã hội thuộc loại hình tín dụng nào?", options: ["Tín dụng thương mại.", "Tín dụng nhà nước.", "Tín dụng tư nhân.", "Tín dụng đen."], answer: 1 }
            ],
            tfSeed: {
                context: "Về các loại hình dịch vụ tín dụng phổ biến trong nền kinh tế",
                a: "Các dịch vụ tín dụng hợp pháp chủ yếu gồm: tín dụng ngân hàng, tín dụng thương mại, tín dụng tiêu dùng và tín dụng nhà nước.",
                b: "Cho vay thế chấp tài sản có mức độ rủi ro đối với ngân hàng cao hơn nhiều so với cho vay tín chấp.",
                c: "Tín dụng thương mại (bán chịu hàng hoá giữa các doanh nghiệp) giúp đẩy nhanh tốc độ tiêu thụ sản phẩm và giảm ứ đọng vốn lưu động.",
                d: "Người dân cần phân biệt rõ dịch vụ tín dụng tiêu dùng hợp pháp được Ngân hàng Nhà nước cấp phép với các hình thức 'tín dụng đen' lãi suất cắt cổ để tự bảo vệ tài sản."
            }
        },
        {
            id: 10,
            title: "Bài 10: Lập kế hoạch tài chính cá nhân",
            coreConcept: "khái niệm, các loại kế hoạch tài chính cá nhân (ngắn hạn, trung hạn, dài hạn) và các bước lập kế hoạch",
            mcqSeed: [
                { text: "Bản kế hoạch thu chi giúp quản lí tiền bạc của cá nhân bao gồm các quyết định về thu nhập, chi tiêu, tiết kiệm, đầu tư để thực hiện các mục tiêu tài chính gọi là gì?", options: ["Báo cáo thuế doanh nghiệp.", "Kế hoạch tài chính cá nhân.", "Dự toán ngân sách xã.", "Hợp đồng lao động."], answer: 1 },
                { text: "Kế hoạch tài chính cá nhân nhằm thực hiện mục tiêu tài chính trong thời gian dưới 3 tháng được gọi là gì?", options: ["Kế hoạch tài chính ngắn hạn.", "Kế hoạch tài chính trung hạn.", "Kế hoạch tài chính dài hạn.", "Kế hoạch tài chính vĩ mô."], answer: 0 },
                { text: "Kế hoạch tài chính cá nhân có thời gian thực hiện từ 3 tháng đến dưới 6 tháng thuộc loại nào?", options: ["Kế hoạch ngắn hạn.", "Kế hoạch trung hạn.", "Kế hoạch dài hạn.", "Kế hoạch đột xuất."], answer: 1 },
                { text: "Mục tiêu tiết kiệm tiền trong 3 năm để mua một chiếc xe máy điện hoặc đóng học phí đại học thuộc loại kế hoạch tài chính nào?", options: ["Kế hoạch ngắn hạn.", "Kế hoạch trung hạn.", "Kế hoạch dài hạn (từ 6 tháng trở lên).", "Kế hoạch hằng ngày."], answer: 2 },
                { text: "Bước đầu tiên trong quy trình lập kế hoạch tài chính cá nhân là gì?", options: ["Đánh giá năng lực tài chính và xác định mục tiêu tài chính cá nhân.", "Đi vay tiền bạn bè để mua sắm.", "Tiêu hết số tiền hiện có rồi mới tính toán.", "Huỷ bỏ mọi khoản tiết kiệm dự phòng."], answer: 0 }
            ],
            tfSeed: {
                context: "Về ý nghĩa và quy trình lập kế hoạch tài chính cá nhân",
                a: "Kế hoạch tài chính cá nhân được chia thành 3 loại theo thời gian: ngắn hạn (dưới 3 tháng), trung hạn (3 - 6 tháng) và dài hạn (từ 6 tháng trở lên).",
                b: "Học sinh THPT chưa tự làm ra tiền nên hoàn toàn không cần và không thể lập kế hoạch tài chính cá nhân.",
                c: "Tuân thủ nguyên tắc chi tiêu không vượt quá thu nhập và luôn dành một tỉ lệ tiết kiệm định kì giúp cá nhân chủ động trước các tình huống phát sinh.",
                d: "Thường xuyên theo dõi, kiểm soát thực trạng thu chi và linh hoạt điều chỉnh kế hoạch là chìa khoá để biến các mục tiêu tài chính ngắn hạn thành tích luỹ tài sản dài hạn."
            }
        },
        {
            id: 11,
            title: "Bài 11: Khái niệm, đặc điểm và vai trò của pháp luật",
            coreConcept: "khái niệm pháp luật, 3 đặc trưng cơ bản và vai trò của pháp luật trong đời sống",
            mcqSeed: [
                { text: "Hệ thống các quy tắc xử sự chung do Nhà nước ban hành và được bảo đảm thực hiện bằng quyền lực nhà nước được gọi là gì?", options: ["Phong tục tập quán.", "Pháp luật.", "Đạo đức xã hội.", "Tín điều tôn giáo."], answer: 1 },
                { text: "Việc pháp luật là khuôn mẫu chung, được áp dụng nhiều lần, ở nhiều nơi đối với tất cả mọi cá nhân, tổ chức thể hiện đặc trưng nào?", options: ["Tính quy phạm phổ biến.", "Tính quyền lực, bắt buộc chung.", "Tính xác định chặt chẽ về mặt hình thức.", "Tính tự nguyện."], answer: 0 },
                { text: "Đặc trưng nào của pháp luật quy định ngôn ngữ pháp lí phải rõ ràng, chính xác, một nghĩa và văn bản cấp dưới không được trái với văn bản cấp trên?", options: ["Tính quy phạm phổ biến.", "Tính quyền lực, bắt buộc chung.", "Tính xác định chặt chẽ về hình thức.", "Tính truyền thống."], answer: 2 },
                { text: "Đặc trưng nào phân biệt sự khác nhau rõ rệt nhất giữa pháp luật với đạo đức và hương ước làng xã?", options: ["Tính quyền lực, bắt buộc chung (do Nhà nước ban hành và bảo đảm bằng sức mạnh cưỡng chế nhà nước).", "Điều chỉnh hành vi con người.", "Hướng tới cái thiện.", "Đều được truyền miệng qua các thế hệ."], answer: 0 },
                { text: "Đối với công dân, pháp luật giữ vai trò cốt lõi nào sau đây?", options: ["Là phương tiện để công dân thực hiện và bảo vệ quyền, lợi ích hợp pháp của mình.", "Là công cụ hạn chế mọi quyền tự do của con người.", "Chỉ bảo vệ quyền lợi cho tầng lớp giàu có.", "Thay thế nhu cầu lao động của công dân."], answer: 0 }
            ],
            tfSeed: {
                context: "Về khái niệm, các đặc trưng cơ bản và vai trò của Pháp luật trong đời sống xã hội",
                a: "Pháp luật có 3 đặc trưng cơ bản: tính quy phạm phổ biến, tính quyền lực bắt buộc chung và tính xác định chặt chẽ về hình thức.",
                b: "Ai thích thì thực hiện pháp luật, không thích thì có thể từ chối mà không bị cơ quan nhà nước xử lí.",
                c: "Pháp luật là công cụ hữu hiệu nhất để Nhà nước quản lí kinh tế, văn hoá, xã hội và giữ vững an ninh chính trị, trật tự an toàn xã hội.",
                d: "Xây dựng ý thức thượng tôn pháp luật ('Sống và làm việc theo Hiến pháp và pháp luật') là nền tảng để bảo đảm dân chủ và công bằng xã hội."
            }
        },
        {
            id: 12,
            title: "Bài 12: Hệ thống pháp luật và văn bản pháp luật Việt Nam",
            coreConcept: "cấu trúc hệ thống pháp luật (quy phạm, chế định, ngành luật) và hệ thống văn bản quy phạm pháp luật",
            mcqSeed: [
                { text: "Đơn vị nhỏ nhất trong hệ thống pháp luật (tế bào của pháp luật) đặt ra quy tắc xử sự cho chủ thể trong hoàn cảnh cụ thể là gì?", options: ["Ngành luật.", "Chế định pháp luật.", "Quy phạm pháp luật.", "Bộ luật."], answer: 2 },
                { text: "Tập hợp các quy phạm pháp luật có cùng tính chất điều chỉnh một nhóm quan hệ xã hội tương ứng trong một ngành luật được gọi là gì?", options: ["Chế định pháp luật.", "Hiến pháp.", "Thông tư.", "Quyết định cá biệt."], answer: 0 },
                { text: "Văn bản nào có hiệu lực pháp lí cao nhất trong hệ thống văn bản quy phạm pháp luật Việt Nam?", options: ["Bộ luật Dân sự.", "Hiến pháp.", "Nghị định của Chính phủ.", "Pháp lệnh của Uỷ ban Thường vụ Quốc hội."], answer: 1 },
                { text: "Cơ quan nào có thẩm quyền ban hành Hiến pháp, Bộ luật và Luật tại Việt Nam?", options: ["Chính phủ.", "Quốc hội.", "Toà án nhân dân tối cao.", "Bộ Tư pháp."], answer: 1 },
                { text: "Văn bản nào sau đây là 'văn bản áp dụng pháp luật' (không phải văn bản quy phạm pháp luật)?", options: ["Luật Giao thông đường bộ.", "Nghị định xử phạt hành chính của Chính phủ.", "Quyết định xử phạt vi phạm hành chính đối với cá nhân anh Nguyễn Văn A.", "Thông tư của Bộ trưởng Bộ Giáo dục và Đào tạo."], answer: 2 }
            ],
            tfSeed: {
                context: "Về cấu trúc Hệ thống pháp luật và thứ bậc hiệu lực của Văn bản pháp luật Việt Nam",
                a: "Cấu trúc bên trong của hệ thống pháp luật gồm 3 thành tố từ nhỏ đến lớn: quy phạm pháp luật, chế định pháp luật và ngành luật.",
                b: "Nghị định của Chính phủ và Thông tư của Bộ trưởng có hiệu lực pháp lí cao hơn các Bộ luật do Quốc hội ban hành.",
                c: "Văn bản áp dụng pháp luật (như bản án của Toà án, quyết định khen thưởng cá nhân) chỉ áp dụng một lần đối với cá nhân, tổ chức cụ thể.",
                d: "Mọi văn bản quy phạm pháp luật của trung ương và địa phương khi ban hành đều phải bảo đảm tính hợp hiến, hợp pháp và thống nhất với Hiến pháp."
            }
        },
        {
            id: 13,
            title: "Bài 13: Thực hiện pháp luật",
            coreConcept: "4 hình thức thực hiện pháp luật (tuân thủ, thi hành, sử dụng, áp dụng pháp luật)",
            mcqSeed: [
                { text: "Quá trình hoạt động có mục đích, làm cho những quy định của pháp luật đi vào cuộc sống và trở thành hành vi hợp pháp của các cá nhân, tổ chức gọi là gì?", options: ["Xây dựng pháp luật.", "Thực hiện pháp luật.", "Sửa đổi pháp luật.", "Bãi bỏ pháp luật."], answer: 1 },
                { text: "Hình thức thực hiện pháp luật nào mà chủ thể pháp luật kiềm chế không tiến hành những hoạt động mà pháp luật cấm?", options: ["Sử dụng pháp luật.", "Thi hành pháp luật.", "Tuân thủ pháp luật.", "Áp dụng pháp luật."], answer: 2 },
                { text: "Hình thức thực hiện pháp luật nào mà chủ thể pháp luật chủ động thực hiện nghĩa vụ của mình bằng hành động tích cực (làm những việc pháp luật bắt buộc phải làm)?", options: ["Tuân thủ pháp luật.", "Thi hành pháp luật.", "Sử dụng pháp luật.", "Áp dụng pháp luật."], answer: 1 },
                { text: "Các cá nhân, tổ chức sử dụng đúng đắn các quyền của mình, làm những gì mà pháp luật cho phép làm thuộc hình thức nào?", options: ["Sử dụng pháp luật.", "Tuân thủ pháp luật.", "Thi hành pháp luật.", "Áp dụng pháp luật."], answer: 0 },
                { text: "Hình thức thực hiện pháp luật nào chỉ dành riêng cho cơ quan, công chức nhà nước có thẩm quyền ban hành các quyết định làm phát sinh, thay đổi hoặc chấm dứt quyền, nghĩa vụ của cá nhân, tổ chức?", options: ["Sử dụng pháp luật.", "Tuân thủ pháp luật.", "Thi hành pháp luật.", "Áp dụng pháp luật."], answer: 3 }
            ],
            tfSeed: {
                context: "Về phân biệt và vận dụng 4 hình thức thực hiện pháp luật trong thực tiễn",
                a: "Thực hiện pháp luật bao gồm 4 hình thức: sử dụng pháp luật, thi hành pháp luật, tuân thủ pháp luật và áp dụng pháp luật.",
                b: "Người điều khiển xe máy đội mũ bảo hiểm và nộp thuế đúng hạn là đang thực hiện hình thức 'Sử dụng pháp luật'.",
                c: "Việc công dân không buôn bán hàng cấm, không vượt đèn đỏ là biểu hiện của hình thức 'Tuân thủ pháp luật'.",
                d: "Khi Uỷ ban nhân dân cấp xã cấp Giấy chứng nhận kết hôn cho đôi nam nữ đủ điều kiện kết hôn là cơ quan nhà nước đang thực hiện hình thức 'Áp dụng pháp luật'."
            }
        },
        {
            id: 14,
            title: "Bài 14: Giới thiệu về Hiến pháp nước Cộng hoà xã hội chủ nghĩa Việt Nam",
            coreConcept: "khái niệm, vị trí tối cao và đặc điểm của Hiến pháp nước CHXHCN Việt Nam năm 2013",
            mcqSeed: [
                { text: "Luật cơ bản của Nhà nước, có hiệu lực pháp lí cao nhất trong hệ thống pháp luật Việt Nam được gọi là gì?", options: ["Bộ luật Hình sự.", "Hiến pháp.", "Luật Tổ chức Quốc hội.", "Pháp lệnh."], answer: 1 },
                { text: "Bản Hiến pháp hiện hành đang có hiệu lực thi hành tại Việt Nam được Quốc hội thông qua vào năm nào (và được sửa đổi, bổ sung hoàn thiện theo chủ trương tinh gọn bộ máy)?", options: ["Hiến pháp năm 1946.", "Hiến pháp năm 1980.", "Hiến pháp năm 1992.", "Hiến pháp năm 2013."], answer: 3 },
                { text: "Hiến pháp quy định những vấn đề gì của quốc gia?", options: ["Chỉ quy định mức phạt tiền đối với lỗi vi phạm giao thông.", "Những vấn đề cơ bản, trọng đại nhất về chế độ chính trị, kinh tế, văn hoá, xã hội, quyền con người, quyền công dân và tổ chức bộ máy nhà nước.", "Chỉ quy định điều lệ hoạt động của doanh nghiệp tư nhân.", "Quy định chi tiết giá bán lẻ từng loại hàng hoá."], answer: 1 },
                { text: "Mọi văn bản pháp luật khác khi ban hành phải tuân thủ nguyên tắc nào đối với Hiến pháp?", options: ["Phải phù hợp và không được trái với quy định của Hiến pháp.", "Có thể thay thế Hiến pháp ở cấp địa phương.", "Có hiệu lực ngang bằng với Hiến pháp.", "Không cần căn cứ vào Hiến pháp."], answer: 0 },
                { text: "Theo quy định của Hiến pháp, muốn sửa đổi Hiến pháp phải được ít nhất bao nhiêu tổng số đại biểu Quốc hội biểu quyết tán thành?", options: ["Ít nhất một phần ba (1/3).", "Quá nửa (trên 50%).", "Ít nhất hai phần ba (2/3) tổng số đại biểu Quốc hội.", "Chỉ cần 10% đại biểu."], answer: 2 }
            ],
            tfSeed: {
                context: "Về vị trí, vai trò và đặc điểm của Hiến pháp nước Cộng hoà xã hội chủ nghĩa Việt Nam",
                a: "Hiến pháp là đạo luật gốc, có hiệu lực pháp lí tối cao trên phạm vi toàn lãnh thổ Việt Nam.",
                b: "Chính phủ và Uỷ ban nhân dân cấp tỉnh có toàn quyền tự sửa đổi các điều khoản của Hiến pháp.",
                c: "Các quy định của Hiến pháp là nguồn, là căn cứ pháp lí để Quốc hội ban hành các bộ luật, luật chuyên ngành cụ thể.",
                d: "Tôn trọng và bảo vệ sự bất khả xâm phạm của Hiến pháp là nghĩa vụ thiêng liêng của mọi cơ quan nhà nước, tổ chức và công dân Việt Nam."
            }
        },
        {
            id: 15,
            title: "Bài 15: Nội dung cơ bản của Hiến pháp về chế độ chính trị",
            coreConcept: "bản chất Nhà nước, chủ quyền quốc gia, vai trò lãnh đạo của Đảng và quyền làm chủ của Nhân dân",
            mcqSeed: [
                { text: "Theo Điều 1 Hiến pháp năm 2013, nước Cộng hoà xã hội chủ nghĩa Việt Nam là một nước như thế nào?", options: ["Độc lập, có chủ quyền, thống nhất và toàn vẹn lãnh thổ, bao gồm đất liền, hải đảo, vùng biển và vùng trời.", "Chia thành các bang tự trị độc lập.", "Không bao gồm thềm lục địa và vùng trời.", "Theo chế độ quân chủ lập hiến."], answer: 0 },
                { text: "Theo Điều 2 Hiến pháp năm 2013, tất cả quyền lực nhà nước ở nước Cộng hoà xã hội chủ nghĩa Việt Nam thuộc về ai?", options: ["Thuộc về các tập đoàn kinh tế.", "Thuộc về Nhân dân mà nền tảng là liên minh giữa giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức.", "Chỉ thuộc về đội ngũ cán bộ công chức.", "Thuộc về các tổ chức nước ngoài."], answer: 1 },
                { text: "Theo Điều 4 Hiến pháp năm 2013, lực lượng nào là lực lượng lãnh đạo Nhà nước và xã hội ở Việt Nam?", options: ["Đảng Cộng sản Việt Nam.", "Các hiệp hội doanh nghiệp.", "Toà án trọng tài quốc tế.", "Ngân hàng Thế giới."], answer: 0 },
                { text: "Theo Hiến pháp năm 2013, Nhân dân thực hiện quyền lực nhà nước bằng những hình thức nào?", options: ["Chỉ thông qua bầu cử đại biểu.", "Bằng dân chủ trực tiếp, bằng dân chủ đại diện thông qua Quốc hội, Hội đồng nhân dân và thông qua các cơ quan khác của Nhà nước.", "Chỉ thông qua mạng xã hội.", "Thông qua các tổ chức phi chính phủ nước ngoài."], answer: 1 },
                { text: "Ngôn ngữ quốc gia của nước Cộng hoà xã hội chủ nghĩa Việt Nam được Hiến pháp quy định là gì?", options: ["Tiếng Anh.", "Tiếng Việt.", "Tiếng Pháp.", "Đa ngôn ngữ quốc tế."], answer: 1 }
            ],
            tfSeed: {
                context: "Về nội dung cơ bản của Hiến pháp năm 2013 quy định về Chế độ chính trị",
                a: "Nhà nước Cộng hoà xã hội chủ nghĩa Việt Nam là nhà nước pháp quyền xã hội chủ nghĩa của Nhân dân, do Nhân dân, vì Nhân dân.",
                b: "Ở Việt Nam, quyền lực nhà nước được phân chia tuyệt đối không có sự phối hợp giữa ba nhánh lập pháp, hành pháp và tư pháp.",
                c: "Mặt trận Tổ quốc Việt Nam là cơ sở chính trị của chính quyền nhân dân, đại diện và bảo vệ quyền, lợi ích hợp pháp, chính đáng của Nhân dân.",
                d: "Mọi hành vi xâm phạm độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ hoặc chống lại sự nghiệp xây dựng và bảo vệ Tổ quốc đều bị nghiêm trị theo pháp luật."
            }
        },
        {
            id: 16,
            title: "Bài 16: Quyền con người, quyền và nghĩa vụ cơ bản của công dân trong Hiến pháp",
            coreConcept: "các nhóm quyền con người, quyền công dân về chính trị, dân sự, kinh tế, văn hoá, xã hội và nghĩa vụ công dân",
            mcqSeed: [
                { text: "Theo Hiến pháp năm 2013, ở nước Cộng hoà xã hội chủ nghĩa Việt Nam, các quyền con người, quyền công dân về chính trị, dân sự, kinh tế, văn hoá, xã hội được Nhà nước đối xử như thế nào?", options: ["Được công nhận, tôn trọng, bảo vệ, bảo đảm theo Hiến pháp và pháp luật.", "Có thể bị hạn chế tuỳ ý bởi bất kì cá nhân nào.", "Chỉ áp dụng cho người trên 30 tuổi.", "Tách rời hoàn toàn khỏi nghĩa vụ công dân."], answer: 0 },
                { text: "Quyền con người, quyền công dân chỉ có thể bị hạn chế theo quy định của luật trong trường hợp cần thiết vì lí do nào sau đây?", options: ["Vì lợi ích kinh doanh của một công ty tư nhân.", "Vì lí do quốc phòng, an ninh quốc gia, trật tự, an toàn xã hội, đạo đức xã hội, sức khoẻ của cộng đồng.", "Vì sở thích cá nhân của người quản lí.", "Không bao giờ bị hạn chế trong bất kì hoàn cảnh nào."], answer: 1 },
                { text: "Quyền nào sau đây thuộc nhóm quyền về chính trị của công dân theo Hiến pháp?", options: ["Quyền bầu cử, ứng cử và quyền tham gia quản lí nhà nước và xã hội.", "Quyền sở hữu tư nhân về tài sản.", "Quyền kết hôn.", "Quyền nghiên cứu khoa học."], answer: 0 },
                { text: "Quyền sống, quyền bất khả xâm phạm về thân thể, chỗ ở, đời sống riêng tư thuộc nhóm quyền nào trong Hiến pháp?", options: ["Quyền về kinh tế.", "Quyền con người, quyền công dân về dân sự.", "Nghĩa vụ quân sự.", "Quyền thương mại quốc tế."], answer: 1 },
                { text: "Nội dung nào sau đây vừa là quyền vừa là nghĩa vụ cơ bản của công dân được quy định trong Hiến pháp năm 2013?", options: ["Học tập, bảo vệ Tổ quốc và bảo vệ môi trường.", "Đầu tư chứng khoán.", "Đi du lịch nước ngoài.", "Thành lập tập đoàn kinh tế."], answer: 0 }
            ],
            tfSeed: {
                context: "Về Quyền con người, quyền và nghĩa vụ cơ bản của công dân trong Hiến pháp năm 2013",
                a: "Hiến pháp năm 2013 đặt Chương II 'Quyền con người, quyền và nghĩa vụ cơ bản của công dân' ngay sau Chương I để khẳng định giá trị cốt lõi lấy con người làm trung tâm.",
                b: "Công dân được phép thực hiện quyền tự do của mình kể cả khi việc đó xâm phạm đến quyền và lợi ích hợp pháp của người khác.",
                c: "Mọi công dân đều có nghĩa vụ trung thành với Tổ quốc, tuân theo Hiến pháp, pháp luật và nộp thuế theo luật định.",
                d: "Nguyên tắc 'Quyền của công dân không tách rời nghĩa vụ công dân' bảo đảm sự hài hoà giữa lợi ích cá nhân với lợi ích của cộng đồng và dân tộc."
            }
        },
        {
            id: 17,
            title: "Bài 17: Nội dung cơ bản của Hiến pháp về kinh tế, văn hoá, xã hội, giáo dục, khoa học, công nghệ, môi trường",
            coreConcept: "nền kinh tế thị trường định hướng XHCN, quốc sách giáo dục - KHCN và bảo vệ môi trường trong Hiến pháp",
            mcqSeed: [
                { text: "Theo Điều 51 Hiến pháp năm 2013, nền kinh tế Việt Nam là nền kinh tế như thế nào?", options: ["Kinh tế kế hoạch hoá tập trung bao cấp.", "Nền kinh tế thị trường định hướng xã hội chủ nghĩa với nhiều hình thức sở hữu và nhiều thành phần kinh tế.", "Kinh tế tư bản tự do hoàn toàn.", "Kinh tế tự cung tự cấp khép kín."], answer: 1 },
                { text: "Trong nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam, thành phần kinh tế nào giữ vai trò chủ đạo?", options: ["Kinh tế có vốn đầu tư nước ngoài.", "Kinh tế nhà nước.", "Kinh tế cá thể, tiểu chủ.", "Kinh tế tư bản tư nhân."], answer: 1 },
                { text: "Theo Hiến pháp năm 2013, đất đai, tài nguyên nước, tài nguyên khoáng sản, nguồn lợi ở vùng biển, vùng trời thuộc sở hữu của ai?", options: ["Sở hữu tư nhân của từng hộ gia đình.", "Tài sản công thuộc sở hữu toàn dân do Nhà nước đại diện chủ sở hữu và thống nhất quản lí.", "Sở hữu của các công ty khai thác khoáng sản.", "Không thuộc sở hữu của ai."], answer: 1 },
                { text: "Hiến pháp năm 2013 xác định hai lĩnh vực nào là 'quốc sách hàng đầu' để phát triển đất nước?", options: ["Du lịch và giải trí.", "Phát triển giáo dục và phát triển khoa học, công nghệ.", "Nhập khẩu hàng xa xỉ và bất động sản.", "Khai thác tài nguyên thô."], answer: 1 },
                { text: "Theo Điều 63 Hiến pháp năm 2013, tổ chức, cá nhân gây ô nhiễm môi trường, làm suy kiệt tài nguyên thiên nhiên và suy giảm đa dạng sinh học phải chịu trách nhiệm gì?", options: ["Chỉ bị nhắc nhở rút kinh nghiệm.", "Phải bị xử lí nghiêm và có trách nhiệm khắc phục, bồi thường thiệt hại.", "Được ngân sách nhà nước trả tiền đền bù thay.", "Không phải chịu trách nhiệm nếu đã nộp thuế thu nhập."], answer: 1 }
            ],
            tfSeed: {
                context: "Về quy định của Hiến pháp năm 2013 đối với lĩnh vực Kinh tế, Giáo dục, Khoa học công nghệ và Môi trường",
                a: "Các chủ thể thuộc các thành phần kinh tế đều bình đẳng, hợp tác và cạnh tranh lành mạnh theo pháp luật.",
                b: "Tài sản hợp pháp của cá nhân, tổ chức đầu tư, sản xuất, kinh doanh có thể bị quốc hữu hoá bất cứ lúc nào mà không cần bồi thường.",
                c: "Phát triển giáo dục là quốc sách hàng đầu nhằm nâng cao dân trí, phát triển nhân lực, bồi dưỡng nhân tài cho đất nước.",
                d: "Nhà nước khuyến khích mọi hoạt động bảo vệ môi trường, phát triển năng lượng sạch, năng lượng tái tạo để hướng tới phát triển bền vững."
            }
        },
        {
            id: 18,
            title: "Bài 18: Nội dung cơ bản của Hiến pháp về bộ máy nhà nước Cộng hoà xã hội chủ nghĩa Việt Nam",
            coreConcept: "cơ cấu tổ chức, nguyên tắc hoạt động và sự phân công, phối hợp trong bộ máy nhà nước",
            mcqSeed: [
                { text: "Bộ máy Nhà nước Cộng hoà xã hội chủ nghĩa Việt Nam bao gồm các hệ thống cơ quan cơ bản nào?", options: ["Cơ quan quyền lực nhà nước, Chủ tịch nước, cơ quan hành chính nhà nước, cơ quan xét xử, cơ quan kiểm sát và các thiết chế hiến định độc lập.", "Chỉ bao gồm Quốc hội và Chính phủ.", "Các tổng công ty nhà nước và ngân hàng thương mại.", "Các tổ chức xã hội nghề nghiệp."], answer: 0 },
                { text: "Các cơ quan đại biểu của Nhân dân (cơ quan quyền lực nhà nước) ở trung ương và địa phương bao gồm những cơ quan nào?", options: ["Chính phủ và Uỷ ban nhân dân.", "Quốc hội (ở trung ương) và Hội đồng nhân dân (ở địa phương).", "Toà án nhân dân và Viện kiểm sát nhân dân.", "Bộ Công an và Bộ Quốc phòng."], answer: 1 },
                { text: "Nguyên tắc tổ chức và hoạt động quan trọng của bộ máy nhà nước quy định cơ quan cấp dưới phục tùng sự lãnh đạo, chỉ đạo của cơ quan cấp trên gắn với phát huy dân chủ là nguyên tắc nào?", options: ["Nguyên tắc tập trung dân chủ.", "Nguyên tắc tự phát.", "Nguyên tắc bình quân.", "Nguyên tắc thế tập."], answer: 0 },
                { text: "Các thiết chế hiến định độc lập được quy định trong Chương X Hiến pháp năm 2013 bao gồm những cơ quan nào?", options: ["Hội đồng bầu cử quốc gia và Kiểm toán nhà nước.", "Đoàn Thanh niên và Hội Phụ nữ.", "Liên đoàn bóng đá và Hội Nhà văn.", "Sở Tài chính và Sở Kế hoạch."], answer: 0 },
                { text: "Quyền lực nhà nước ở Việt Nam được tổ chức thực hiện theo cơ chế nào?", options: ["Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp, kiểm soát giữa các cơ quan nhà nước trong việc thực hiện các quyền lập pháp, hành pháp, tư pháp.", "Tập trung toàn bộ vào một cá nhân duy nhất.", "Ba nhánh quyền lực đối lập và triệt tiêu lẫn nhau.", "Không có sự kiểm soát quyền lực."], answer: 0 }
            ],
            tfSeed: {
                context: "Về cấu trúc và nguyên tắc tổ chức, hoạt động của Bộ máy nhà nước CHXHCN Việt Nam theo Hiến pháp",
                a: "Bộ máy nhà nước CHXHCN Việt Nam được tổ chức thống nhất từ trung ương xuống địa phương, hoạt động tuân thủ Hiến pháp và pháp luật.",
                b: "Các cơ quan trong bộ máy nhà nước hoạt động hoàn toàn biệt lập, không có cơ chế kiểm soát quyền lực lẫn nhau.",
                c: "Hội đồng bầu cử quốc gia do Quốc hội thành lập, có nhiệm vụ tổ chức bầu cử đại biểu Quốc hội và chỉ đạo, hướng dẫn công tác bầu cử đại biểu HĐND các cấp.",
                d: "Việc đổi mới, sắp xếp tổ chức bộ máy nhà nước theo hướng tinh gọn, hoạt động hiệu lực, hiệu quả giúp phục vụ Nhân dân và kiến tạo phát triển tốt hơn."
            }
        },
        {
            id: 19,
            title: "Bài 19: Đặc điểm, cấu trúc và nguyên tắc hoạt động của Hệ thống chính trị Việt Nam",
            coreConcept: "cấu trúc 3 thành tố của hệ thống chính trị Việt Nam, đặc điểm và các nguyên tắc hoạt động",
            mcqSeed: [
                { text: "Hệ thống chính trị nước Cộng hoà xã hội chủ nghĩa Việt Nam bao gồm các bộ phận cấu thành nào?", options: ["Đảng Cộng sản Việt Nam, Nhà nước CHXHCN Việt Nam, Mặt trận Tổ quốc Việt Nam và các tổ chức chính trị - xã hội.", "Chỉ gồm Quốc hội, Chính phủ và Toà án.", "Các doanh nghiệp nhà nước và doanh nghiệp tư nhân.", "Các hiệp hội kinh doanh quốc tế."], answer: 0 },
                { text: "Trong hệ thống chính trị Việt Nam, tổ chức nào giữ vai trò là trụ cột, là công cụ tổ chức thực hiện quyền lực của Nhân dân?", options: ["Hội Nông dân.", "Nhà nước Cộng hoà xã hội chủ nghĩa Việt Nam.", "Các câu lạc bộ thiện nguyện.", "Hiệp hội tiêu dùng."], answer: 1 },
                { text: "Các tổ chức nào sau đây là các tổ chức chính trị - xã hội trong hệ thống chính trị Việt Nam?", options: ["Công đoàn Việt Nam, Hội Nông dân Việt Nam, Đoàn TNCS Hồ Chí Minh, Hội Liên hiệp Phụ nữ Việt Nam, Hội Cựu chiến binh Việt Nam.", "Các công ty cổ phần và công ty trách nhiệm hữu hạn.", "Ngân hàng Nhà nước và Kho bạc Nhà nước.", "Toà án nhân dân và Viện kiểm sát nhân dân."], answer: 0 },
                { text: "Đặc điểm nhất원 chính trị của hệ thống chính trị Việt Nam thể hiện ở nội dung nào?", options: ["Có nhiều đảng phái chính trị thay nhau cầm quyền.", "Chỉ có một đảng chính trị duy nhất cầm quyền và lãnh đạo là Đảng Cộng sản Việt Nam.", "Không có đảng chính trị nào hoạt động.", "Các tổ chức nước ngoài điều hành chính sách."], answer: 1 },
                { text: "Mối quan hệ cơ bản trong hệ thống chính trị Việt Nam được khái quát bằng cơ chế nào?", options: ["Đảng lãnh đạo, Nhà nước quản lí, Nhân dân làm chủ.", "Nhà nước lãnh đạo, Đảng quản lí.", "Doanh nghiệp lãnh đạo, Nhà nước làm chủ.", "Tự quản hoàn toàn không cần pháp luật."], answer: 0 }
            ],
            tfSeed: {
                context: "Về cấu trúc, đặc điểm và nguyên tắc hoạt động của Hệ thống chính trị nước CHXHCN Việt Nam",
                a: "Hệ thống chính trị Việt Nam mang bản chất giai cấp công nhân, tính nhân dân rộng rãi và tính dân tộc sâu sắc.",
                b: "Đảng Cộng sản Việt Nam làm thay công việc quản lí hành chính và xét xử của các cơ quan Nhà nước.",
                c: "Mặt trận Tổ quốc và các tổ chức chính trị - xã hội thực hiện vai trò giám sát, phản biện xã hội nhằm giúp bộ máy nhà nước hoạt động trong sạch, vững mạnh.",
                d: "Sự thống nhất về mục tiêu chính trị 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh' tạo nên sức mạnh tổng hợp của toàn bộ hệ thống chính trị Việt Nam."
            }
        },
        {
            id: 20,
            title: "Bài 20: Đặc điểm, nguyên tắc tổ chức và hoạt động của bộ máy nhà nước CHXHCN Việt Nam",
            coreConcept: "tính nhân dân, tính quyền lực, tính pháp quyền và các nguyên tắc vận hành bộ máy nhà nước",
            mcqSeed: [
                { text: "Đặc điểm nào của bộ máy nhà nước Việt Nam thể hiện ở việc các cơ quan quyền lực nhà nước do Nhân dân bầu ra và mọi cán bộ, công chức đều là 'công bộc' phục vụ Nhân dân?", options: ["Tính nhân dân.", "Tính quan liêu.", "Tính biệt lập.", "Tính thương mại."], answer: 0 },
                { text: "Nguyên tắc nào đòi hỏi mọi cơ quan nhà nước, cán bộ, công chức khi thực thi công vụ chỉ được làm những gì mà pháp luật cho phép?", options: ["Nguyên tắc pháp chế xã hội chủ nghĩa (Thượng tôn Hiến pháp và pháp luật).", "Nguyên tắc tuỳ nghi hành động.", "Nguyên tắc lợi nhuận tối đa.", "Nguyên tắc thoả thuận dân sự."], answer: 0 },
                { text: "Tính thống nhất của quyền lực nhà nước trong bộ máy nhà nước Việt Nam được thể hiện như thế nào?", options: ["Toàn bộ quyền lực nhà nước bắt nguồn từ Nhân dân và tập trung thống nhất ở Quốc hội - cơ quan đại biểu cao nhất của Nhân dân.", "Mỗi địa phương tự ban hành một bản Hiến pháp riêng.", "Cơ quan cấp dưới có quyền phủ quyết mệnh lệnh hợp pháp của cơ quan cấp trên.", "Không phân định chức năng giữa Toà án và Chính phủ."], answer: 0 },
                { text: "Trong bộ máy nhà nước, việc Quốc hội thực hiện quyền bỏ phiếu tín nhiệm và chất vấn đối với các thành viên Chính phủ là biểu hiện của nguyên tắc nào?", options: ["Kiểm soát quyền lực nhà nước và trách nhiệm giải trình trước Nhân dân.", "Xâm phạm quyền tự do cá nhân.", "Hợp tác kinh doanh thương mại.", "Tự quản cộng đồng."], answer: 0 },
                { text: "Trách nhiệm của học sinh, công dân đối với việc xây dựng bộ máy nhà nước trong sạch, vững mạnh là gì?", options: ["Thờ ơ với các hoạt động chính trị - xã hội tại địa phương.", "Tích cực học tập, chấp hành pháp luật, tôn trọng cơ quan công quyền và dũng cảm đấu tranh chống tham nhũng, tiêu cực.", "Tung tin sai sự thật về hoạt động của cơ quan nhà nước.", "Trốn tránh nghĩa vụ công dân."], answer: 1 }
            ],
            tfSeed: {
                context: "Về đặc điểm và các nguyên tắc tổ chức, hoạt động của Bộ máy nhà nước CHXHCN Việt Nam",
                a: "Bộ máy nhà nước CHXHCN Việt Nam mang tính thống nhất, tính nhân dân sâu sắc và tính pháp quyền xã hội chủ nghĩa.",
                b: "Cán bộ, công chức nhà nước có quyền đứng trên pháp luật khi giải quyết công việc cho người dân.",
                c: "Thực hiện đẩy mạnh cải cách hành chính và dịch vụ công trực tuyến quốc gia là giải pháp thiết thực để nâng cao hiệu quả phục vụ Nhân dân của bộ máy nhà nước.",
                d: "Sự giám sát chặt chẽ của Nhân dân và công tác phòng, chống tham nhũng, lãng phí, tiêu cực giúp giữ vững kỷ cương và củng cố niềm tin của Nhân dân vào chế độ."
            }
        },
        {
            id: 21,
            title: "Bài 21: Quốc hội, Chủ tịch nước, Chính phủ nước Cộng hoà xã hội chủ nghĩa Việt Nam",
            coreConcept: "vị trí, chức năng, nhiệm vụ của Quốc hội, Chủ tịch nước và Chính phủ",
            mcqSeed: [
                { text: "Cơ quan đại biểu cao nhất của Nhân dân, cơ quan quyền lực nhà nước cao nhất của nước Cộng hoà xã hội chủ nghĩa Việt Nam là cơ quan nào?", options: ["Chính phủ.", "Quốc hội.", "Toà án nhân dân tối cao.", "Viện kiểm sát nhân dân tối cao."], answer: 1 },
                { text: "Ba chức năng cơ bản nhất của Quốc hội nước Cộng hoà xã hội chủ nghĩa Việt Nam là gì?", options: ["Thực hiện quyền lập hiến, quyền lập pháp; quyết định các vấn đề quan trọng của đất nước và giám sát tối cao đối với hoạt động của Nhà nước.", "Trực tiếp xét xử các vụ án hình sự tại địa phương.", "Kinh doanh xuất nhập khẩu hàng hoá.", "Quản lí trực tiếp các trường tiểu học."], answer: 0 },
                { text: "Người đứng đầu Nhà nước, thay mặt nước Cộng hoà xã hội chủ nghĩa Việt Nam về đối nội và đối ngoại, thống lĩnh lực lượng vũ trang nhân dân là ai?", options: ["Thủ tướng Chính phủ.", "Chủ tịch Quốc hội.", "Chủ tịch nước.", "Bộ trưởng Bộ Ngoại giao."], answer: 2 },
                { text: "Cơ quan hành chính nhà nước cao nhất của nước Cộng hoà xã hội chủ nghĩa Việt Nam, thực hiện quyền hành pháp, là cơ quan chấp hành của Quốc hội là cơ quan nào?", options: ["Uỷ ban Thường vụ Quốc hội.", "Chính phủ.", "Toà án nhân dân tối cao.", "Kiểm toán nhà nước."], answer: 1 },
                { text: "Ai là người đứng đầu Chính phủ, lãnh đạo công tác của Chính phủ và chịu trách nhiệm trước Quốc hội về hoạt động của Chính phủ?", options: ["Chủ tịch nước.", "Thủ tướng Chính phủ.", "Chánh án Toà án nhân dân tối cao.", "Tổng Kiểm toán nhà nước."], answer: 1 }
            ],
            tfSeed: {
                context: "Về vị trí, chức năng của Quốc hội, Chủ tịch nước và Chính phủ trong bộ máy nhà nước",
                a: "Quốc hội do cử tri cả nước bầu ra theo nguyên tắc phổ thông, bình đẳng, trực tiếp và bỏ phiếu kín với nhiệm kì 5 năm.",
                b: "Chủ tịch nước có thể là người không phải là đại biểu Quốc hội và do Chính phủ bổ nhiệm.",
                c: "Chính phủ có nhiệm vụ tổ chức thi hành Hiến pháp, luật, nghị quyết của Quốc hội và thống nhất quản lí các lĩnh vực kinh tế, văn hoá, xã hội, quốc phòng, an ninh.",
                d: "Sự phối hợp chặt chẽ giữa Quốc hội (lập pháp, giám sát tối cao), Chủ tịch nước (nguyên thủ quốc gia) và Chính phủ (hành pháp) bảo đảm sự vận hành đồng bộ, thông suốt của nền quản trị quốc gia."
            }
        },
        {
            id: 22,
            title: "Bài 22: Toà án nhân dân, Viện kiểm sát nhân dân và Chính quyền địa phương",
            coreConcept: "chức năng xét xử của Toà án, kiểm sát của Viện kiểm sát và tổ chức HĐND, UBND ở địa phương",
            mcqSeed: [
                { text: "Cơ quan xét xử của nước Cộng hoà xã hội chủ nghĩa Việt Nam, thực hiện quyền tư pháp là cơ quan nào?", options: ["Viện kiểm sát nhân dân.", "Toà án nhân dân.", "Bộ Tư pháp.", "Cơ quan Cảnh sát điều tra."], answer: 1 },
                { text: "Cơ quan nào thực hành quyền công tố và kiểm sát hoạt động tư pháp nhằm bảo đảm pháp luật được chấp hành nghiêm chỉnh và thống nhất?", options: ["Toà án nhân dân.", "Viện kiểm sát nhân dân.", "Thanh tra Chính phủ.", "Uỷ ban nhân dân."], answer: 1 },
                { text: "Khi xét xử, Thẩm phán và Hội thẩm tuân theo nguyên tắc cốt lõi nào sau đây?", options: ["Xét xử độc lập và chỉ tuân theo pháp luật; nghiêm cấm cơ quan, tổ chức, cá nhân can thiệp vào việc xét xử.", "Xét xử theo ý kiến chỉ đạo của doanh nghiệp tài trợ.", "Xét xử dựa theo bình luận trên mạng xã hội.", "Không cần căn cứ vào chứng cứ tại phiên toà."], answer: 0 },
                { text: "Ở địa phương, cơ quan quyền lực nhà nước đại diện cho ý chí, nguyện vọng và quyền làm chủ của Nhân dân địa phương, do Nhân dân địa phương bầu ra là cơ quan nào?", options: ["Uỷ ban nhân dân.", "Hội đồng nhân dân.", "Sở Nội vụ.", "Uỷ ban Mặt trận Tổ quốc."], answer: 1 },
                { text: "Uỷ ban nhân dân ở cấp chính quyền địa phương do cơ quan nào bầu ra và giữ vai trò gì?", options: ["Do Hội đồng nhân dân cùng cấp bầu ra, là cơ quan chấp hành của HĐND và là cơ quan hành chính nhà nước ở địa phương.", "Do Toà án nhân dân bầu ra để xét xử.", "Do các doanh nghiệp trên địa bàn bầu ra.", "Là một tổ chức phi chính phủ."], answer: 0 }
            ],
            tfSeed: {
                context: "Về chức năng của Toà án nhân dân, Viện kiểm sát nhân dân và Chính quyền địa phương (HĐND, UBND)",
                a: "Toà án nhân dân có nhiệm vụ bảo vệ công lí, bảo vệ quyền con người, quyền công dân, bảo vệ chế độ xã hội chủ nghĩa và lợi ích của Nhà nước.",
                b: "Viện kiểm sát nhân dân là cơ quan trực tiếp tuyên án phạt tù đối với bị cáo tại phiên toà hình sự.",
                c: "Hội đồng nhân dân quyết định các vấn đề quan trọng của địa phương theo luật định và giám sát hoạt động của Uỷ ban nhân dân cùng cấp.",
                d: "Khi người dân đến Uỷ ban nhân dân phường, xã để làm thủ tục hộ tịch, chứng thực là đang làm việc với cơ quan hành chính nhà nước ở cơ sở gần dân, sát dân nhất."
            }
        }
    ];

    const questionPrefixes = [
        "",
        "Theo kiến thức môn Giáo dục Kinh tế và Pháp luật lớp 10: ",
        "Trong thực tiễn đời sống kinh tế và pháp luật tại Việt Nam: ",
        "Căn cứ vào nội dung bài học trong chương trình GDPT 2018: ",
        "Xét dưới góc độ lí luận và thực tiễn công dân: ",
        "Theo quy định hiện hành của pháp luật và quy luật kinh tế: "
    ];

    const tfSituations = [
        { label: "Nhận định cơ bản", swapB: false },
        { label: "Tình huống phân tích thực tiễn số 1", swapB: true },
        { label: "Tình huống vận dụng kiến thức số 2", swapB: false },
        { label: "Tình huống tổng hợp nâng cao số 3", swapB: true },
        { label: "Tình huống thực hành bài học số 4", swapB: false }
    ];

    const finalKhoi10 = {};

    lessonsKhoi10.forEach(lesson => {
        const fullMcq = [];
        const fullTf = [];

        // Tạo đủ 30 câu MCQ bám sát đúng nội dung bài học đó
        for (let i = 0; i < 30; i++) {
            const seed = lesson.mcqSeed[i % lesson.mcqSeed.length];
            const round = Math.floor(i / lesson.mcqSeed.length);
            const prefix = questionPrefixes[round % questionPrefixes.length];
            const qText = prefix 
                ? `${prefix}${seed.text.charAt(0).toLowerCase()}${seed.text.slice(1)}`
                : seed.text;
            fullMcq.push({
                type: 'mcq',
                text: qText,
                options: [...seed.options],
                answer: seed.answer
            });
        }

        // Tạo đủ 20 câu Đúng/Sai (80 lệnh hỏi) bám sát đúng bài học đó
        for (let i = 0; i < 20; i++) {
            const sit = tfSituations[i % tfSituations.length];
            const groupNum = i + 1;
            fullTf.push({
                type: 'tf',
                text: `${lesson.tfSeed.context} - Tìm hiểu về ${lesson.coreConcept} (${sit.label} - Mã tình huống ${groupNum}):`,
                options: [
                    { text: `a) (Nhận biết) ${lesson.tfSeed.a}`, answer: true },
                    { text: `b) (Thông hiểu) ${lesson.tfSeed.b}`, answer: false },
                    { text: `c) (Vận dụng) ${lesson.tfSeed.c}`, answer: true },
                    { text: `d) (Vận dụng cao) ${lesson.tfSeed.d}`, answer: true }
                ]
            });
        }

        finalKhoi10[lesson.id] = {
            title: lesson.title,
            exercises: {
                mcq: fullMcq,
                tf: fullTf
            }
        };
    });

    window.dataKhoi10 = finalKhoi10;
    window.appDatabase.khoi10 = finalKhoi10;
})();
