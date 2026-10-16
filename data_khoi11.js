/* =========================================================================
   DỮ LIỆU GDKT&PL KHỐI 11 - CHIA THEO 21 ĐƠN VỊ BÀI HỌC (Sách Kết nối tri thức)
   Mỗi bài gồm: 30 câu Trắc nghiệm MCQ + 20 câu Đúng/Sai + Kiểm tra 28 câu chuẩn
   Bản quyền thuộc về số ĐT: 0943.930.787
========================================================================= */

(function() {
    window.appDatabase = window.appDatabase || { khoi10: {}, khoi11: {}, khoi12: {}, mocktest: {} };

    const lessonsKhoi11 = [
        {
            id: 1,
            title: "Bài 1: Cạnh tranh trong nền kinh tế thị trường",
            coreConcept: "khái niệm, nguyên nhân, vai trò của cạnh tranh và phê phán cạnh tranh không lành mạnh",
            mcqSeed: [
                { text: "Sự ganh đua, đấu tranh giữa các chủ thể kinh tế nhằm giành những điều kiện thuận lợi trong sản xuất, mua bán, tiêu thụ hàng hoá để thu lợi nhuận cao nhất gọi là gì?", options: ["Độc quyền nhà nước.", "Cạnh tranh kinh tế.", "Hợp tác từ thiện.", "Cung - cầu."], answer: 1 },
                { text: "Nguyên nhân dẫn đến sự tồn tại tất yếu của cạnh tranh trong nền kinh tế hàng hoá là gì?", options: ["Do sự tồn tại nhiều chủ sở hữu với tư cách là những đơn vị kinh tế độc lập và có điều kiện sản xuất, lợi ích khác nhau.", "Do Nhà nước bắt buộc các doanh nghiệp phải ghét bỏ nhau.", "Do lượng hàng hoá trên thị trường luôn bằng không.", "Do người tiêu dùng không có nhu cầu mua sắm."], answer: 0 },
                { text: "Vai trò tích cực của cạnh tranh lành mạnh trong nền kinh tế là gì?", options: ["Tạo động lực thúc đẩy lực lượng sản xuất phát triển, nâng cao chất lượng hàng hoá và tối ưu hoá nguồn lực xã hội.", "Làm cho tất cả doanh nghiệp đều bị phá sản.", "Tăng giá bán hàng hoá lên mức cao nhất cho người tiêu dùng.", "Tiêu diệt hoàn toàn khoa học kĩ thuật."], answer: 0 },
                { text: "Hành vi nào sau đây là biểu hiện của cạnh tranh không lành mạnh bị pháp luật nghiêm cấm?", options: ["Đầu tư công nghệ mới để giảm giá thành sản phẩm.", "Làm hàng giả, xâm phạm quyền sở hữu trí tuệ và tung tin đồn thất thiệt bôi nhọ đối thủ.", "Chăm sóc khách hàng chu đáo và bảo hành dài hạn.", "Đào tạo nâng cao tay nghề cho công nhân."], answer: 1 },
                { text: "Khi các doanh nghiệp cạnh tranh lành mạnh với nhau, chủ thể nào được hưởng lợi trực tiếp từ việc hàng hoá đa dạng, chất lượng tốt và giá cả hợp lí?", options: ["Chỉ có các đối thủ làm hàng giả.", "Người tiêu dùng và toàn xã hội.", "Chỉ có các tổ chức buôn lậu.", "Không ai được hưởng lợi."], answer: 1 }
            ],
            tfSeed: {
                context: "Về Cạnh tranh trong nền kinh tế thị trường",
                a: "Cạnh tranh là quy luật kinh tế khách quan và là động lực thúc đẩy sự phát triển của nền kinh tế thị trường.",
                b: "Mọi thủ đoạn cạnh tranh như xả thải trộm ra môi trường, trốn thuế để hạ giá bán đều được coi là cạnh tranh lành mạnh.",
                c: "Để giành ưu thế trong cạnh tranh lành mạnh, doanh nghiệp cần tập trung đổi mới công nghệ, nâng cao năng suất lao động và giữ chữ tín với khách hàng.",
                d: "Nhà nước sử dụng Luật Cạnh tranh và các công cụ quản lí vĩ mô để bảo vệ môi trường cạnh tranh bình đẳng, xử lí nghiêm các hành vi độc quyền thao túng và cạnh tranh không lành mạnh."
            }
        },
        {
            id: 2,
            title: "Bài 2: Cung - cầu trong nền kinh tế thị trường",
            coreConcept: "khái niệm cung, cầu, các nhân tố ảnh hưởng và mối quan hệ cung - cầu với giá cả",
            mcqSeed: [
                { text: "Lượng hàng hoá, dịch vụ mà người tiêu dùng sẵn sàng mua và có khả năng thanh toán ở các mức giá khác nhau trong một thời gian nhất định được gọi là gì?", options: ["Cung thị trường.", "Cầu thị trường.", "Nhu cầu tự nhiên.", "Dự trữ quốc gia."], answer: 1 },
                { text: "Lượng hàng hoá, dịch vụ hiện có trên thị trường hoặc có khả năng chuẩn bị đưa ra thị trường ở các mức giá khác nhau trong một thời kì nhất định gọi là gì?", options: ["Cầu thị trường.", "Cung thị trường.", "Sức mua xã hội.", "Thặng dư tiêu dùng."], answer: 1 },
                { text: "Trong nền kinh tế thị trường, khi lượng cung nhỏ hơn lượng cầu (Cung < Cầu) thì giá cả thị trường sẽ biến động như thế nào?", options: ["Giá cả giảm xuống thấp hơn giá trị.", "Giá cả có xu hướng tăng lên cao hơn giá trị.", "Giá cả giữ nguyên không đổi.", "Giá cả bằng không."], answer: 1 },
                { text: "Khi giá cả của một mặt hàng trên thị trường tăng lên (các yếu tố khác không đổi) thì lượng cung và lượng cầu sẽ thay đổi theo chiều hướng nào?", options: ["Lượng cung tăng lên, lượng cầu giảm xuống.", "Lượng cung giảm xuống, lượng cầu tăng lên.", "Cả cung và cầu đều giảm về 0.", "Cả cung và cầu đều giữ nguyên."], answer: 0 },
                { text: "Khi vận dụng quan hệ cung - cầu, người tiêu dùng thông thái thường lựa chọn cách mua sắm như thế nào?", options: ["Đổ xô đi mua tích trữ khi hàng hoá đang khan hiếm và sốt giá ảo.", "Lựa chọn mua hàng hoá vào thời điểm cung dồi dào, giá cả hợp lí hoặc chuyển sang sản phẩm thay thế khi giá tăng quá cao.", "Mua bất chấp giá cả không cần quan tâm chất lượng.", "Chỉ mua hàng khi lượng cung bằng không."], answer: 1 }
            ],
            tfSeed: {
                context: "Về quan hệ Cung - Cầu và sự vận dụng trong nền kinh tế thị trường",
                a: "Cung và cầu tác động qua lại lẫn nhau và trực tiếp quyết định sự biến động của giá cả thị trường.",
                b: "Mọi nhu cầu mong muốn của con người dù không có tiền thanh toán đều được tính là 'Cầu' trong kinh tế học.",
                c: "Nắm bắt nhu cầu mua sắm tăng cao vào dịp lễ Tết để chủ động chuẩn bị nguồn hàng từ sớm là cách doanh nghiệp vận dụng hiệu quả quy luật cung - cầu.",
                d: "Khi thị trường xảy ra mất cân đối cung - cầu nghiêm trọng đối với mặt hàng thiết yếu (như xăng dầu, lương thực), Nhà nước can thiệp thông qua điều tiết vĩ mô và quỹ bình ổn để ổn định đời sống nhân dân."
            }
        },
        {
            id: 3,
            title: "Bài 3: Lạm phát",
            coreConcept: "khái niệm, các mức độ lạm phát (vừa phải, phi mã, siêu lạm phát), nguyên nhân và hậu quả",
            mcqSeed: [
                { text: "Sự tăng mức giá chung các hàng hoá, dịch vụ của nền kinh tế một cách liên tục trong một thời gian nhất định được gọi là gì?", options: ["Giảm phát.", "Lạm phát.", "Thất nghiệp.", "Tăng trưởng xanh."], answer: 1 },
                { text: "Lạm phát vừa phải (một con số, dưới 10%/năm) có tác động như thế nào đối với nền kinh tế?", options: ["Làm sụp đổ hoàn toàn hệ thống tiền tệ.", "Tạo tâm lí ổn định, kích thích đầu tư và thúc đẩy sản xuất phát triển.", "Làm đồng tiền mất giá hoàn toàn như giấy lộn.", "Khiến mọi doanh nghiệp phải đóng cửa."], answer: 1 },
                { text: "Khi mức giá chung của nền kinh tế tăng từ hai con số trở lên (từ 10% đến dưới 1000%/năm), nền kinh tế đang ở mức độ lạm phát nào?", options: ["Lạm phát vừa phải.", "Lạm phát phi mã.", "Siêu lạm phát.", "Giảm phát."], answer: 1 },
                { text: "Hiện tượng lạm phát xảy ra do giá nguyên nhiên vật liệu đầu vào (xăng dầu, điện, thép) và chi phí tiền lương tăng cao đẩy giá thành sản phẩm tăng lên được gọi là gì?", options: ["Lạm phát cầu kéo.", "Lạm phát chi phí đẩy.", "Lạm phát tiền tệ.", "Lạm phát xuất khẩu."], answer: 1 },
                { text: "Để kiềm chế lạm phát tăng cao, Nhà nước thường sử dụng biện pháp điều tiết vĩ mô nào sau đây?", options: ["In thêm thật nhiều tiền mặt phát cho người dân.", "Thực hiện chính sách tiền tệ chặt chẽ (tăng lãi suất, kiểm soát tín dụng), cắt giảm chi tiêu công kém hiệu quả và thúc đẩy sản xuất hàng hoá.", "Cấm hoàn toàn hoạt động sản xuất nông nghiệp.", "Tăng thuế giá trị gia tăng của các mặt hàng thiết yếu lên 50%."], answer: 1 }
            ],
            tfSeed: {
                context: "Về hiện tượng Lạm phát và vai trò kiểm soát lạm phát của Nhà nước",
                a: "Dựa vào mức độ tăng giá, lạm phát được chia thành 3 loại: lạm phát vừa phải, lạm phát phi mã và siêu lạm phát.",
                b: "Khi lạm phát tăng cao ở mức phi mã, những người sống bằng tiền lương cố định hoặc gửi tiết kiệm tiền mặt sẽ có lợi nhất.",
                c: "Tổng cầu của xã hội tăng quá nhanh vượt quá năng lực cung ứng của nền kinh tế là nguyên nhân trực tiếp gây ra lạm phát cầu kéo.",
                d: "Việc Quốc hội và Chính phủ Việt Nam kiên định mục tiêu kiểm soát lạm phát dưới mức mục tiêu hằng năm giúp giữ vững ổn định kinh tế vĩ mô và bảo đảm giá trị thực của thu nhập người dân."
            }
        },
        {
            id: 4,
            title: "Bài 4: Thất nghiệp",
            coreConcept: "khái niệm thất nghiệp, các loại hình thất nghiệp (tạm thời, cơ cấu, chu kì) và giải pháp khắc phục",
            mcqSeed: [
                { text: "Tình trạng người lao động trong độ tuổi lao động, có khả năng lao động, mong muốn làm việc nhưng chưa tìm được việc làm gọi là gì?", options: ["Lạm phát.", "Thất nghiệp.", "Nghỉ hưu.", "Mất sức lao động."], answer: 1 },
                { text: "Loại hình thất nghiệp xuất hiện gắn liền với sự biến động cơ cấu kinh tế và sự thay đổi của công nghệ dẫn đến yêu cầu kĩ năng lao động mới gọi là gì?", options: ["Thất nghiệp tạm thời.", "Thất nghiệp cơ cấu.", "Thất nghiệp chu kì.", "Thất nghiệp thời vụ."], answer: 1 },
                { text: "Thất nghiệp chu kì thường tăng cao vào giai đoạn nào của chu kì kinh tế?", options: ["Giai đoạn kinh tế hưng thịnh, bùng nổ.", "Giai đoạn nền kinh tế rơi vào suy thoái, khủng hoảng.", "Giai đoạn thiếu hụt lao động.", "Giai đoạn mùa màng bội thu."], answer: 1 },
                { text: "Theo tính chất ý chí của người lao động, khi một người từ bỏ công việc hiện tại vì mức lương thấp để chờ tìm công việc khác ưng ý hơn thì gọi là gì?", options: ["Thất nghiệp không tự nguyện.", "Thất nghiệp tự nguyện.", "Thất nghiệp vĩnh viễn.", "Vi phạm pháp luật lao động."], answer: 1 },
                { text: "Hậu quả tiêu cực của tình trạng thất nghiệp tăng cao đối với xã hội là gì?", options: ["Lãng phí nguồn lực lao động, giảm thu nhập, mức sống giảm sút và tiềm ẩn nguy cơ phát sinh tệ nạn xã hội.", "Làm tăng tốc độ tăng trưởng GDP lên mức tối đa.", "Giúp ngân sách nhà nước tiết kiệm được quỹ trợ cấp.", "Nâng cao tay nghề tự động cho người lao động."], answer: 0 }
            ],
            tfSeed: {
                context: "Về hiện tượng Thất nghiệp và các giải pháp giải quyết việc làm",
                a: "Xét theo nguyên nhân, thất nghiệp được chia thành thất nghiệp tạm thời, thất nghiệp cơ cấu và thất nghiệp chu kì.",
                b: "Khi dây chuyền tự động hoá và trí tuệ nhân tạo (AI) thay thế công nhân giản đơn, hiện tượng mất việc đó gọi là thất nghiệp thời vụ nông nghiệp.",
                c: "Chính sách Bảo hiểm thất nghiệp giúp hỗ trợ tài chính tạm thời và tư vấn, đào tạo lại nghề cho người lao động sớm quay lại thị trường việc làm.",
                d: "Đối với bản thân mỗi công dân, việc chủ động học tập suốt đời, trau dồi kĩ năng số và ngoại ngữ là giải pháp chủ động nhất để phòng tránh nguy cơ thất nghiệp cơ cấu."
            }
        },
        {
            id: 5,
            title: "Bài 5: Thị trường lao động và việc làm",
            coreConcept: "khái niệm thị trường lao động, việc làm và xu hướng tuyển dụng lao động hiện đại",
            mcqSeed: [
                { text: "Hoạt động lao động tạo ra thu nhập và không bị pháp luật cấm được gọi là gì?", options: ["Thất nghiệp.", "Việc làm.", "Giải trí.", "Nghỉ dưỡng."], answer: 1 },
                { text: "Nơi diễn ra các quan hệ thoả thuận giữa người sử dụng lao động và người lao động về tiền lương, điều kiện làm việc trên cơ sở hợp đồng lao động gọi là gì?", options: ["Thị trường chứng khoán.", "Thị trường lao động.", "Thị trường bất động sản.", "Thị trường ngoại hối."], answer: 1 },
                { text: "Trong thị trường lao động, ai là bên cung ứng 'hàng hoá sức lao động'?", options: ["Người sử dụng lao động (doanh nghiệp).", "Người lao động.", "Cơ quan thuế.", "Khách hàng mua sản phẩm."], answer: 1 },
                { text: "Xu hướng chuyển dịch cơ cấu lao động tại Việt Nam trong quá trình công nghiệp hoá, hiện đại hoá diễn ra như thế nào?", options: ["Tăng tỉ trọng lao động nông nghiệp, giảm tỉ trọng lao động công nghiệp và dịch vụ.", "Giảm tỉ trọng lao động trong ngành nông - lâm - thuỷ sản, tăng tỉ trọng lao động trong ngành công nghiệp - xây dựng và dịch vụ.", "Tăng tỉ lệ lao động thủ công không qua đào tạo.", "Xoá bỏ hoàn toàn các ngành dịch vụ."], answer: 1 },
                { text: "Để thích ứng với thị trường lao động trong kỉ nguyên số, học sinh THPT cần chuẩn bị hành trang gì?", options: ["Chỉ học thuộc lòng lí thuyết mà không cần kĩ năng thực hành.", "Trang bị kiến thức nền tảng vững chắc, rèn luyện kĩ năng mềm, ngoại ngữ, công nghệ thông tin và thái độ làm việc chuyên nghiệp.", "Chờ đợi sự sắp xếp hoàn toàn từ gia đình.", "Chỉ chọn những nghề không cần đào tạo chuyên môn."], answer: 1 }
            ],
            tfSeed: {
                context: "Về Thị trường lao động, việc làm và định hướng nghề nghiệp cho thanh niên",
                a: "Khi cung lao động lớn hơn cầu lao động trên thị trường thì sự cạnh tranh tìm kiếm việc làm tăng lên và tỉ lệ thất nghiệp có xu hướng tăng.",
                b: "Mọi hoạt động mang lại nhiều tiền bạc bất kể pháp luật có cấm hay không đều được công nhận là việc làm hợp pháp.",
                c: "Sự phát triển của thị trường việc làm gắn với kinh tế số, kinh tế xanh mở ra nhiều cơ hội nghề nghiệp mới có thu nhập cao cho lao động trẻ có trình độ.",
                d: "Việc kết nối chặt chẽ giữa nhà trường - doanh nghiệp và hệ thống trung tâm dịch vụ việc làm giúp giải quyết bài toán 'thừa thầy thiếu thợ' và nâng cao chất lượng nguồn nhân lực quốc gia."
            }
        },
        {
            id: 6,
            title: "Bài 6: Ý tưởng, cơ hội kinh doanh và các năng lực cần thiết của người kinh doanh",
            coreConcept: "ý tưởng kinh doanh, cơ hội kinh doanh, phân tích SWOT và năng lực người kinh doanh",
            mcqSeed: [
                { text: "Những suy nghĩ, sáng kiến mang tính sáng tạo và khả thi nhằm tạo ra sản phẩm, dịch vụ đáp ứng nhu cầu thị trường để thu lợi nhuận được gọi là gì?", options: ["Ý tưởng kinh doanh.", "Kế hoạch nghỉ hưu.", "Quy định hành chính.", "Nghĩa vụ thuế."], answer: 0 },
                { text: "Sự xuất hiện những điều kiện, hoàn cảnh thuận lợi để chủ thể kinh doanh thực hiện được mục tiêu kinh doanh và thu lợi nhuận gọi là gì?", options: ["Rủi ro kinh doanh.", "Cơ hội kinh doanh.", "Khủng hoảng kinh tế.", "Lạm phát."], answer: 1 },
                { text: "Khi sử dụng công cụ SWOT để đánh giá cơ hội kinh doanh, hai yếu tố nào thuộc về môi trường nội bộ (bên trong) của chủ thể kinh doanh?", options: ["Cơ hội (O) và Thách thức (T).", "Điểm mạnh (S) và Điểm yếu (W).", "Lạm phát và Thất nghiệp.", "Thuế và Ngân sách."], answer: 1 },
                { text: "Trong mô hình phân tích SWOT, chữ 'O' (Opportunities) có nghĩa là gì?", options: ["Điểm mạnh.", "Điểm yếu.", "Cơ hội từ môi trường bên ngoài.", "Thách thức, nguy cơ."], answer: 2 },
                { text: "Năng lực nào sau đây là phẩm chất quan trọng hàng đầu của một người kinh doanh thành đạt?", options: ["Năng lực nắm bắt cơ hội, tổ chức quản lí, tư duy sáng tạo và kiên trì vượt khó.", "Tư duy bảo thủ, ngại đổi mới.", "Làm ăn chụp giật, thiếu trung thực.", "Không biết quản lí tài chính."], answer: 0 }
            ],
            tfSeed: {
                context: "Về Ý tưởng kinh doanh, Cơ hội kinh doanh và các năng lực cần thiết của người kinh doanh",
                a: "Một ý tưởng kinh doanh chỉ thực sự trở thành cơ hội kinh doanh tốt khi sản phẩm đó đáp ứng được nhu cầu có khả năng thanh toán của thị trường và có tính khả thi.",
                b: "Người kinh doanh chỉ cần có nhiều tiền vốn là chắc chắn thành công 100%, không cần trau dồi kiến thức chuyên môn hay kĩ năng quản trị.",
                c: "Phân tích kĩ 4 yếu tố Điểm mạnh (S) - Điểm yếu (W) - Cơ hội (O) - Thách thức (T) giúp nhà khởi nghiệp phát huy lợi thế cạnh tranh và hạn chế rủi ro thất bại.",
                d: "Trong bối cảnh hội nhập, người kinh doanh giỏi cần kết hợp tư duy đổi mới sáng tạo với việc tuân thủ pháp luật và trách nhiệm bảo vệ môi trường."
            }
        },
        {
            id: 7,
            title: "Bài 7: Đạo đức kinh doanh",
            coreConcept: "khái niệm, biểu hiện và vai trò của đạo đức kinh doanh",
            mcqSeed: [
                { text: "Tập hợp các nguyên tắc, chuẩn mực đạo đức cơ bản được biểu hiện cụ thể trong các lĩnh vực kinh doanh, có tác dụng điều chỉnh, đánh giá, hướng dẫn hành vi của các chủ thể trong kinh doanh gọi là gì?", options: ["Chiến thuật quảng cáo.", "Đạo đức kinh doanh.", "Quy luật cung cầu.", "Lợi tức tín dụng."], answer: 1 },
                { text: "Biểu hiện cốt lõi của đạo đức kinh doanh trong mối quan hệ giữa doanh nghiệp với khách hàng là gì?", options: ["Giữ chữ tín, trung thực về chất lượng, giá cả và đảm bảo an toàn cho người tiêu dùng.", "Quảng cáo thổi phồng công dụng sản phẩm như thuốc tiên.", "Đánh tráo nguyên liệu hết hạn sử dụng để giảm chi phí.", "Từ chối bảo hành khi sản phẩm bị lỗi kĩ thuật."], answer: 0 },
                { text: "Biểu hiện đạo đức kinh doanh của chủ doanh nghiệp đối với người lao động là gì?", options: ["Tôn trọng nhân phẩm, trả lương công bằng, đúng hạn và đảm bảo môi trường làm việc an toàn.", "Nợ lương và trốn đóng bảo hiểm xã hội của công nhân.", "Bắt công nhân làm việc trong môi trường độc hại không có đồ bảo hộ.", "Sa thải người lao động trái pháp luật."], answer: 0 },
                { text: "Đối với các đối thủ cạnh tranh trên thị trường, đạo đức kinh doanh đòi hỏi doanh nghiệp phải ứng xử như thế nào?", options: ["Cạnh tranh lành mạnh, công bằng, không dùng thủ đoạn xấu để hãm hại đối thủ.", "Thuê người tung tin giả làm sụt giảm cổ phiếu của đối thủ.", "Ăn cắp bí mật công nghệ của công ty bạn.", "Làm nhái bao bì thương hiệu nổi tiếng."], answer: 0 },
                { text: "Vai trò của việc thực hiện tốt đạo đức kinh doanh đối với sự phát triển của doanh nghiệp là gì?", options: ["Làm giảm uy tín của doanh nghiệp.", "Tạo dựng niềm tin vững chắc nơi khách hàng, nâng cao giá trị thương hiệu và giúp doanh nghiệp phát triển bền vững.", "Khiến doanh nghiệp không thể thu được lợi nhuận.", "Chỉ mang lại lợi ích cho đối thủ cạnh tranh."], answer: 1 }
            ],
            tfSeed: {
                context: "Về Đạo đức kinh doanh và ý nghĩa của việc giữ chữ Tín trong thương trường",
                a: "Đạo đức kinh doanh thể hiện qua sự trung thực, chữ tín, trách nhiệm, tôn trọng con người và gắn kết lợi ích doanh nghiệp với lợi ích xã hội.",
                b: "Trong kinh doanh hiện đại, mục tiêu duy nhất là lợi nhuận tối đa nên đạo đức kinh doanh chỉ là hình thức quảng cáo không cần thực hiện thật.",
                c: "Khi phát hiện lô sản phẩm có lỗi kĩ thuật nhỏ, việc doanh nghiệp chủ động thông báo thu hồi và đổi mới miễn phí cho khách hàng là hành động chuẩn mực về đạo đức kinh doanh.",
                d: "Thực hiện đạo đức kinh doanh gắn liền với thượng tôn pháp luật là nền tảng xây dựng văn hoá doanh nghiệp văn minh và nâng cao năng lực cạnh tranh quốc gia."
            }
        },
        {
            id: 8,
            title: "Bài 8: Văn hoá tiêu dùng",
            coreConcept: "khái niệm, đặc điểm văn hoá tiêu dùng Việt Nam và các biện pháp xây dựng văn hoá tiêu dùng",
            mcqSeed: [
                { text: "Những nét đẹp trong tập quán, thói quen, giá trị và chuẩn mực chi phối hành vi, cách thức ứng xử của người tiêu dùng trong quá trình mua sắm và sử dụng hàng hoá, dịch vụ gọi là gì?", options: ["Đạo đức sản xuất.", "Văn hoá tiêu dùng.", "Cơ chế phân phối.", "Chính sách tiền tệ."], answer: 1 },
                { text: "Hành vi nào sau đây thể hiện người tiêu dùng có văn hoá và thông thái?", options: ["Mua sắm theo tâm lí đám đông dù không có nhu cầu sử dụng.", "Lên kế hoạch mua sắm hợp lí với thu nhập, ưu tiên sản phẩm chất lượng, rõ nguồn gốc và thân thiện môi trường.", "Sử dụng hàng giả, hàng nhái để khoe mẽ hình thức.", "Lãng phí thức ăn tại các bữa tiệc buffet."], answer: 1 },
                { text: "Tiêu dùng các sản phẩm tiết kiệm năng lượng, có khả năng tái chế và hạn chế rác thải nhựa được gọi là xu hướng tiêu dùng gì?", options: ["Tiêu dùng xa xỉ.", "Tiêu dùng xanh (tiêu dùng bền vững).", "Tiêu dùng thụ động.", "Tiêu dùng lạc hậu."], answer: 1 },
                { text: "Đặc điểm nổi bật của văn hoá tiêu dùng Việt Nam hiện nay là sự kết hợp giữa những yếu tố nào?", options: ["Kế thừa giá trị truyền thống tốt đẹp (tiết kiệm, tự tôn dân tộc) với tiếp thu tinh hoa văn hoá tiêu dùng hiện đại, văn minh, số hoá.", "Bài trừ hoàn toàn các sản phẩm công nghệ mới.", "Chỉ tiêu dùng hàng ngoại nhập và quay lưng với hàng nội địa.", "Chi tiêu vượt quá khả năng tài chính cá nhân."], answer: 0 },
                { text: "Vai trò của văn hoá tiêu dùng đối với sự phát triển kinh tế - xã hội là gì?", options: ["Định hướng cho hoạt động sản xuất tạo ra các sản phẩm văn minh, chất lượng và góp phần bảo vệ môi trường bền vững.", "Khuyến khích các cơ sở sản xuất hàng giả phát triển.", "Làm suy thoái đạo đức xã hội.", "Giảm chất lượng cuộc sống của người dân."], answer: 0 }
            ],
            tfSeed: {
                context: "Về Văn hoá tiêu dùng và trách nhiệm xây dựng thói quen tiêu dùng văn minh",
                a: "Văn hoá tiêu dùng Việt Nam mang tính kế thừa truyền thống, tính thời đại, tính hợp lí và gắn với lòng yêu nước.",
                b: "Văn hoá tiêu dùng đòi hỏi công dân phải mua những món hàng đắt đỏ nhất bất chấp hoàn cảnh kinh tế của gia đình.",
                c: "Hưởng ứng cuộc vận động 'Người Việt Nam ưu tiên dùng hàng Việt Nam' là biểu hiện cụ thể của lòng tự tôn dân tộc trong văn hoá tiêu dùng.",
                d: "Khi cộng đồng người tiêu dùng đồng loạt tẩy chay các sản phẩm gây ô nhiễm môi trường hoặc vi phạm đạo đức sẽ tạo áp lực mạnh mẽ buộc doanh nghiệp phải sản xuất sạch và có trách nhiệm hơn."
            }
        },
        {
            id: 9,
            title: "Bài 9: Quyền bình đẳng của công dân trước pháp luật",
            coreConcept: "bình đẳng về quyền, nghĩa vụ và bình đẳng về trách nhiệm pháp lí của công dân",
            mcqSeed: [
                { text: "Theo Điều 16 Hiến pháp năm 2013, mọi người đều bình đẳng trước pháp luật và không ai bị phân biệt đối xử trong đời sống nào?", options: ["Đời sống chính trị, dân sự, kinh tế, văn hoá, xã hội.", "Chỉ trong lĩnh vực giải trí.", "Chỉ áp dụng cho người có hộ khẩu thành phố.", "Chỉ trong lĩnh vực thương mại."], answer: 0 },
                { text: "Quyền bình đẳng của công dân trước pháp luật bao gồm hai nội dung cơ bản nào?", options: ["Công dân bình đẳng về quyền, nghĩa vụ và công dân bình đẳng về trách nhiệm pháp lí.", "Công dân bình đẳng về mức lương và diện tích nhà ở.", "Công dân bình đẳng về chiều cao và độ tuổi.", "Công dân bình đẳng về số tiền gửi ngân hàng."], answer: 0 },
                { text: "Bất kì công dân nào vi phạm pháp luật đều phải bị xử lí theo quy định của pháp luật, không phân biệt dân tộc, giới tính, tôn giáo, chức vụ hay địa vị xã hội. Điều này thể hiện nguyên tắc nào?", options: ["Bình đẳng về hưởng quyền.", "Bình đẳng về trách nhiệm pháp lí.", "Ưu đãi xã hội.", "Miễn trừ ngoại giao."], answer: 1 },
                { text: "Công dân bình đẳng về quyền và nghĩa vụ được hiểu đúng như thế nào?", options: ["Mọi công dân đều có quyền và nghĩa vụ giống hệt nhau về số lượng tuyệt đối trong mọi hoàn cảnh.", "Mọi công dân không bị phân biệt đối xử trong việc hưởng quyền và thực hiện nghĩa vụ theo quy định của pháp luật, nhưng mức độ cụ thể phụ thuộc vào khả năng, điều kiện của mỗi người.", "Người giàu chỉ có quyền mà không có nghĩa vụ.", "Người nghèo được miễn mọi quy định của pháp luật."], answer: 1 },
                { text: "Ý nghĩa của việc thực hiện quyền bình đẳng của công dân trước pháp luật là gì?", options: ["Tạo điều kiện để mọi công dân phát triển toàn diện, tôn trọng nhân phẩm con người và bảo đảm công lí xã hội.", "Tạo ra đặc quyền đặc lợi cho một nhóm người.", "Xoá bỏ vai trò xét xử của Toà án.", "Thực hiện chia đều tài sản xã hội."], answer: 0 }
            ],
            tfSeed: {
                context: "Về Quyền bình đẳng của công dân trước pháp luật (về quyền, nghĩa vụ và trách nhiệm pháp lí)",
                a: "Mọi công dân đều bình đẳng về hưởng quyền, thực hiện nghĩa vụ và chịu trách nhiệm pháp lí trước pháp luật.",
                b: "Hai người cùng thực hiện một hành vi phạm tội nhưng một người là người thành niên (25 tuổi) và một người chưa thành niên (15 tuổi) thì bắt buộc phải chịu mức án phạt tù bằng nhau tuyệt đối.",
                c: "Việc cơ quan chức năng khởi tố, xét xử nghiêm minh cả những cán bộ cấp cao khi có hành vi tham nhũng với phương châm 'không có vùng cấm, không có ngoại lệ' là minh chứng rõ nét cho nguyên tắc bình đẳng về trách nhiệm pháp lí.",
                d: "Nhà nước ban hành các chính sách hỗ trợ người khuyết tật, người nghèo tiếp cận dịch vụ pháp lí miễn phí nhằm bảo đảm sự bình đẳng thực chất trước pháp luật."
            }
        },
        {
            id: 10,
            title: "Bài 10: Bình đẳng giới trong các lĩnh vực",
            coreConcept: "khái niệm bình đẳng giới và quy định pháp luật về bình đẳng giới trong chính trị, kinh tế, lao động, giáo dục, gia đình",
            mcqSeed: [
                { text: "Việc nam, nữ có vị trí, vai trò ngang nhau, được tạo điều kiện và cơ hội phát huy năng lực của mình cho sự phát triển của cộng đồng, gia đình và thụ hưởng như nhau về thành quả phát triển đó gọi là gì?", options: ["Phân biệt giới tính.", "Bình đẳng giới.", "Đặc quyền giới tính.", "Định kiến giới."], answer: 1 },
                { text: "Nam, nữ bình đẳng trong việc tự ứng cử và được giới thiệu ứng cử đại biểu Quốc hội, đại biểu HĐND thuộc bình đẳng giới trong lĩnh vực nào?", options: ["Lĩnh vực kinh tế.", "Lĩnh vực chính trị.", "Lĩnh vực lao động.", "Lĩnh vực gia đình."], answer: 1 },
                { text: "Theo Luật Bình đẳng giới, nam và nữ bình đẳng trong việc thành lập doanh nghiệp, tiến hành hoạt động sản xuất, kinh doanh và quản lí doanh nghiệp là bình đẳng trong lĩnh vực nào?", options: ["Lĩnh vực chính trị.", "Lĩnh vực kinh tế.", "Lĩnh vực văn hoá.", "Lĩnh vực y tế."], answer: 1 },
                { text: "Nam và nữ bình đẳng về tiêu chuẩn, độ tuổi khi tuyển dụng, được đối xử bình đẳng tại nơi làm việc về việc làm, tiền công, tiền thưởng và điều kiện lao động là bình đẳng trong lĩnh vực nào?", options: ["Lĩnh vực lao động.", "Lĩnh vực giáo dục.", "Lĩnh vực gia đình.", "Lĩnh vực tôn giáo."], answer: 0 },
                { text: "Trong gia đình, biểu hiện nào sau đây là thực hiện đúng pháp luật về bình đẳng giới?", options: ["Mọi công việc nội trợ, chăm sóc con cái đều giao hết cho người vợ.", "Vợ và chồng có quyền, nghĩa vụ ngang nhau trong sở hữu tài sản chung, bàn bạc quyết định các công việc lớn và cùng chăm sóc, giáo dục con cái.", "Chỉ cho con trai đi học đại học, bắt con gái nghỉ học sớm đi làm.", "Người chồng có quyền quyết định bán nhà mà không cần hỏi ý kiến vợ."], answer: 1 }
            ],
            tfSeed: {
                context: "Về quy định pháp luật và thực hiện Bình đẳng giới trong các lĩnh vực của đời sống xã hội",
                a: "Nam và nữ bình đẳng trên mọi lĩnh vực: chính trị, kinh tế, lao động, giáo dục - đào tạo, văn hoá, y tế và trong gia đình.",
                b: "Các quy định của Bộ luật Lao động về chế độ nghỉ thai sản và không sử dụng lao động nữ làm việc nặng nhọc, độc hại khi mang thai là sự bất bình đẳng giới đối với nam giới.",
                c: "Hành vi bạo lực gia đình hoặc ép buộc phụ nữ phá thai vì lí do lựa chọn giới tính thai nhi là vi phạm nghiêm trọng pháp luật về bình đẳng giới.",
                d: "Xoá bỏ định kiến giới 'trọng nam khinh nữ' và nâng cao quyền năng kinh tế, chính trị cho phụ nữ là động lực quan trọng thúc đẩy sự phát triển bền vững của quốc gia."
            }
        },
        {
            id: 11,
            title: "Bài 11: Quyền bình đẳng giữa các dân tộc, tôn giáo",
            coreConcept: "quyền bình đẳng giữa các dân tộc (chính trị, kinh tế, văn hoá - giáo dục) và bình đẳng giữa các tôn giáo",
            mcqSeed: [
                { text: "Theo Điều 5 Hiến pháp năm 2013, các dân tộc sinh sống trên đất nước Việt Nam có mối quan hệ pháp lí như thế nào?", options: ["Các dân tộc bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển; nghiêm cấm mọi hành vi kì thị, chia rẽ dân tộc.", "Dân tộc đa số có nhiều quyền lợi pháp lí hơn dân tộc thiểu số.", "Mỗi dân tộc sử dụng một hệ thống pháp luật riêng.", "Không cho phép dùng tiếng nói, chữ viết của dân tộc thiểu số."], answer: 0 },
                { text: "Các dân tộc ở Việt Nam có quyền dùng tiếng nói, chữ viết của mình, giữ gìn bản sắc dân tộc và phát huy phong tục, tập quán, truyền thống tốt đẹp là thể hiện bình đẳng trên lĩnh vực nào?", options: ["Lĩnh vực chính trị.", "Lĩnh vực kinh tế.", "Lĩnh vực văn hoá, giáo dục.", "Lĩnh vực quốc phòng."], answer: 2 },
                { text: "Nhà nước triển khai Chương trình mục tiêu quốc gia phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi thể hiện sự bình đẳng giữa các dân tộc trên lĩnh vực nào?", options: ["Lĩnh vực kinh tế.", "Lĩnh vực ngoại giao.", "Lĩnh vực tôn giáo.", "Lĩnh vực thể thao."], answer: 0 },
                { text: "Quyền bình đẳng giữa các tôn giáo ở Việt Nam được hiểu đúng như thế nào?", options: ["Các tôn giáo được Nhà nước công nhận đều bình đẳng trước pháp luật, nơi thờ tự được pháp luật bảo hộ; không ai được xâm phạm tự do tín ngưỡng, tôn giáo hoặc lợi dụng tôn giáo để vi phạm pháp luật.", "Chỉ có một tôn giáo lớn nhất mới được phép hoạt động.", "Chức sắc tôn giáo được miễn trừ mọi trách nhiệm hình sự.", "Người có tôn giáo không phải thực hiện nghĩa vụ đóng thuế."], answer: 0 },
                { text: "Hành vi nào sau đây bị pháp luật nghiêm cấm trong lĩnh vực dân tộc và tôn giáo?", options: ["Giao lưu văn hoá giữa các dân tộc anh em.", "Các tổ chức tôn giáo tham gia hoạt động từ thiện cứu trợ bão lũ.", "Lợi dụng vấn đề dân tộc, tín ngưỡng, tôn giáo để kích động chia rẽ khối đại đoàn kết toàn dân tộc, xâm phạm an ninh quốc gia.", "Trùng tu các di tích lịch sử, cơ sở tín ngưỡng hợp pháp."], answer: 2 }
            ],
            tfSeed: {
                context: "Về Quyền bình đẳng giữa các dân tộc và các tôn giáo tại Việt Nam",
                a: "Mọi dân tộc và mọi tôn giáo hợp pháp trên lãnh thổ Việt Nam đều bình đẳng về quyền và nghĩa vụ trước pháp luật.",
                b: "Việc Nhà nước thành lập hệ thống trường phổ thông dân tộc nội trú và cấp học bổng cho học sinh dân tộc thiểu số là sự thiên vị trái với nguyên tắc bình đẳng.",
                c: "Cơ sở tín ngưỡng, tôn giáo khi tổ chức lễ hội phải tuân thủ quy định của pháp luật về an ninh trật tự, phòng cháy chữa cháy và bảo vệ môi trường.",
                d: "Thực hiện tốt chính sách bình đẳng, đoàn kết dân tộc, tôn giáo là nhân tố chiến lược giữ vững ổn định chính trị - xã hội và bảo vệ vững chắc Tổ quốc Việt Nam."
            }
        },
        {
            id: 12,
            title: "Bài 12: Quyền và nghĩa vụ của công dân trong tham gia quản lí nhà nước và xã hội",
            coreConcept: "quyền kiến nghị, thảo luận, biểu quyết và giám sát của công dân ở tầm quốc gia và ở cơ sở",
            mcqSeed: [
                { text: "Quyền của công dân tham gia thảo luận vào các công việc chung của đất nước trong tất cả các lĩnh vực của đời sống xã hội ở phạm vi cả nước và tại địa phương gọi là quyền gì?", options: ["Quyền tự do kinh doanh.", "Quyền tham gia quản lí nhà nước và xã hội.", "Quyền sở hữu tài sản.", "Quyền bất khả xâm phạm về chỗ ở."], answer: 1 },
                { text: "Ở phạm vi cả nước, công dân thực hiện quyền tham gia quản lí nhà nước và xã hội thông qua hoạt động nào sau đây?", options: ["Tham gia thảo luận, góp ý kiến xây dựng dự thảo Hiến pháp, các dự án luật và biểu quyết khi Nhà nước tổ chức trưng cầu ý dân.", "Tự ý ban hành nghị định của Chính phủ.", "Quyết định bổ nhiệm các bộ trưởng.", "Thu thuế trực tiếp của các doanh nghiệp."], answer: 0 },
                { text: "Ở cấp cơ sở (xã, phường, thị trấn, thôn, tổ dân phố), quyền tham gia quản lí nhà nước và xã hội của người dân được thực hiện theo phương châm cốt lõi nào?", options: ["Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng.", "Chính quyền làm thay hoàn toàn cho người dân.", "Mạnh ai nấy làm không cần bàn bạc.", "Doanh nghiệp quyết định mọi việc của thôn xóm."], answer: 0 },
                { text: "Nội dung nào sau đây thuộc việc 'Dân bàn và quyết định trực tiếp' ở cấp cơ sở?", options: ["Mức đóng góp của nhân dân để xây dựng cơ sở hạ tầng, các công trình phúc lợi công cộng trong phạm vi thôn, tổ dân phố và xây dựng hương ước, quy ước.", "Mức thuế suất thuế thu nhập doanh nghiệp toàn quốc.", "Ngân sách quốc phòng an ninh quốc gia.", "Bản án hình sự của Toà án nhân dân tối cao."], answer: 0 },
                { text: "Nghĩa vụ của công dân khi thực hiện quyền tham gia quản lí nhà nước và xã hội là gì?", options: ["Tuân thủ quy định pháp luật, tôn trọng quyền lợi người khác, phản ánh trung thực, khách quan và không lợi dụng dân chủ để gây rối trật tự công cộng.", "Đưa thông tin sai sự thật lên mạng xã hội để gây sức ép.", "Ép buộc người khác phải đồng ý theo quan điểm cá nhân của mình.", "Từ chối chấp hành nghị quyết đã được đa số nhân dân biểu quyết thông qua."], answer: 0 }
            ],
            tfSeed: {
                context: "Về Quyền và nghĩa vụ của công dân trong tham gia quản lí nhà nước và xã hội",
                a: "Tham gia quản lí nhà nước và xã hội là quyền dân chủ cơ bản giúp công dân phát huy vai trò làm chủ đất nước.",
                b: "Mọi công việc của UBND xã đều phải giữ bí mật tuyệt đối, không cần công khai cho người dân địa phương biết.",
                c: "Khi người dân tham gia họp tổ dân phố để bàn bạc, biểu quyết mức đóng góp lắp đặt hệ thống camera an ninh và đèn chiếu sáng ngõ xóm là đang thực hiện Luật Thực hiện dân chủ ở cơ sở.",
                d: "Phát huy quyền tham gia quản lí và giám sát của Nhân dân giúp phòng ngừa tệ quan liêu, tham nhũng, lãng phí và làm cho các quyết sách của Nhà nước sát hợp với thực tiễn cuộc sống."
            }
        },
        {
            id: 13,
            title: "Bài 13: Quyền và nghĩa vụ của công dân về bầu cử và ứng cử",
            coreConcept: "khái niệm, độ tuổi bầu cử (đủ 18 tuổi), ứng cử (đủ 21 tuổi) và 4 nguyên tắc bầu cử",
            mcqSeed: [
                { text: "Theo quy định của Hiến pháp năm 2013 và Luật Bầu cử, công dân Việt Nam đạt độ tuổi nào thì có quyền bầu cử và có quyền ứng cử vào Quốc hội, Hội đồng nhân dân?", options: ["Đủ 16 tuổi được bầu cử, đủ 18 tuổi được ứng cử.", "Tính đến ngày bầu cử, công dân đủ 18 tuổi trở lên có quyền bầu cử và đủ 21 tuổi trở lên có quyền ứng cử.", "Đủ 20 tuổi được bầu cử, đủ 25 tuổi được ứng cử.", "Mọi lứa tuổi đều có quyền bầu cử."], answer: 1 },
                { text: "Bốn nguyên tắc bầu cử đại biểu Quốc hội và đại biểu Hội đồng nhân dân ở Việt Nam là gì?", options: ["Phổ thông, bình đẳng, trực tiếp và bỏ phiếu kín.", "Công khai, đại diện, bổ nhiệm và hiệp thương.", "Tự nguyện, thoả thuận, gián tiếp và công khai.", "Tập trung, bao cấp, chỉ định và uỷ quyền."], answer: 0 },
                { text: "Nguyên tắc bầu cử nào đòi hỏi cử tri phải tự mình đi bầu, tự tay bỏ phiếu vào hòm phiếu, không được nhờ người khác bầu thay hoặc bầu bằng cách gửi thư?", options: ["Nguyên tắc phổ thông.", "Nguyên tắc bình đẳng.", "Nguyên tắc bầu cử trực tiếp.", "Nguyên tắc bỏ phiếu kín."], answer: 2 },
                { text: "Trường hợp nào sau đây KHÔNG được ghi tên vào danh sách cử tri để thực hiện quyền bầu cử theo quy định của pháp luật?", options: ["Sinh viên đang học đại học xa nhà.", "Người đang bị tước quyền bầu cử theo bản án, quyết định của Toà án đã có hiệu lực pháp luật, người đang chấp hành hình phạt tù mà không được hưởng án treo và người mất năng lực hành vi dân sự.", "Người cao tuổi đang điều trị tại bệnh viện.", "Công nhân làm việc theo ca tại khu công nghiệp."], answer: 1 },
                { text: "Đối với cử tri già yếu, khuyết tật không thể tự đi đến phòng bỏ phiếu được thì Tổ bầu cử giải quyết như thế nào để bảo đảm quyền bầu cử của công dân?", options: ["Huỷ bỏ quyền bầu cử của người đó.", "Tổ bầu cử mang hòm phiếu phụ và phiếu bầu đến tận chỗ ở, chỗ điều trị của cử tri để cử tri nhận phiếu và thực hiện việc bầu cử.", "Cho phép trưởng thôn tự gạch phiếu bầu thay.", "Yêu cầu nộp phạt hành chính."], answer: 1 }
            ],
            tfSeed: {
                context: "Về Quyền và nghĩa vụ của công dân về bầu cử và ứng cử",
                a: "Quyền bầu cử và ứng cử là quyền chính trị cơ bản để Nhân dân lựa chọn những người tiêu biểu về đức, tài vào cơ quan quyền lực nhà nước.",
                b: "Trong một gia đình có 4 người đủ 18 tuổi trở lên, người chủ hộ có quyền cầm cả 4 thẻ cử tri đi gạch phiếu và bỏ phiếu thay cho các thành viên khác.",
                c: "Nguyên tắc bỏ phiếu kín quy định cử tri viết phiếu trong buồng kín, không ai được xem phiếu bầu của cử tri nhằm bảo đảm sự tự do thể hiện ý chí của người bầu.",
                d: "Mỗi công dân khi đi bầu cử cần chủ động tìm hiểu kĩ tiểu sử, chương trình hành động của các ứng cử viên để sáng suốt lựa chọn người xứng đáng đại diện cho quyền lợi của Nhân dân."
            }
        },
        {
            id: 14,
            title: "Bài 14: Quyền và nghĩa vụ của công dân về khiếu nại, tố cáo",
            coreConcept: "phân biệt khái niệm, chủ thể, mục đích của quyền khiếu nại và quyền tố cáo",
            mcqSeed: [
                { text: "Việc công dân đề nghị cơ quan, tổ chức, cá nhân có thẩm quyền xem xét lại quyết định hành chính, hành vi hành chính khi có căn cứ cho rằng quyết định hoặc hành vi đó là trái pháp luật, xâm phạm quyền, lợi ích hợp pháp của mình gọi là gì?", options: ["Tố cáo.", "Khiếu nại.", "Bầu cử.", "Khởi tố."], answer: 1 },
                { text: "Việc cá nhân theo thủ tục do luật định báo cho cơ quan, tổ chức, cá nhân có thẩm quyền biết về hành vi vi phạm pháp luật của bất cứ cơ quan, tổ chức, cá nhân nào gây thiệt hại hoặc đe doạ gây thiệt hại đến lợi ích của Nhà nước, quyền, lợi ích hợp pháp của cơ quan, tổ chức, cá nhân gọi là gì?", options: ["Khiếu nại.", "Tố cáo.", "Kiến nghị.", "Hoà giải."], answer: 1 },
                { text: "Điểm khác biệt cơ bản nhất về mục đích giữa 'Khiếu nại' và 'Tố cáo' là gì?", options: ["Khiếu nại nhằm khôi phục quyền và lợi ích hợp pháp của chính người khiếu nại bị xâm phạm; còn Tố cáo nhằm phát hiện, ngăn chặn và xử lí mọi hành vi vi phạm pháp luật để bảo vệ lợi ích chung và quyền lợi hợp pháp của tổ chức, cá nhân.", "Khiếu nại dùng cho vụ án hình sự, tố cáo dùng cho tranh chấp dân sự.", "Chỉ có doanh nghiệp mới được tố cáo, cá nhân chỉ được khiếu nại.", "Hai khái niệm này hoàn toàn giống hệt nhau."], answer: 0 },
                { text: "Chủ thể có quyền thực hiện việc tố cáo hành vi vi phạm pháp luật là ai?", options: ["Chỉ những người bị thiệt hại trực tiếp.", "Bất kì công dân (cá nhân) nào phát hiện hành vi vi phạm pháp luật đều có quyền tố cáo.", "Chỉ có cán bộ thanh tra nhà nước.", "Chỉ có các tổ chức nước ngoài."], answer: 1 },
                { text: "Hành vi nào sau đây bị Luật Khiếu nại và Luật Tố cáo nghiêm cấm?", options: ["Cung cấp thông tin, tài liệu trung thực cho cơ quan giải quyết.", "Giữ bí mật họ tên, địa chỉ của người tố cáo.", "Cố tình tố cáo sai sự thật, vu khống người khác hoặc đe doạ, trả thù, trù dập người khiếu nại, tố cáo.", "Rút đơn khiếu nại khi đã được giải thích thoả đáng."], answer: 2 }
            ],
            tfSeed: {
                context: "Về phân biệt và thực hiện đúng Quyền, nghĩa vụ của công dân về khiếu nại, tố cáo",
                a: "Khiếu nại và tố cáo là công cụ pháp lí quan trọng để công dân bảo vệ quyền lợi hợp pháp và tham gia đấu tranh phòng, chống vi phạm pháp luật.",
                b: "Khi phát hiện một cơ sở sản xuất lén xả chất thải độc hại ra sông, người dân phải làm đơn 'Khiếu nại' chứ không được 'Tố cáo'.",
                c: "Người khiếu nại, tố cáo có nghĩa vụ trình bày trung thực sự việc, cung cấp thông tin, tài liệu liên quan và chịu trách nhiệm trước pháp luật về nội dung khiếu nại, tố cáo của mình.",
                d: "Nhà nước có cơ chế bảo vệ bí mật thông tin, vị trí việc làm và tính mạng, tài sản của người tố cáo để khuyến khích công dân dũng cảm đấu tranh chống tham nhũng, tiêu cực."
            }
        },
        {
            id: 15,
            title: "Bài 15: Quyền và nghĩa vụ của công dân về bảo vệ Tổ quốc",
            coreConcept: "quyền và nghĩa vụ thiêng liêng của công dân trong xây dựng nền quốc phòng toàn dân, nghĩa vụ quân sự và bảo vệ an ninh Tổ quốc",
            mcqSeed: [
                { text: "Theo Điều 44 và Điều 45 Hiến pháp năm 2013, bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa là gì của công dân?", options: ["Chỉ là quyền tự nguyện nếu có thời gian rảnh.", "Là sự nghiệp của toàn dân; bảo vệ Tổ quốc là nghĩa vụ thiêng liêng và quyền cao quý của công dân.", "Là trách nhiệm riêng của quân đội chuyên nghiệp.", "Chỉ áp dụng khi đất nước có chiến tranh."], answer: 1 },
                { text: "Theo Luật Nghĩa vụ quân sự hiện hành, độ tuổi gọi công dân nhập ngũ trong thời bình được quy định như thế nào?", options: ["Từ đủ 16 tuổi đến hết 20 tuổi.", "Từ đủ 18 tuổi đến hết 25 tuổi; công dân được đào tạo trình độ cao đẳng, đại học đã được tạm hoãn gọi nhập ngũ thì độ tuổi gọi nhập ngũ đến hết 27 tuổi.", "Từ đủ 22 tuổi đến hết 35 tuổi.", "Không giới hạn độ tuổi."], answer: 1 },
                { text: "Hành vi nào sau đây thể hiện đúng trách nhiệm của công dân trong sự nghiệp bảo vệ Tổ quốc?", options: ["Làm giả giấy khám sức khoẻ để trốn nghĩa vụ quân sự.", "Đăng kí nghĩa vụ quân sự khi đủ tuổi, chấp hành lệnh gọi nhập ngũ và tích cực tham gia phong trào toàn dân bảo vệ an ninh Tổ quốc.", "Chụp ảnh khu vực căn cứ quân sự có biển cấm đăng lên mạng xã hội.", "Chia sẻ thông tin xuyên tạc lịch sử dân tộc."], answer: 1 },
                { text: "Theo Hiến pháp năm 2013, hành vi nào bị coi là tội nặng nhất trong các tội xâm phạm an ninh quốc gia?", options: ["Vi phạm quy tắc giao thông đường bộ.", "Tội phản bội Tổ quốc.", "Chậm nộp thuế thu nhập cá nhân.", "Tranh chấp hợp đồng dân sự."], answer: 1 },
                { text: "Đối với học sinh THPT, việc làm thiết thực nhất để thực hiện nghĩa vụ bảo vệ Tổ quốc ngay khi đang ngồi trên ghế nhà trường là gì?", options: ["Học tập tốt môn Giáo dục quốc phòng và an ninh, rèn luyện sức khoẻ, đăng kí nghĩa vụ quân sự khi đủ 17 tuổi và cảnh giác trước các âm mưu 'diễn biến hoà bình' trên không gian mạng.", "Bỏ học giữa chừng để đi làm thêm.", "Tham gia các hội nhóm kích động bạo lực.", "Từ chối tham gia các hoạt động đền ơn đáp nghĩa."], answer: 0 }
            ],
            tfSeed: {
                context: "Về Quyền và nghĩa vụ của công dân trong bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa",
                a: "Bảo vệ Tổ quốc bao gồm bảo vệ độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ, bảo vệ Đảng, Nhà nước, Nhân dân và chế độ xã hội chủ nghĩa.",
                b: "Trong thời bình, đất nước không có chiến tranh nên thanh niên không cần thực hiện nghĩa vụ quân sự hay nghĩa vụ tham gia Công an nhân dân.",
                c: "Mọi hành vi trốn tránh, chống đối hoặc cản trở việc thực hiện nghĩa vụ quân sự đều là hành vi vi phạm pháp luật và bị xử phạt hành chính hoặc truy cứu trách nhiệm hình sự.",
                d: "Kết hợp chặt chẽ giữa phát triển kinh tế - xã hội với củng cố quốc phòng - an ninh và chăm lo chính sách hậu phương quân đội là cội nguồn tạo nên sức mạnh tổng hợp bảo vệ Tổ quốc từ sớm, từ xa."
            }
        },
        {
            id: 16,
            title: "Bài 16: Quyền bất khả xâm phạm về thân thể, được pháp luật bảo hộ về tính mạng, sức khoẻ, danh dự và nhân phẩm",
            coreConcept: "quyền bất khả xâm phạm về thân thể (bắt, giam, giữ người) và quyền được bảo hộ tính mạng, sức khoẻ, danh dự, nhân phẩm",
            mcqSeed: [
                { text: "Không ai bị bắt nếu không có quyết định của Toà án, quyết định hoặc phê chuẩn của Viện kiểm sát, trừ trường hợp phạm tội quả tang là nội dung của quyền nào?", options: ["Quyền bất khả xâm phạm về chỗ ở.", "Quyền bất khả xâm phạm về thân thể của công dân.", "Quyền bí mật thư tín.", "Quyền tự do đi lại."], answer: 1 },
                { text: "Trong trường hợp nào sau đây, bất kì người nào cũng có quyền bắt và giải ngay người bị bắt đến cơ quan Công an, Viện kiểm sát hoặc Uỷ ban nhân dân nơi gần nhất?", options: ["Người đang thực hiện tội phạm quả tang hoặc người đang bị truy nã.", "Người hàng xóm đang cãi nhau to tiếng.", "Người nợ tiền vay quá hạn chưa trả.", "Người đi xe đạp không đội mũ bảo hiểm."], answer: 0 },
                { text: "Hành vi cố ý đánh người gây thương tích, đe doạ giết người hoặc làm chết người là xâm phạm quyền nào của công dân?", options: ["Quyền bất khả xâm phạm về chỗ ở.", "Quyền được pháp luật bảo hộ về tính mạng, sức khoẻ của công dân.", "Quyền tự do kinh doanh.", "Quyền khiếu nại."], answer: 1 },
                { text: "Hành vi bịa đặt, tung tin sai sự thật, lăng mạ, sỉ nhục người khác trên mạng xã hội nhằm hạ thấp uy tín của họ là xâm phạm quyền nào?", options: ["Quyền bất khả xâm phạm về thân thể.", "Quyền được pháp luật bảo hộ về danh dự và nhân phẩm của công dân.", "Quyền sở hữu tài sản.", "Quyền bầu cử."], answer: 1 },
                { text: "Khi một chủ cửa hàng nghi ngờ khách hàng lấy trộm đồ và tự ý khoá trái cửa nhốt khách hàng trong kho suốt 5 tiếng đồng hồ để tra khảo, chủ cửa hàng đã vi phạm pháp luật về tội gì?", options: ["Thực hiện đúng quyền tự vệ tài sản.", "Xâm phạm quyền bất khả xâm phạm về thân thể (hành vi bắt, giữ hoặc giam người trái pháp luật).", "Chỉ vi phạm quy tắc ứng xử thương mại.", "Vi phạm luật giao thông."], answer: 1 }
            ],
            tfSeed: {
                context: "Về Quyền bất khả xâm phạm về thân thể và quyền được pháp luật bảo hộ về tính mạng, sức khoẻ, danh dự, nhân phẩm",
                a: "Mọi người có quyền bất khả xâm phạm về thân thể, được pháp luật bảo hộ về sức khoẻ, danh dự và nhân phẩm; không bị tra tấn, bạo lực, truy bức, nhục hình.",
                b: "Cha mẹ hoặc giáo viên có quyền đánh đập gây thương tích thân thể hoặc lăng mạ học sinh trước đám đông để răn đe giáo dục.",
                c: "Hành vi bạo lực học đường, quay clip tung lên mạng để chế giễu bạn bè vừa xâm phạm sức khoẻ vừa xúc phạm nghiêm trọng danh dự, nhân phẩm của người khác.",
                d: "Khi bị người khác đe doạ tính mạng hoặc vu khống trên không gian mạng, công dân cần bình tĩnh lưu giữ bằng chứng và trình báo ngay cho cơ quan Công an để được pháp luật bảo vệ."
            }
        },
        {
            id: 17,
            title: "Bài 17: Quyền bất khả xâm phạm về chỗ ở",
            coreConcept: "khái niệm chỗ ở hợp pháp, quyền bất khả xâm phạm về chỗ ở và các trường hợp khám xét chỗ ở theo luật định",
            mcqSeed: [
                { text: "Công dân có quyền có chỗ ở hợp pháp và không ai được tự ý vào chỗ ở của người khác nếu không được người đó đồng ý là nội dung của quyền nào?", options: ["Quyền bất khả xâm phạm về thân thể.", "Quyền bất khả xâm phạm về chỗ ở của công dân.", "Quyền tự do ngôn luận.", "Quyền sở hữu trí tuệ."], answer: 1 },
                { text: "Việc khám xét chỗ ở của công dân chỉ được tiến hành trong trường hợp nào?", options: ["Khi tổ trưởng dân phố muốn kiểm tra vệ sinh.", "Chỉ trong trường hợp pháp luật quy định và phải có lệnh khám xét của cơ quan, người có thẩm quyền theo đúng trình tự, thủ tục do Bộ luật Tố tụng hình sự quy định.", "Khi người cho vay nợ muốn vào nhà con nợ lấy đồ đạc.", "Khi hàng xóm nghi ngờ mất gia cầm."], answer: 1 },
                { text: "Trường hợp nào pháp luật cho phép cơ quan chức năng tiến hành khám xét chỗ ở theo đúng thủ tục luật định?", options: ["Khi có căn cứ nhận định trong chỗ ở của một người có công cụ, phương tiện phạm tội, tài liệu liên quan đến vụ án hoặc khi cần bắt người đang bị truy nã, phạm tội quả tang đang lẩn trốn trong đó.", "Khi chủ nhà đi vắng dài ngày.", "Khi chủ nhà chậm đóng tiền quỹ khuyến học.", "Không bao giờ được phép khám xét chỗ ở trong mọi trường hợp."], answer: 0 },
                { text: "Hành vi nào sau đây là xâm phạm chỗ ở hợp pháp của công dân?", options: ["Cảnh sát phòng cháy chữa cháy phá cửa vào nhà đang bốc cháy để cứu người và dập lửa.", "Tự ý trèo tường, phá khoá xâm nhập vào nhà người khác khi chưa được sự đồng ý của chủ nhà hoặc đuổi người khác ra khỏi chỗ ở hợp pháp của họ trái pháp luật.", "Đến bấm chuông xin phép chủ nhà cho vào thăm hỏi.", "Thuê căn hộ có kí hợp đồng hợp pháp với chủ nhà."], answer: 1 },
                { text: "Đối với phòng trọ mà sinh viên đang thuê hợp pháp để ở, chủ nhà trọ có quyền tự ý dùng chìa khoá dự phòng mở cửa vào lục soát đồ đạc khi sinh viên đi học không?", options: ["Có toàn quyền vì nhà là tài sản của chủ trọ.", "Không được phép, vì phòng trọ đang thuê hợp pháp là chỗ ở được pháp luật bảo hộ quyền bất khả xâm phạm về chỗ ở của người thuê.", "Được phép vào bất cứ lúc nào kể cả ban đêm.", "Chỉ cần báo cho hàng xóm là được tự ý lục soát."], answer: 1 }
            ],
            tfSeed: {
                context: "Về Quyền bất khả xâm phạm về chỗ ở của công dân",
                a: "Chỗ ở hợp pháp của công dân (nhà riêng, căn hộ chung cư, phòng trọ thuê hợp pháp...) được pháp luật bảo vệ quyền bất khả xâm phạm.",
                b: "Khi bị mất trộm tài sản, người bị mất trộm có quyền tự ý xông vào nhà người mà mình nghi ngờ để khám xét, lục soát.",
                c: "Khi tiến hành khám xét chỗ ở theo lệnh của cơ quan có thẩm quyền, việc khám xét phải có mặt người chủ chỗ ở hoặc người thành niên trong gia đình và đại diện chính quyền xã, phường cùng người chứng kiến.",
                d: "Tôn trọng quyền bất khả xâm phạm về chỗ ở của người khác cũng chính là góp phần giữ gìn an ninh trật tự và cuộc sống bình yên cho mỗi gia đình trong cộng đồng."
            }
        },
        {
            id: 18,
            title: "Bài 18: Quyền bảo đảm an toàn và bí mật thư tín, điện thoại, điện tín",
            coreConcept: "quyền bí mật đời sống riêng tư, an toàn và bí mật thư tín, điện thoại, điện tín, dữ liệu điện tử cá nhân",
            mcqSeed: [
                { text: "Theo Điều 21 Hiến pháp năm 2013, thư tín, điện thoại, điện tín và các hình thức trao đổi thông tin riêng tư khác của cá nhân được pháp luật quy định như thế nào?", options: ["Mọi người đều có quyền xem thư của nhau.", "Được bảo đảm an toàn và bí mật; việc bóc mở, kiểm soát, thu giữ trái luật bị nghiêm cấm.", "Nhân viên bưu điện có quyền đọc nội dung thư trước khi phát.", "Chỉ bảo mật đối với thư công vụ của cơ quan nhà nước."], answer: 1 },
                { text: "Việc bóc mở, kiểm soát, thu giữ thư tín, điện tín của người khác chỉ được thực hiện bởi ai và trong trường hợp nào?", options: ["Bởi bất kì ai có tính tò mò.", "Chỉ được thực hiện bởi những người có thẩm quyền theo quy định của luật và phải có quyết định của cơ quan nhà nước có thẩm quyền (như phục vụ điều tra tội phạm đặc biệt nghiêm trọng).", "Bởi quản lí khu chung cư.", "Bởi các công ty quảng cáo."], answer: 1 },
                { text: "Hành vi nào sau đây vi phạm quyền bảo đảm an toàn và bí mật thư tín, điện thoại, điện tín của công dân?", options: ["Nhặt được bưu phẩm đánh rơi và gửi trả lại bưu điện để chuyển cho người nhận.", "Lén cài phần mềm nghe lén điện thoại, tự ý bẻ khoá đọc trộm tin nhắn Zalo, Facebook, email của người khác hoặc tự ý bóc thư của người khác.", "Gọi điện thoại hỏi thăm sức khoẻ người thân.", "Nhắn tin xác nhận đơn hàng cho khách."], answer: 1 },
                { text: "Trách nhiệm của nhân viên ngành bưu chính, viễn thông khi vận chuyển thư tín, bưu phẩm là gì?", options: ["Chuyển phát nhanh chóng, chính xác, an toàn đến tận tay người nhận và giữ bí mật tuyệt đối thông tin thư tín của khách hàng.", "Tự ý mở các kiện hàng ra xem bên trong có gì.", "Bán danh sách số điện thoại và lịch sử cuộc gọi của khách hàng cho bên thứ ba.", "Vứt bỏ thư nếu địa chỉ ở xa."], answer: 0 },
                { text: "Khi vô tình nhận nhầm bức thư hoặc bưu phẩm ghi tên và địa chỉ của người hàng xóm, công dân cần ứng xử như thế nào cho đúng pháp luật?", options: ["Bóc ra đọc xem nội dung là gì rồi mới đưa.", "Giữ nguyên trạng không bóc mở và trao trả lại ngay cho người hàng xóm hoặc báo lại cho nhân viên bưu tá.", "Vứt vào thùng rác vì không phải của mình.", "Chụp ảnh phong bì thư đăng lên mạng."], answer: 1 }
            ],
            tfSeed: {
                context: "Về Quyền được bảo đảm an toàn và bí mật thư tín, điện thoại, điện tín và dữ liệu cá nhân",
                a: "Quyền bí mật thư tín, điện thoại, điện tín thuộc nhóm quyền tự do cơ bản gắn liền với quyền bất khả xâm phạm về đời sống riêng tư, bí mật cá nhân.",
                b: "Bạn thân học cùng lớp có quyền tự ý mở điện thoại của nhau để đọc tin nhắn riêng tư và đăng lên nhóm lớp mà không cần xin phép.",
                c: "Hành vi xâm nhập trái phép vào tài khoản mạng xã hội, hộp thư điện tử của người khác để đánh cắp thông tin hoặc tống tiền sẽ bị xử phạt hành chính hoặc truy cứu trách nhiệm hình sự.",
                d: "Trong thời đại công nghệ số, mỗi công dân vừa phải tôn trọng bí mật thông tin của người khác, vừa phải nâng cao kĩ năng bảo mật tài khoản, dữ liệu cá nhân của chính mình trên không gian mạng."
            }
        },
        {
            id: 19,
            title: "Bài 19: Quyền và nghĩa vụ của công dân về tự do ngôn luận, báo chí và tiếp cận thông tin",
            coreConcept: "quyền tự do ngôn luận, tự do báo chí, quyền tiếp cận thông tin và trách nhiệm pháp lí khi phát ngôn trên mạng xã hội",
            mcqSeed: [
                { text: "Quyền của công dân được tự do phát biểu ý kiến, bày tỏ quan điểm của mình về các vấn đề chính trị, kinh tế, văn hoá, xã hội của đất nước được gọi là quyền gì?", options: ["Quyền tự do ngôn luận.", "Quyền bất khả xâm phạm về thân thể.", "Quyền sở hữu tài sản.", "Quyền tự do đi lại."], answer: 0 },
                { text: "Quyền của công dân được đọc, xem, nghe, ghi chép, sao chép, chụp ảnh các thông tin do cơ quan nhà nước tạo ra và công khai theo quy định của pháp luật gọi là quyền gì?", options: ["Quyền tiếp cận thông tin.", "Quyền bí mật nhà nước.", "Quyền xét xử.", "Quyền miễn thuế."], answer: 0 },
                { text: "Công dân thực hiện quyền tự do ngôn luận, tự do báo chí thông qua những hình thức hợp pháp nào sau đây?", options: ["Phát biểu ý kiến tại các cuộc họp ở cơ quan, trường học, tổ dân phố; viết bài gửi đăng báo, kiến nghị với đại biểu Quốc hội, HĐND.", "Lập các trang web ẩn danh để tung tin giả gây hoang mang dư luận.", "Viết bình luận vu khống, xúc phạm danh dự cá nhân trên mạng xã hội.", "Tiết lộ tài liệu thuộc danh mục bí mật nhà nước."], answer: 0 },
                { text: "Loại thông tin nào sau đây công dân KHÔNG được phép tiếp cận hoặc tự ý phát tán theo Luật Tiếp cận thông tin và Luật An ninh mạng?", options: ["Các văn bản quy phạm pháp luật đã ban hành.", "Thông tin thuộc bí mật nhà nước, thông tin xâm phạm an ninh quốc gia hoặc bí mật đời tư của người khác khi chưa được đồng ý.", "Quy hoạch sử dụng đất công khai của địa phương.", "Thủ tục hành chính tại bộ phận một cửa."], answer: 1 },
                { text: "Nghĩa vụ cốt lõi của công dân khi sử dụng mạng xã hội để bày tỏ quan điểm (thực hiện quyền tự do ngôn luận) là gì?", options: ["Muốn nói gì thì nói vì mạng xã hội là không gian ảo.", "Phải tuân thủ pháp luật, kiểm chứng tính xác thực của thông tin trước khi chia sẻ, không đăng tải thông tin sai sự thật, kích động bạo lực hoặc xúc phạm tổ chức, cá nhân.", "Chia sẻ ngay mọi tin đồn giật gân để câu tương tác.", "Sử dụng ngôn từ thiếu văn hoá để công kích người khác."], answer: 1 }
            ],
            tfSeed: {
                context: "Về Quyền và nghĩa vụ của công dân về tự do ngôn luận, báo chí và tiếp cận thông tin",
                a: "Tự do ngôn luận, tự do báo chí và tiếp cận thông tin là điều kiện để công dân tham gia chủ động vào đời sống chính trị - xã hội của đất nước.",
                b: "Tự do ngôn luận đồng nghĩa với việc công dân có quyền phát ngôn tuỳ tiện, bịa đặt tin giả về dịch bệnh hay thiên tai mà không phải chịu trách nhiệm pháp lí.",
                c: "Cơ quan nhà nước có trách nhiệm công khai, minh bạch các thông tin về chính sách, quy hoạch, thủ tục hành chính để bảo đảm quyền tiếp cận thông tin của người dân.",
                d: "Ứng xử văn minh, có trách nhiệm trên không gian mạng và biết chọn lọc thông tin chính thống là biểu hiện của công dân số trưởng thành trong xã hội pháp quyền."
            }
        },
        {
            id: 20,
            title: "Bài 20: Quyền và nghĩa vụ của công dân về tự do tín ngưỡng và tôn giáo",
            coreConcept: "khái niệm tín ngưỡng, tôn giáo, quyền tự do tín ngưỡng, tôn giáo và đấu tranh chống mê tín dị đoan, lợi dụng tôn giáo",
            mcqSeed: [
                { text: "Theo Luật Tín ngưỡng, tôn giáo, mọi người có quyền tự do tín ngưỡng, tôn giáo được hiểu như thế nào?", options: ["Mọi người có quyền theo hoặc không theo một tôn giáo nào; không ai được cưỡng bức, cản trở người khác theo hoặc không theo tín ngưỡng, tôn giáo.", "Bắt buộc mọi công dân khi đủ 18 tuổi phải gia nhập một tôn giáo.", "Nghiêm cấm mọi hoạt động thờ cúng tổ tiên.", "Chỉ cho phép người cao tuổi mới được đi lễ chùa, nhà thờ."], answer: 0 },
                { text: "Hoạt động thờ cúng tổ tiên, thờ mẫu và tưởng niệm các anh hùng liệt sĩ, danh nhân có công với đất nước tại các đình, đền, miếu thuộc hoạt động gì?", options: ["Hoạt động tín ngưỡng dân gian truyền thống tốt đẹp.", "Hoạt động mê tín dị đoan bị cấm.", "Hoạt động kinh doanh thương mại.", "Hoạt động tố tụng pháp lí."], answer: 0 },
                { text: "Hành vi nào sau đây là hành vi mê tín dị đoan hoặc lợi dụng tín ngưỡng, tôn giáo vi phạm pháp luật?", options: ["Tổ chức lễ hội truyền thống đúng quy định pháp luật.", "Lợi dụng việc xem bói, gọi hồn, đốt vàng mã tràn lan, chữa bệnh bằng bùa phép để lừa đảo chiếm đoạt tài sản của người dân.", "Các chức sắc, tín đồ tôn giáo tham gia bảo vệ môi trường và hiến máu nhân đạo.", "Tôn tạo cơ sở thờ tự đã được cấp phép."], answer: 1 },
                { text: "Nghĩa vụ của các tổ chức, cá nhân khi tham gia hoạt động tín ngưỡng, tôn giáo là gì?", options: ["Tuân thủ Hiến pháp, pháp luật; tôn trọng quyền tự do tín ngưỡng, không tín ngưỡng của người khác và giữ gìn đoàn kết dân tộc.", "Ép buộc người thân phải bỏ học để theo tà đạo.", "Xây dựng cơ sở thờ tự trái phép trên đất rừng phòng hộ.", "Kì thị, xúc phạm những người khác tôn giáo với mình."], answer: 0 },
                { text: "Đối với các cơ sở thờ tự của tín ngưỡng, tôn giáo (như chùa, nhà thờ, thánh thất, đình, đền hợp pháp), pháp luật Việt Nam có quy định gì?", options: ["Được pháp luật bảo hộ; nghiêm cấm mọi hành vi xâm phạm, đập phá hoặc chiếm đoạt tài sản của cơ sở tín ngưỡng, tôn giáo.", "Ai cũng có thể tự ý tháo dỡ.", "Không được pháp luật bảo vệ.", "Bắt buộc phải chuyển thành cơ sở kinh doanh."], answer: 0 }
            ],
            tfSeed: {
                context: "Về Quyền và nghĩa vụ của công dân về tự do tín ngưỡng và tôn giáo",
                a: "Nhà nước Việt Nam luôn tôn trọng và bảo hộ quyền tự do tín ngưỡng, tôn giáo và quyền tự do không tín ngưỡng, tôn giáo của mọi công dân.",
                b: "Tín ngưỡng, tôn giáo và tệ nạn mê tín dị đoan là hoàn toàn giống nhau.",
                c: "Phương châm hoạt động 'Sống tốt đời, đẹp đạo', đồng hành cùng dân tộc của các tôn giáo tại Việt Nam đã đóng góp to lớn vào công tác an sinh xã hội và xây dựng đất nước.",
                d: "Công dân cần nâng cao cảnh giác, kiên quyết không nghe theo các 'hội thánh', tà đạo trái phép hoạt động lừa đảo, chia rẽ gia đình và xâm phạm an ninh trật tự."
            }
        },
        {
            id: 21,
            title: "Bài 21: Quyền và nghĩa vụ của công dân về tự do đi lại, cư trú",
            coreConcept: "quyền tự do đi lại, cư trú trong nước, ra nước ngoài và từ nước ngoài về nước theo quy định pháp luật",
            mcqSeed: [
                { text: "Theo Điều 23 Hiến pháp năm 2013, công dân có quyền gì đối với việc đi lại và cư trú?", options: ["Công dân có quyền tự do đi lại và cư trú ở trong nước, có quyền ra nước ngoài và từ nước ngoài về nước theo quy định của pháp luật.", "Công dân sinh ra ở tỉnh nào chỉ được sống suốt đời ở tỉnh đó.", "Không được phép thay đổi nơi thường trú khi chuyển công tác.", "Đi du lịch sang tỉnh khác phải xin giấy phép của Toà án."], answer: 0 },
                { text: "Theo Luật Cư trú, nơi công dân sinh sống ổn định, không xác định thời hạn tại một địa điểm nhất định và đã được đăng kí thường trú gọi là gì?", options: ["Nơi tạm trú.", "Nơi thường trú.", "Nơi lưu trú qua đêm.", "Nơi du lịch."], answer: 1 },
                { text: "Trong trường hợp nào sau đây, quyền tự do đi lại và cư trú của công dân bị hạn chế theo quy định của pháp luật?", options: ["Người đang bị áp dụng biện pháp cấm đi khỏi nơi cư trú để phục vụ điều tra, xét xử, người đang chấp hành án phạt tù hoặc khu vực đang bị phong toả cách li y tế, quân sự theo quyết định của cơ quan có thẩm quyền.", "Khi công dân đi làm việc ở khu công nghiệp tỉnh khác.", "Khi học sinh đỗ đại học và chuyển đến ở kí túc xá.", "Khi người dân đi thăm họ hàng vào dịp lễ."], answer: 0 },
                { text: "Nghĩa vụ pháp lí của công dân khi thay đổi nơi sinh sống, học tập hoặc làm việc đến một địa phương mới trong thời gian dài là gì?", options: ["Không cần thông báo với bất kì cơ quan nào.", "Thực hiện đăng kí thường trú hoặc đăng kí tạm trú, khai báo lưu trú theo đúng quy định của Luật Cư trú (trực tiếp tại Công an cấp xã hoặc qua ứng dụng VNeID).", "Tự ý làm giả sổ hộ khẩu.", "Chống đối lực lượng công an kiểm tra cư trú."], answer: 1 },
                { text: "Hành vi vượt biên trái phép qua đường mòn, lối mở mà không làm thủ tục xuất nhập cảnh hợp pháp là vi phạm pháp luật trong lĩnh vực nào?", options: ["Vi phạm quy định pháp luật về xuất cảnh, nhập cảnh và quản lí biên giới quốc gia.", "Thực hiện đúng quyền tự do đi lại.", "Vi phạm luật sở hữu trí tuệ.", "Chỉ vi phạm đạo đức cá nhân."], answer: 0 }
            ],
            tfSeed: {
                context: "Về Quyền và nghĩa vụ của công dân về tự do đi lại và cư trú theo Luật Cư trú",
                a: "Quyền tự do đi lại, cư trú tạo điều kiện cho công dân tự do lựa chọn nơi làm việc, học tập, sinh sống để phát triển bản thân.",
                b: "Công dân có quyền tự do đi vào mọi khu vực biên giới cấm, khu vực quân sự tuyệt mật mà không cần tuân thủ biển báo.",
                c: "Việc ứng dụng Cơ sở dữ liệu quốc gia về dân cư và định danh điện tử (VNeID) giúp công dân thực hiện thủ tục đăng kí thường trú, tạm trú nhanh gọn, thuận tiện, giảm giấy tờ hành chính.",
                d: "Chấp hành nghiêm chỉnh pháp luật về cư trú và xuất nhập cảnh vừa bảo đảm quyền lợi hợp pháp của công dân vừa giúp Nhà nước quản lí dân cư, giữ vững an ninh trật tự xã hội."
            }
        }
    ];

    const questionPrefixes11 = [
        "",
        "Theo kiến thức môn Giáo dục Kinh tế và Pháp luật lớp 11: ",
        "Trong thực tiễn đời sống kinh tế và pháp luật hiện nay: ",
        "Căn cứ vào quy định của Hiến pháp, pháp luật và nội dung bài học: ",
        "Xét trong các tình huống vận dụng thực tế của công dân: ",
        "Dưới góc độ lí luận kinh tế thị trường và nhà nước pháp quyền: "
    ];

    const tfSituations11 = [
        { label: "Nhận định trọng tâm bài học" },
        { label: "Tình huống phân tích thực tiễn số 1" },
        { label: "Tình huống vận dụng kiến thức số 2" },
        { label: "Tình huống tổng hợp nâng cao số 3" },
        { label: "Tình huống thực hành bài học số 4" }
    ];

    const finalKhoi11 = {};

    lessonsKhoi11.forEach(lesson => {
        const fullMcq = [];
        const fullTf = [];

        // Tạo đủ 30 câu MCQ bám sát đúng từng bài học Lớp 11
        for (let i = 0; i < 30; i++) {
            const seed = lesson.mcqSeed[i % lesson.mcqSeed.length];
            const round = Math.floor(i / lesson.mcqSeed.length);
            const prefix = questionPrefixes11[round % questionPrefixes11.length];
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

        // Tạo đủ 20 câu Đúng/Sai bám sát đúng từng bài học Lớp 11
        for (let i = 0; i < 20; i++) {
            const sit = tfSituations11[i % tfSituations11.length];
            const groupNum = i + 1;
            fullTf.push({
                type: 'tf',
                text: `${lesson.tfSeed.context} - Nội dung về ${lesson.coreConcept} (${sit.label} - Mã tình huống ${groupNum}):`,
                options: [
                    { text: `a) (Nhận biết) ${lesson.tfSeed.a}`, answer: true },
                    { text: `b) (Thông hiểu) ${lesson.tfSeed.b}`, answer: false },
                    { text: `c) (Vận dụng) ${lesson.tfSeed.c}`, answer: true },
                    { text: `d) (Vận dụng cao) ${lesson.tfSeed.d}`, answer: true }
                ]
            });
        }

        finalKhoi11[lesson.id] = {
            title: lesson.title,
            exercises: {
                mcq: fullMcq,
                tf: fullTf
            }
        };
    });

    window.dataKhoi11 = finalKhoi11;
    window.appDatabase.khoi11 = finalKhoi11;
})();
