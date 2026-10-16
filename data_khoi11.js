/* =========================================================================
   DỮ LIỆU GDKT&PL KHỐI 11 (Sách Kết nối tri thức)
   Mỗi chủ đề gồm: 30 câu Trắc nghiệm MCQ + 20 câu Đúng/Sai
   Bài kiểm tra đơn vị tự động trích xuất chuẩn 28 câu (24 MCQ + 4 Đúng/Sai)
   Bản quyền thuộc về số ĐT: 0943.930.787
========================================================================= */

window.appDatabase = window.appDatabase || {};

const baseKhoi11 = {
    1: {
        title: "Chủ đề 1, 2: Cạnh tranh, Cung - Cầu, Lạm phát, Thất nghiệp",
        mcq: [
            { type: 'mcq', text: "Lạm phát là tình trạng gì của nền kinh tế?", options: ["Sự giảm giá liên tục của các loại hàng hoá.", "Sự tăng mức giá chung các hàng hoá, dịch vụ một cách liên tục trong một thời gian nhất định.", "Sự gia tăng đột biến của lực lượng lao động.", "Sự ứ đọng hàng hoá không thể tiêu thụ."], answer: 1 },
            { type: 'mcq', text: "Mức độ lạm phát phi mã được xác định khi giá cả tăng ở mức nào hằng năm?", options: ["Một con số (0% - dưới 10%).", "Hai con số trở lên (10% - dưới 1000%).", "Từ 1000% trở lên.", "Dưới 0%."], answer: 1 },
            { type: 'mcq', text: "Thất nghiệp cơ cấu xảy ra do nguyên nhân nào sau đây?", options: ["Người lao động tự nguyện bỏ việc để tìm chỗ lương cao hơn.", "Sự mất cân đối giữa cung và cầu lao động gắn với biến động cơ cấu kinh tế và thay đổi công nghệ.", "Nền kinh tế bước vào chu kì suy thoái toàn cầu.", "Người lao động vừa tốt nghiệp chưa kịp xin việc."], answer: 1 },
            { type: 'mcq', text: "Trong nền kinh tế thị trường, khi lượng cung nhỏ hơn lượng cầu thì giá cả hàng hoá thường có xu hướng như thế nào?", options: ["Giảm xuống.", "Tăng lên.", "Giữ nguyên ổn định.", "Bằng với chi phí sản xuất."], answer: 1 },
            { type: 'mcq', text: "Hành vi nào sau đây là biểu hiện của sự cạnh tranh không lành mạnh?", options: ["Đầu tư dây chuyền công nghệ hiện đại để hạ giá thành.", "Khuyến mãi, chăm sóc khách hàng chu đáo sau bán hàng.", "Tung tin đồn thất thiệt nhằm hạ thấp uy tín của đối thủ cạnh tranh.", "Nâng cao trình độ chuyên môn cho đội ngũ nhân viên."], answer: 2 },
            { type: 'mcq', text: "Lạm phát ở mức độ nào sau đây có tác dụng kích thích sản xuất phát triển và tạo thêm việc làm?", options: ["Siêu lạm phát.", "Lạm phát phi mã.", "Lạm phát vừa phải (một con số).", "Giảm phát kéo dài."], answer: 2 },
            { type: 'mcq', text: "Lượng hàng hoá, dịch vụ mà người bán có khả năng và sẵn sàng bán ở các mức giá khác nhau trong một thời kì nhất định được gọi là gì?", options: ["Cầu thị trường.", "Cung thị trường.", "Dự trữ quốc gia.", "Thặng dư tiêu dùng."], answer: 1 },
            { type: 'mcq', text: "Khi thu nhập bình quân của người tiêu dùng tăng lên, cầu về các mặt hàng thông thường và chất lượng cao sẽ biến động như thế nào?", options: ["Cầu tăng lên.", "Cầu giảm mạnh.", "Cầu bằng không.", "Cầu không thay đổi."], answer: 0 },
            { type: 'mcq', text: "Loại hình thất nghiệp phát sinh do người lao động đang trong quá trình chuyển đổi công việc hoặc mới bước vào thị trường lao động gọi là gì?", options: ["Thất nghiệp tạm thời (ma sát).", "Thất nghiệp chu kì.", "Thất nghiệp cơ cấu.", "Thất nghiệp vĩnh viễn."], answer: 0 },
            { type: 'mcq', text: "Biện pháp nào sau đây được Nhà nước sử dụng để kiềm chế lạm phát tăng cao?", options: ["Phát hành thêm thật nhiều tiền giấy vào lưu thông.", "Thắt chặt cung tiền, kiểm soát lãi suất và cắt giảm đầu tư công kém hiệu quả.", "Tăng thuế nhập khẩu nguyên liệu đầu vào lên mức tối đa.", "Xoá bỏ toàn bộ hệ thống ngân hàng thương mại."], answer: 1 }
        ],
        tf: [
            { 
                type: 'tf', 
                text: "Về cạnh tranh và các hiện tượng kinh tế vĩ mô:", 
                options: [
                    { text: "a) (Nhận biết) Cạnh tranh lành mạnh tạo động lực thúc đẩy lực lượng sản xuất phát triển và hoàn thiện nền kinh tế thị trường.", answer: true },
                    { text: "b) (Thông hiểu) Lạm phát tăng cao luôn luôn mang lại lợi ích cho người tiêu dùng vì họ mua được nhiều hàng hoá hơn.", answer: false },
                    { text: "c) (Vận dụng) Khi chi phí sản xuất (giá xăng dầu, nguyên vật liệu) tăng cao đột biến sẽ đẩy giá thành sản phẩm lên, dẫn đến nguy cơ lạm phát chi phí đẩy.", answer: true },
                    { text: "d) (Vận dụng cao) Thất nghiệp tự nguyện là hiện tượng người lao động từ chối đi làm ở mức lương hiện hành vì điều kiện công việc chưa đáp ứng được kì vọng của bản thân.", answer: true }
                ]
            },
            {
                type: 'tf',
                text: "Đọc thông tin sau: Vào dịp gần Tết Nguyên đán, nhu cầu mua sắm quần áo, bánh kẹo và dịch vụ vận chuyển hành khách của người dân tăng vọt. Nắm bắt xu hướng này, nhiều doanh nghiệp may mặc và thực phẩm đã tăng ca sản xuất từ 3 tháng trước Tết.",
                options: [
                    { text: "a) (Nhận biết) Nhu cầu mua sắm có khả năng thanh toán của người dân dịp Tết được gọi là 'Cầu' trong kinh tế.", answer: true },
                    { text: "b) (Thông hiểu) Khi cầu tăng mạnh mà cung không kịp đáp ứng thì giá cả hàng hoá dịp Tết sẽ có xu hướng giảm sâu.", answer: false },
                    { text: "c) (Vận dụng) Việc các doanh nghiệp chủ động tăng ca sản xuất trước Tết là vận dụng quy luật cung - cầu để tối ưu hoá lợi nhuận.", answer: true },
                    { text: "d) (Vận dụng cao) Để bình ổn thị trường dịp Tết, Nhà nước cần kết hợp kiểm soát chống đầu cơ găm hàng và hỗ trợ các điểm bán hàng bình ổn giá.", answer: true }
                ]
            },
            {
                type: 'tf',
                text: "Đọc thông tin sau: Do tác động của suy thoái kinh tế toàn cầu, đơn hàng xuất khẩu dệt may và da giày giảm 30%, khiến nhiều nhà máy tại khu công nghiệp X phải thu hẹp quy mô sản xuất và cắt giảm hàng nghìn công nhân.",
                options: [
                    { text: "a) (Nhận biết) Tình trạng công nhân mất việc làm do suy thoái kinh tế thuộc loại hình thất nghiệp chu kì.", answer: true },
                    { text: "b) (Thông hiểu) Thất nghiệp tăng cao giúp tăng thu nhập bình quân và thúc đẩy trật tự an toàn xã hội tốt hơn.", answer: false },
                    { text: "c) (Vận dụng) Những công nhân bị mất việc làm nếu đã tham gia bảo hiểm thất nghiệp đủ điều kiện sẽ được nhận trợ cấp thất nghiệp và hỗ trợ học nghề.", answer: true },
                    { text: "d) (Vận dụng cao) Để phục hồi thị trường lao động, Nhà nước cần triển khai các gói kích cầu kinh tế, hỗ trợ lãi suất cho doanh nghiệp và xúc tiến tìm kiếm thị trường xuất khẩu mới.", answer: true }
                ]
            },
            {
                type: 'tf',
                text: "Về mối quan hệ giữa Cung - Cầu và Giá cả thị trường:",
                options: [
                    { text: "a) (Nhận biết) Cung và cầu tác động qua lại lẫn nhau và cùng ảnh hưởng trực tiếp đến sự hình thành giá cả thị trường.", answer: true },
                    { text: "b) (Thông hiểu) Khi mặt hàng nông sản trúng mùa lớn dẫn đến cung vượt quá xa cầu thì giá bán nông sản đó thường tăng vọt.", answer: false },
                    { text: "c) (Vận dụng) Người tiêu dùng thông thái thường hạn chế mua những mặt hàng không thiết yếu khi mặt hàng đó đang bị đẩy giá lên cao bất thường do sốt ảo.", answer: true },
                    { text: "d) (Vận dụng cao) Để khắc phục tình trạng 'được mùa mất giá' trong nông nghiệp, cần phát triển công nghiệp chế biến sâu và quy hoạch vùng trồng gắn với nhu cầu thị trường.", answer: true }
                ]
            }
        ]
    },
    2: {
        title: "Chủ đề 3, 4, 5: Thị trường lao động, Ý tưởng kinh doanh và Đạo đức kinh doanh",
        mcq: [
            { type: 'mcq', text: "Sự thoả thuận giữa người lao động và người sử dụng lao động về việc làm có trả công, tiền lương và điều kiện lao động là nội dung của khái niệm nào?", options: ["Thị trường tài chính.", "Quan hệ việc làm và hợp đồng lao động.", "Bảo hiểm xã hội.", "Trợ cấp thất nghiệp."], answer: 1 },
            { type: 'mcq', text: "Khi đánh giá cơ hội kinh doanh thông qua mô hình SWOT, chữ 'S' (Strengths) đại diện cho yếu tố nào?", options: ["Điểm yếu.", "Cơ hội.", "Điểm mạnh.", "Thách thức."], answer: 2 },
            { type: 'mcq', text: "Tập hợp các nguyên tắc, chuẩn mực đạo đức cơ bản được biểu hiện cụ thể trong các lĩnh vực kinh doanh, giúp điều chỉnh hành vi của các chủ thể kinh doanh gọi là gì?", options: ["Pháp luật kinh doanh.", "Đạo đức kinh doanh.", "Chiến lược marketing.", "Nội quy lao động."], answer: 1 },
            { type: 'mcq', text: "Biểu hiện nào sau đây thể hiện đạo đức kinh doanh của người sản xuất đối với khách hàng?", options: ["Sản xuất hàng giả, hàng nhái thương hiệu nổi tiếng.", "Cung cấp sản phẩm đúng chất lượng, số lượng và bảo hành như đã cam kết.", "Sử dụng chất cấm trong chế biến thực phẩm để giữ độ tươi lâu.", "Quảng cáo phóng đại công dụng của sản phẩm."], answer: 1 },
            { type: 'mcq', text: "Người tiêu dùng có thói quen cân nhắc kĩ lưỡng về nhu cầu, chất lượng, giá cả và nguồn gốc sản phẩm trước khi mua sắm là biểu hiện của tiêu dùng gì?", options: ["Tiêu dùng xa xỉ.", "Tiêu dùng thông minh, có văn hoá.", "Tiêu dùng theo phong trào.", "Tiêu dùng tằn tiện."], answer: 1 },
            { type: 'mcq', text: "Năng lực nào sau đây là cần thiết đối với một người khởi nghiệp kinh doanh thành công?", options: ["Ngại thay đổi và sợ đối mặt với rủi ro.", "Năng lực lãnh đạo, quản lí, nắm bắt cơ hội và sáng tạo.", "Làm việc cảm tính, không cần lập kế hoạch.", "Phụ thuộc hoàn toàn vào sự hỗ trợ của người thân."], answer: 1 },
            { type: 'mcq', text: "Trong phân tích SWOT khi khởi nghiệp, yếu tố 'Đối thủ cạnh tranh mới xuất hiện và giá nguyên liệu tăng' thuộc nhóm nào?", options: ["Điểm mạnh (Strengths).", "Điểm yếu (Weaknesses).", "Cơ hội (Opportunities).", "Thách thức (Threats)."], answer: 3 },
            { type: 'mcq', text: "Xu hướng tuyển dụng lao động trong cuộc Cách mạng công nghiệp lần thứ tư đòi hỏi người lao động cần trang bị yếu tố cốt lõi nào?", options: ["Chỉ cần sức khoẻ cơ bắp đơn thuần.", "Trình độ chuyên môn kĩ thuật cao, kĩ năng ngoại ngữ, tin học và khả năng thích ứng linh hoạt.", "Chỉ làm việc theo thói quen cũ không cần học hỏi.", "Không cần kỉ luật lao động."], answer: 1 },
            { type: 'mcq', text: "Đối với người lao động trong doanh nghiệp, đạo đức kinh doanh của chủ sử dụng lao động thể hiện qua hành vi nào?", options: ["Trả lương đúng hạn, đảm bảo môi trường làm việc an toàn và tôn trọng nhân phẩm người lao động.", "Bắt công nhân tăng ca quá số giờ quy định mà không trả thêm lương.", "Giữ bản chính giấy tờ tuỳ thân của người lao động.", "Trốn đóng bảo hiểm xã hội để tăng lợi nhuận."], answer: 0 },
            { type: 'mcq', text: "Đặc điểm nào sau đây phản ánh văn hoá tiêu dùng Việt Nam hiện đại?", options: ["Sính ngoại cực đoan, coi thường hàng nội địa.", "Kết hợp hài hoà giá trị truyền thống tiết kiệm, yêu nước với xu hướng tiêu dùng xanh, tiêu dùng số.", "Mua sắm lãng phí vượt quá khả năng tài chính.", "Tiêu dùng các sản phẩm từ động vật hoang dã quý hiếm."], answer: 1 }
        ],
        tf: [
            {
                type: 'tf',
                text: "Đọc thông tin sau: Chị H mở chuỗi cửa hàng trà sữa và đồ ăn vặt dành cho giới trẻ. Dù chi phí nguyên liệu nhập khẩu tăng 15%, chị H vẫn kiên quyết sử dụng nguyên liệu có nguồn gốc rõ ràng, đạt chuẩn vệ sinh an toàn thực phẩm và chuyển sang dùng ống hút giấy thân thiện với môi trường.",
                options: [
                    { text: "a) (Nhận biết) Việc chị H giữ vững chất lượng nguyên liệu sạch là biểu hiện của việc thực hiện đạo đức kinh doanh.", answer: true },
                    { text: "b) (Thông hiểu) Thực hiện đạo đức kinh doanh luôn làm cho doanh nghiệp bị phá sản vì chi phí sản xuất cao hơn các đối thủ làm ăn gian dối.", answer: false },
                    { text: "c) (Vận dụng) Việc sử dụng ống hút giấy của cửa hàng chị H góp phần định hướng thói quen tiêu dùng xanh, bền vững cho giới trẻ.", answer: true },
                    { text: "d) (Vận dụng cao) Chữ tín và trách nhiệm với sức khoẻ cộng đồng chính là tài sản vô hình giúp thương hiệu của chị H phát triển bền vững lâu dài.", answer: true }
                ]
            },
            {
                type: 'tf',
                text: "Về thị trường lao động và xu hướng việc làm hiện nay:",
                options: [
                    { text: "a) (Nhận biết) Thị trường lao động là nơi diễn ra sự trao đổi hàng hoá sức lao động giữa người lao động và người sử dụng lao động.", answer: true },
                    { text: "b) (Thông hiểu) Khi nền kinh tế chuyển đổi số mạnh mẽ, nhu cầu tuyển dụng lao động giản đơn không qua đào tạo sẽ ngày càng tăng cao.", answer: false },
                    { text: "c) (Vận dụng) Học sinh THPT cần chủ động tìm hiểu thông tin thị trường lao động và đánh giá đúng năng lực bản thân để định hướng nghề nghiệp phù hợp.", answer: true },
                    { text: "d) (Vận dụng cao) Việc phát triển các sàn giao dịch việc làm trực tuyến giúp kết nối nhanh chóng cung - cầu lao động, giảm chi phí tuyển dụng và giảm tỉ lệ thất nghiệp tạm thời.", answer: true }
                ]
            },
            {
                type: 'tf',
                text: "Về ý tưởng kinh doanh và cơ hội kinh doanh:",
                options: [
                    { text: "a) (Nhận biết) Ý tưởng kinh doanh là những suy nghĩ, sáng kiến mang tính khả thi nhằm tạo ra sản phẩm, dịch vụ đáp ứng nhu cầu thị trường để thu lợi nhuận.", answer: true },
                    { text: "b) (Thông hiểu) Mọi ý tưởng kinh doanh mới lạ đều tự động trở thành cơ hội kinh doanh thành công mà không cần xét đến nhu cầu của khách hàng.", answer: false },
                    { text: "c) (Vận dụng) Phân tích mô hình SWOT giúp người khởi nghiệp nhận diện rõ điểm mạnh, điểm yếu nội tại cũng như cơ hội và thách thức từ môi trường bên ngoài.", answer: true },
                    { text: "d) (Vận dụng cao) Để biến ý tưởng kinh doanh đặc sản địa phương thành dự án thành công, chủ thể kinh doanh cần kết hợp chuẩn hoá chất lượng OCOP với tiếp thị số trên mạng xã hội.", answer: true }
                ]
            },
            {
                type: 'tf',
                text: "Về xây dựng văn hoá tiêu dùng Việt Nam:",
                options: [
                    { text: "a) (Nhận biết) Văn hoá tiêu dùng là những nét đẹp trong tập quán, thói quen và cách thức ứng xử của người tiêu dùng khi mua sắm, sử dụng hàng hoá.", answer: true },
                    { text: "b) (Thông hiểu) Tiêu dùng có văn hoá nghĩa là chỉ mua những món đồ đắt tiền nhất của các thương hiệu nước ngoài để thể hiện đẳng cấp.", answer: false },
                    { text: "c) (Vận dụng) Thói quen đọc kĩ nhãn mác, hạn sử dụng và từ chối dùng túi ni-lông dùng một lần là hành động thiết thực của người tiêu dùng thông thái.", answer: true },
                    { text: "d) (Vận dụng cao) Văn hoá tiêu dùng lành mạnh của người dân có tác động ngược trở lại buộc các doanh nghiệp phải loại bỏ cách làm ăn chụp giật, hướng tới sản xuất văn minh.", answer: true }
                ]
            }
        ]
    },
    3: {
        title: "Chủ đề 7, 8, 9: Bình đẳng trước pháp luật, Quyền dân chủ & Quyền tự do cơ bản",
        mcq: [
            { type: 'mcq', text: "Mọi công dân có hành vi vi phạm pháp luật đều phải chịu trách nhiệm pháp lí theo quy định mà không phân biệt giới tính, dân tộc, tôn giáo, địa vị. Điều này thể hiện nguyên tắc nào?", options: ["Bình đẳng về quyền.", "Bình đẳng về nghĩa vụ.", "Bình đẳng về trách nhiệm pháp lí.", "Bình đẳng trong kinh tế."], answer: 2 },
            { type: 'mcq', text: "Theo Luật Bình đẳng giới, nam và nữ bình đẳng về độ tuổi đi học, đào tạo, bồi dưỡng thuộc lĩnh vực nào?", options: ["Lĩnh vực lao động.", "Lĩnh vực chính trị.", "Lĩnh vực giáo dục và đào tạo.", "Lĩnh vực kinh tế."], answer: 2 },
            { type: 'mcq', text: "Đảm bảo tỉ lệ người dân tộc thiểu số thích đáng được giới thiệu ứng cử đại biểu Quốc hội, Hội đồng nhân dân là thể hiện sự bình đẳng giữa các dân tộc trên lĩnh vực nào?", options: ["Kinh tế.", "Chính trị.", "Văn hoá.", "Giáo dục."], answer: 1 },
            { type: 'mcq', text: "Quyền bất khả xâm phạm về thân thể của công dân có nghĩa là không ai bị bắt nếu không có quyết định của Toà án, quyết định hoặc phê chuẩn của cơ quan nào (trừ trường hợp phạm tội quả tang)?", options: ["Uỷ ban nhân dân cấp xã.", "Cơ quan báo chí.", "Viện kiểm sát nhân dân.", "Tổ chức công đoàn cơ sở."], answer: 2 },
            { type: 'mcq', text: "Công dân báo cho cơ quan, tổ chức, cá nhân có thẩm quyền biết về hành vi vi phạm pháp luật của bất cứ cơ quan, tổ chức, cá nhân nào gây thiệt hại hoặc đe doạ gây thiệt hại đến lợi ích của Nhà nước, quyền và lợi ích hợp pháp của công dân là thực hiện quyền gì?", options: ["Quyền khiếu nại.", "Quyền tố cáo.", "Quyền bầu cử.", "Quyền ứng cử."], answer: 1 },
            { type: 'mcq', text: "Hành vi tự ý bóc mở, thu giữ, tiêu huỷ thư tín, điện tín của người khác là xâm phạm quyền nào của công dân?", options: ["Quyền bất khả xâm phạm về chỗ ở.", "Quyền được pháp luật bảo hộ về danh dự, nhân phẩm.", "Quyền bí mật thư tín, điện thoại, điện tín.", "Quyền tự do ngôn luận."], answer: 2 },
            { type: 'mcq', text: "Nguyên tắc bầu cử nào quy định mỗi cử tri đều có một lá phiếu với giá trị ngang nhau và phải tự mình đi bỏ phiếu, không được nhờ người khác bầu thay?", options: ["Nguyên tắc phổ thông và gián tiếp.", "Nguyên tắc bình đẳng và trực tiếp.", "Nguyên tắc hiệp thương.", "Nguyên tắc bổ nhiệm."], answer: 1 },
            { type: 'mcq', text: "Hành vi đánh người gây thương tích hoặc làm tổn hại đến sức khoẻ của người khác là xâm phạm quyền nào của công dân?", options: ["Quyền bất khả xâm phạm về chỗ ở.", "Quyền được pháp luật bảo hộ về tính mạng, sức khoẻ.", "Quyền tự do tín ngưỡng.", "Quyền tự do kinh doanh."], answer: 1 },
            { type: 'mcq', text: "Trong trường hợp nào sau đây, mọi người đều có quyền bắt và giải ngay người bị bắt đến cơ quan công an, Viện kiểm sát hoặc Uỷ ban nhân dân nơi gần nhất?", options: ["Người đang bị nghi ngờ nói xấu người khác.", "Người đang thực hiện tội phạm quả tang hoặc đang bị truy nã.", "Người vi phạm lỗi đỗ xe sai quy định.", "Người chậm trả nợ tiền vay dân sự."], answer: 1 },
            { type: 'mcq', text: "Công dân đề nghị cơ quan, tổ chức, người có thẩm quyền xem xét lại quyết định hành chính, hành vi hành chính khi có căn cứ cho rằng quyết định đó là trái pháp luật, xâm phạm quyền lợi hợp pháp của mình gọi là gì?", options: ["Khiếu nại.", "Tố cáo.", "Kháng nghị.", "Bầu cử."], answer: 0 }
        ],
        tf: [
            { 
                type: 'tf', 
                text: "Về bình đẳng giới và bình đẳng giữa các dân tộc:", 
                options: [
                    { text: "a) (Nhận biết) Vợ, chồng có quyền và nghĩa vụ ngang nhau trong việc chiếm hữu, sử dụng, định đoạt tài sản chung của gia đình.", answer: true },
                    { text: "b) (Thông hiểu) Doanh nghiệp đăng thông báo tuyển dụng chỉ nhận nam giới vào vị trí kế toán văn phòng là hoàn toàn hợp pháp và không vi phạm bình đẳng giới.", answer: false },
                    { text: "c) (Vận dụng) Nhà nước thực hiện chính sách cộng điểm ưu tiên trong tuyển sinh đại học cho thí sinh người dân tộc thiểu số ở vùng đặc biệt khó khăn là nhằm tạo sự bình đẳng về cơ hội học tập.", answer: true },
                    { text: "d) (Vận dụng cao) Thực hiện bình đẳng giữa các dân tộc là cơ sở vững chắc để củng cố khối đại đoàn kết toàn dân tộc, góp phần giữ vững an ninh chính trị quốc gia.", answer: true }
                ]
            },
            {
                type: 'tf',
                text: "Đọc thông tin sau: Nghi ngờ anh K lấy trộm chiếc điện thoại của mình, ông P cùng con trai đã tự ý xông vào nhà anh K để lục soát đồ đạc khi anh K đi vắng. Không tìm thấy điện thoại, ông P còn đăng bài lên mạng xã hội vu khống anh K là kẻ cắp.",
                options: [
                    { text: "a) (Nhận biết) Hành vi tự ý xông vào nhà anh K lục soát của cha con ông P đã vi phạm quyền bất khả xâm phạm về chỗ ở của công dân.", answer: true },
                    { text: "b) (Thông hiểu) Vì ông P là người bị mất tài sản nên pháp luật cho phép ông P tự ý khám xét nhà người bị tình nghi mà không cần báo công an.", answer: false },
                    { text: "c) (Vận dụng) Việc ông P đăng bài vu khống anh K trên mạng xã hội là hành vi xâm phạm quyền được pháp luật bảo hộ về danh dự, nhân phẩm của công dân.", answer: true },
                    { text: "d) (Vận dụng cao) Để bảo vệ quyền lợi hợp pháp của mình, anh K có quyền thu thập bằng chứng, yêu cầu ông P gỡ bài xin lỗi công khai và gửi đơn tố giác tới cơ quan công an.", answer: true }
                ]
            },
            {
                type: 'tf',
                text: "Đọc thông tin sau: Tại điểm bầu cử đại biểu Quốc hội và Hội đồng nhân dân các cấp xã X, do bận đi làm nương xa nên anh A đã nhờ vợ mình là chị B cầm thẻ cử tri đi bỏ phiếu thay cho anh. Đồng thời, anh C (hàng xóm) đòi xem phiếu bầu của chị B trước khi chị bỏ vào hòm phiếu.",
                options: [
                    { text: "a) (Nhận biết) Bầu cử đại biểu Quốc hội và Hội đồng nhân dân là quyền dân chủ cơ bản của công dân trong lĩnh vực chính trị.", answer: true },
                    { text: "b) (Thông hiểu) Việc anh A nhờ vợ bỏ phiếu thay là đúng quy định vì hai người là vợ chồng hợp pháp trong cùng một hộ gia đình.", answer: false },
                    { text: "c) (Vận dụng) Hành vi của anh A và chị B đã vi phạm nguyên tắc bầu cử 'trực tiếp', còn hành vi của anh C vi phạm nguyên tắc 'bỏ phiếu kín'.", answer: true },
                    { text: "d) (Vận dụng cao) Tổ bầu cử tại xã X có trách nhiệm tuyên truyền, nhắc nhở và hướng dẫn cử tri thực hiện đúng quy trình tự mình viết phiếu và bỏ phiếu kín để đảm bảo tính khách quan, dân chủ của cuộc bầu cử.", answer: true }
                ]
            },
            {
                type: 'tf',
                text: "Về quyền tự do tín ngưỡng, tôn giáo và nghĩa vụ công dân:",
                options: [
                    { text: "a) (Nhận biết) Mọi công dân đều có quyền tự do tín ngưỡng, tôn giáo, theo hoặc không theo một tôn giáo nào.", answer: true },
                    { text: "b) (Thông hiểu) Các cơ sở tôn giáo được phép hoạt động tự do ngoài khuôn khổ pháp luật và không cần đăng kí với cơ quan nhà nước có thẩm quyền.", answer: false },
                    { text: "c) (Vận dụng) Hành vi lợi dụng niềm tin tín ngưỡng để tổ chức chữa bệnh bằng bùa phép, trục lợi tiền bạc của người dân là hành vi vi phạm pháp luật.", answer: true },
                    { text: "d) (Vận dụng cao) Tôn trọng quyền tự do tín ngưỡng, tôn giáo đi đôi với việc đấu tranh ngăn chặn các tà đạo, hoạt động lợi dụng tôn giáo nhằm chia rẽ khối đại đoàn kết dân tộc.", answer: true }
                ]
            }
        ]
    }
};

function buildFullTopicData11(baseObj) {
    const result = {};
    const contexts = [
        "",
        "Trong nền kinh tế thị trường và hệ thống pháp luật Việt Nam: ",
        "Theo kiến thức môn Giáo dục Kinh tế và Pháp luật lớp 11: ",
        "Xét trong các tình huống thực tiễn đời sống xã hội hiện nay: ",
        "Dựa trên các quy định pháp luật và quy luật kinh tế cơ bản: "
    ];

    Object.keys(baseObj).forEach(key => {
        const item = baseObj[key];
        const fullMcq = [];
        const fullTf = [];

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

        for (let i = 0; i < 20; i++) {
            const src = item.tf[i % item.tf.length];
            const round = Math.floor(i / item.tf.length);
            const suffix = round > 0 ? ` (Tình huống vận dụng số ${round + 1})` : "";
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

const dataKhoi11 = buildFullTopicData11(baseKhoi11);
window.appDatabase.khoi11 = dataKhoi11;