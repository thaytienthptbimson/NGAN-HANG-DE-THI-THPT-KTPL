/* =========================================================================
   DATABASE GIÁO DỤC KINH TẾ VÀ PHÁP LUẬT (Cấu trúc đề thi THPT 2026)
   Cấp độ nhận thức: Nhận biết -> Thông hiểu -> Vận dụng -> Vận dụng cao
   Bản quyền: Thầy Phạm Văn Tiến (Tổ trưởng chuyên môn - ĐT: 0943.930.787)
========================================================================= */

const appDatabase = {
    khoi10: {},
    khoi11: {},
    khoi12: {},
    mocktest: {}
};

// ================= DỮ LIỆU LỚP 10 =================
appDatabase.khoi10[1] = {
    title: "Chủ đề 1: Nền kinh tế và các chủ thể của nền kinh tế",
    exercises: {
        mcq: [
            // Nhận biết
            { type: 'mcq', text: "Trong các hoạt động kinh tế cơ bản, hoạt động nào tạo ra sản phẩm vật chất và tinh thần đáp ứng nhu cầu của con người?", options: ["Hoạt động sản xuất.", "Hoạt động phân phối.", "Hoạt động trao đổi.", "Hoạt động tiêu dùng."], answer: 0 },
            { type: 'mcq', text: "Chủ thể nào đóng vai trò quản lý vĩ mô nền kinh tế, khắc phục những khuyết tật của kinh tế thị trường?", options: ["Chủ thể sản xuất.", "Chủ thể trung gian.", "Chủ thể nhà nước.", "Chủ thể tiêu dùng."], answer: 2 },
            // Thông hiểu
            { type: 'mcq', text: "Mục đích lớn nhất của chủ thể sản xuất khi tham gia vào nền kinh tế là gì?", options: ["Tối đa hóa lợi ích tiêu dùng.", "Tối đa hóa lợi nhuận.", "Thực hiện các chính sách an sinh xã hội.", "Phân phối lại thu nhập cho xã hội."], answer: 1 },
            { type: 'mcq', text: "Vì sao hoạt động phân phối - trao đổi được coi là cầu nối giữa sản xuất và tiêu dùng?", options: ["Vì nó trực tiếp tạo ra của cải vật chất.", "Vì nó quyết định việc phân chia các yếu tố sản xuất và đưa sản phẩm đến tay người tiêu dùng.", "Vì nó làm tiêu hao hoàn toàn giá trị của sản phẩm.", "Vì nó thuộc quyền quản lý tuyệt đối của Nhà nước."], answer: 1 },
            // Vận dụng
            { type: 'mcq', text: "Việc người tiêu dùng lựa chọn sử dụng các sản phẩm thân thiện với môi trường, nói không với rác thải nhựa sẽ có tác động tích cực nào đến chủ thể sản xuất?", options: ["Buộc chủ thể sản xuất phải tăng giá bán sản phẩm cũ.", "Định hướng chủ thể sản xuất chuyển đổi sang sản xuất xanh, bền vững.", "Làm cho các chủ thể sản xuất bị phá sản hàng loạt.", "Không có bất kỳ tác động nào đến quyết định sản xuất."], answer: 1 },
            // Vận dụng cao
            { type: 'mcq', text: "Khi nền kinh tế có dấu hiệu suy thoái, Nhà nước giảm thuế thu nhập doanh nghiệp và tăng chi tiêu công. Quyết định này thể hiện vai trò gì của chủ thể Nhà nước?", options: ["Trực tiếp cạnh tranh với các doanh nghiệp tư nhân.", "Chỉ đạo các doanh nghiệp phải sản xuất mặt hàng gì.", "Điều tiết kinh tế vĩ mô, kích thích sản xuất và tiêu dùng để phục hồi kinh tế.", "Xóa bỏ hoàn toàn quy luật cung - cầu của thị trường."], answer: 2 }
        ],
        tf: [
            { type: 'tf', text: "Nhận định về Ngân sách nhà nước và Thuế:", options: [
                { text: "a) (Nhận biết) Thuế là khoản nộp mang tính tự nguyện của các tổ chức, cá nhân cho Nhà nước.", answer: false }, 
                { text: "b) (Thông hiểu) Ngân sách nhà nước là quỹ tiền tệ tập trung lớn nhất của Nhà nước để duy trì bộ máy và thực hiện các chức năng kinh tế - xã hội.", answer: true }, 
                { text: "c) (Vận dụng) Khi thu nhập của cá nhân tăng lên mức phải nộp thuế thu nhập cá nhân, việc trốn thuế là hành vi vi phạm pháp luật và thiếu trách nhiệm công dân.", answer: true }, 
                { text: "d) (Vận dụng cao) Nhà nước sử dụng công cụ thuế tiêu thụ đặc biệt (đánh mức thuế rất cao) đối với mặt hàng rượu, bia, thuốc lá nhằm mục đích duy nhất là tăng thu cho ngân sách quốc gia bằng mọi giá.", answer: false } 
            ]}
        ]
    }
};

appDatabase.khoi10[2] = {
    title: "Chủ đề 2: Hệ thống chính trị & Pháp luật CHXHCN Việt Nam",
    exercises: {
        mcq: [
            { type: 'mcq', text: "Hệ thống chính trị nước CHXHCN Việt Nam hiện nay do tổ chức nào lãnh đạo?", options: ["Mặt trận Tổ quốc Việt Nam.", "Đảng Cộng sản Việt Nam.", "Quốc hội.", "Chính phủ."], answer: 1 },
            { type: 'mcq', text: "Cơ quan quyền lực nhà nước cao nhất của nước Cộng hoà xã hội chủ nghĩa Việt Nam là", options: ["Chính phủ.", "Tòa án nhân dân tối cao.", "Quốc hội.", "Chủ tịch nước."], answer: 2 },
            { type: 'mcq', text: "Đặc trưng cơ bản nào của pháp luật thể hiện ở chỗ pháp luật do Nhà nước ban hành và được bảo đảm thực hiện bằng sức mạnh của Nhà nước?", options: ["Tính quy phạm phổ biến.", "Tính quyền lực, bắt buộc chung.", "Tính xác định chặt chẽ về hình thức.", "Tính lịch sử, giai cấp."], answer: 1 },
            { type: 'mcq', text: "Trong hệ thống văn bản quy phạm pháp luật Việt Nam, văn bản nào có hiệu lực pháp lý cao nhất?", options: ["Bộ luật Dân sự.", "Luật Đất đai.", "Nghị định của Chính phủ.", "Hiến pháp."], answer: 3 },
            { type: 'mcq', text: "Việc công dân tuân thủ luật giao thông đường bộ khi tham gia giao thông là hình thức thực hiện pháp luật nào?", options: ["Sử dụng pháp luật.", "Thi hành pháp luật.", "Tuân thủ pháp luật.", "Áp dụng pháp luật."], answer: 2 }
        ],
        tf: [
            { type: 'tf', text: "Về thực hiện pháp luật và vi phạm pháp luật:", options: [
                { text: "a) (Nhận biết) Có 4 hình thức thực hiện pháp luật bao gồm: Tuân thủ PL, Thi hành PL, Sử dụng PL và Áp dụng PL.", answer: true },
                { text: "b) (Thông hiểu) Vi phạm hình sự là những hành vi nguy hiểm cho xã hội, bị coi là tội phạm và phải chịu hình phạt.", answer: true },
                { text: "c) (Vận dụng) Việc một người đi xe máy vượt đèn đỏ gây tai nạn giao thông nghiêm trọng chỉ phải chịu trách nhiệm hành chính.", answer: false },
                { text: "d) (Vận dụng cao) Áp dụng pháp luật là hình thức thực hiện pháp luật mà mọi cá nhân, tổ chức đều có quyền tự mình thực hiện để giải quyết các tranh chấp dân sự.", answer: false }
            ]}
        ]
    }
};

// ================= DỮ LIỆU LỚP 11 =================
appDatabase.khoi11[1] = {
    title: "Chủ đề 1: Cạnh tranh, Cung cầu, Lạm phát và Thất nghiệp",
    exercises: {
        mcq: [
            // Nhận biết
            { type: 'mcq', text: "Lạm phát là hiện tượng kinh tế mà trong đó", options: ["mức giá chung của nền kinh tế giảm xuống liên tục.", "mức giá chung của nền kinh tế tăng lên trong một khoảng thời gian nhất định.", "tỷ lệ thất nghiệp tăng cao.", "thu nhập thực tế của người dân tăng lên."], answer: 1 },
            { type: 'mcq', text: "Trong nền kinh tế thị trường, thất nghiệp chu kỳ thường xảy ra khi nào?", options: ["Khi có sự thay đổi về cơ cấu ngành nghề.", "Khi người lao động tự nguyện bỏ việc để tìm việc mới.", "Khi nền kinh tế rơi vào tình trạng suy thoái.", "Khi sinh viên vừa mới tốt nghiệp chưa tìm được việc."], answer: 2 },
            // Thông hiểu
            { type: 'mcq', text: "Nguyên nhân sâu xa của cạnh tranh trong nền kinh tế thị trường là gì?", options: ["Sự độc quyền của nhà nước.", "Sự tồn tại của nhiều chủ thể sản xuất độc lập có lợi ích kinh tế khác nhau.", "Sự can thiệp quá mức của chính quyền địa phương.", "Sự tự nguyện chia sẻ lợi nhuận của các doanh nghiệp."], answer: 1 },
            { type: 'mcq', text: "Theo quy luật cung - cầu, khi cầu tăng, cung không đổi thì giá cả thị trường sẽ biến động như thế nào?", options: ["Giá cả giảm.", "Giá cả không đổi.", "Giá cả tăng.", "Giá cả bằng với chi phí sản xuất."], answer: 2 },
            // Vận dụng
            { type: 'mcq', text: "Để kiềm chế lạm phát do chi phí đẩy, Nhà nước thường áp dụng biện pháp nào sau đây?", options: ["Tăng cung tiền ồ ạt ra thị trường.", "Tăng thuế nhập khẩu nguyên vật liệu đầu vào.", "Giảm thuế, hỗ trợ vốn hoặc bình ổn giá các mặt hàng thiết yếu (xăng dầu, điện).", "Đóng cửa biên giới, cấm nhập khẩu."], answer: 2 },
            // Vận dụng cao
            { type: 'mcq', text: "Một doanh nghiệp liên tục hạ giá bán sản phẩm xuống dưới mức giá thành sản xuất để triệt hạ đối thủ, sau đó lại nâng giá lên mức độc quyền. Hành vi này thể hiện điều gì?", options: ["Cạnh tranh lành mạnh, mang lại lợi ích lâu dài cho người tiêu dùng.", "Cạnh tranh không lành mạnh, vi phạm pháp luật và phá hoại môi trường kinh doanh.", "Sự nhạy bén, linh hoạt để tối ưu hóa nguồn lực sản xuất.", "Sự tuân thủ tuyệt đối quy luật cung cầu."], answer: 1 }
        ],
        tf: [
            { type: 'tf', text: "Về hiện tượng lạm phát và thất nghiệp trong nền kinh tế:", options: [
                { text: "a) (Nhận biết) Thất nghiệp cơ cấu là loại thất nghiệp xảy ra do sự mất cân đối giữa kỹ năng của người lao động và nhu cầu của nhà tuyển dụng.", answer: true },
                { text: "b) (Thông hiểu) Lạm phát phi mã (từ 10% đến 99%/năm) làm cho đồng tiền mất giá nhanh chóng, gây rối loạn các hoạt động kinh tế - xã hội.", answer: true },
                { text: "c) (Vận dụng) Để giảm bớt tình trạng thất nghiệp cơ cấu, Nhà nước chỉ cần tăng cường phát tiền trợ cấp thất nghiệp mà không cần đào tạo lại nghề.", answer: false },
                { text: "d) (Vận dụng cao) Trong điều kiện bình thường, lạm phát ở mức độ vừa phải (dưới 5%) luôn mang lại tác động hoàn toàn tiêu cực, làm đình trệ mọi hoạt động đầu tư và sản xuất.", answer: false }
            ]}
        ]
    }
};

appDatabase.khoi11[2] = {
    title: "Chủ đề 2: Quyền bình đẳng của công dân",
    exercises: {
        mcq: [
            { type: 'mcq', text: "Theo Hiến pháp Việt Nam, công dân bình đẳng trước pháp luật có nghĩa là gì?", options: ["Mọi công dân đều có mức thu nhập như nhau.", "Mọi công dân không bị phân biệt đối xử trong việc hưởng quyền, thực hiện nghĩa vụ và chịu trách nhiệm pháp lý.", "Chỉ có những người làm việc trong cơ quan nhà nước mới được pháp luật bảo vệ.", "Mọi công dân đều được miễn trừ hình phạt khi vi phạm pháp luật."], answer: 1 },
            { type: 'mcq', text: "Bình đẳng trong hôn nhân và gia đình được hiểu là", options: ["người chồng có quyền quyết định mọi vấn đề lớn trong nhà.", "vợ, chồng bình đẳng với nhau, có quyền và nghĩa vụ ngang nhau về mọi mặt trong gia đình.", "con trưởng có quyền thừa kế toàn bộ tài sản.", "người vợ phải chịu trách nhiệm chính về tài chính."], answer: 1 },
            { type: 'mcq', text: "Bình đẳng giữa các dân tộc ở Việt Nam được thể hiện trên các lĩnh vực nào?", options: ["Chính trị, kinh tế, văn hóa, xã hội.", "Chỉ trong lĩnh vực kinh tế và quốc phòng.", "Chỉ trong lĩnh vực văn hóa và tín ngưỡng.", "Chỉ áp dụng đối với các dân tộc thiểu số vùng cao."], answer: 0 },
            { type: 'mcq', text: "Việc nhà nước thực hiện chính sách ưu tiên cộng điểm thi đại học cho học sinh là người dân tộc thiểu số thể hiện điều gì?", options: ["Sự phân biệt đối xử không công bằng giữa các dân tộc.", "Sự bất bình đẳng về quyền học tập.", "Sự quan tâm, tạo điều kiện để các dân tộc có cơ hội vươn lên, thực hiện bình đẳng thực chất về giáo dục.", "Sự vi phạm nguyên tắc công bằng của pháp luật."], answer: 2 },
            { type: 'mcq', text: "Một công ty từ chối tuyển dụng ứng viên nữ vào vị trí quản lý chỉ vì lý do giới tính là hành vi vi phạm quyền bình đẳng trên lĩnh vực nào?", options: ["Bình đẳng trong kinh doanh.", "Bình đẳng giới trong lĩnh vực lao động.", "Bình đẳng trong dân sự.", "Bình đẳng trong hôn nhân."], answer: 1 }
        ],
        tf: [
            { type: 'tf', text: "Về quyền bình đẳng của công dân trước pháp luật:", options: [
                { text: "a) (Nhận biết) Bất kì công dân nào vi phạm pháp luật đều phải chịu trách nhiệm pháp lý theo quy định.", answer: true },
                { text: "b) (Thông hiểu) Trách nhiệm pháp lý được áp dụng giống nhau đối với mọi người mà không phân biệt chức vụ, địa vị xã hội khi có hành vi vi phạm tương đương.", answer: true },
                { text: "c) (Vận dụng) Bình đẳng về quyền có nghĩa là mọi công dân đều bắt buộc phải tham gia vào mọi cấp quản lý của Nhà nước.", answer: false },
                { text: "d) (Vận dụng cao) Việc áp dụng các khung hình phạt nặng nhẹ khác nhau đối với người trưởng thành và người chưa thành niên khi phạm cùng một tội là sự vi phạm nguyên tắc công dân bình đẳng trước pháp luật.", answer: false }
            ]}
        ]
    }
};

// ================= DỮ LIỆU LỚP 12 =================
appDatabase.khoi12[1] = {
    title: "Chủ đề 1: Tăng trưởng, phát triển kinh tế và Hội nhập quốc tế",
    exercises: {
        mcq: [
            // Nhận biết
            { type: 'mcq', text: "Tăng trưởng kinh tế được hiểu là sự gia tăng về mặt nào của nền kinh tế?", options: ["Sự gia tăng mức sống của dân cư.", "Sự gia tăng quy mô sản lượng (GDP/GNP) của nền kinh tế trong một thời kỳ nhất định.", "Sự gia tăng chất lượng giáo dục và y tế.", "Sự thay đổi cơ cấu kinh tế theo hướng hiện đại."], answer: 1 },
            { type: 'mcq', text: "Chỉ số phát triển con người (HDI) đánh giá sự phát triển dựa trên ba tiêu chí cơ bản nào?", options: ["Thu nhập, sức khỏe (tuổi thọ), giáo dục.", "Kinh tế, quân sự, ngoại giao.", "Môi trường, công nghệ, dân số.", "Việc làm, thất nghiệp, lạm phát."], answer: 0 },
            // Thông hiểu
            { type: 'mcq', text: "Sự khác biệt căn bản giữa 'tăng trưởng kinh tế' và 'phát triển kinh tế' là gì?", options: ["Tăng trưởng kinh tế bao hàm phát triển kinh tế.", "Phát triển kinh tế chỉ nói về sự thay đổi cơ cấu kinh tế.", "Phát triển kinh tế bao gồm tăng trưởng kinh tế gắn liền với tiến bộ xã hội và cơ cấu kinh tế hợp lý.", "Tăng trưởng kinh tế chỉ đo lường sự giảm bớt ô nhiễm môi trường."], answer: 2 },
            { type: 'mcq', text: "Tổ chức Thương mại Thế giới (WTO) mà Việt Nam gia nhập năm 2007 là ví dụ của hình thức hội nhập kinh tế nào?", options: ["Hội nhập song phương.", "Hội nhập khu vực.", "Hội nhập tiểu vùng.", "Hội nhập đa phương (toàn cầu)."], answer: 3 },
            // Vận dụng
            { type: 'mcq', text: "Hành động nào sau đây của doanh nghiệp Việt Nam thể hiện việc tận dụng cơ hội từ các Hiệp định Thương mại tự do (FTA)?", options: ["Chỉ bán hàng tại thị trường nội địa để tránh rủi ro.", "Chủ động đổi mới công nghệ, nâng cao chất lượng để xuất khẩu hàng hóa sang thị trường châu Âu với mức thuế ưu đãi.", "Đóng cửa nhà máy để nhập khẩu hoàn toàn hàng hóa nước ngoài.", "Sử dụng nguyên liệu kém chất lượng để giảm giá thành tối đa."], answer: 1 },
            // Vận dụng cao
            { type: 'mcq', text: "Trong bối cảnh hội nhập quốc tế sâu rộng, để tránh 'bẫy thu nhập trung bình' và thực hiện phát triển bền vững, Việt Nam cần ưu tiên giải pháp cốt lõi nào?", options: ["Duy trì lợi thế nhân công giá rẻ và khai thác triệt để tài nguyên thô.", "Bảo hộ tuyệt đối các doanh nghiệp trong nước, cấm hàng ngoại nhập.", "Chuyển đổi sang mô hình tăng trưởng dựa trên đổi mới sáng tạo, kinh tế số, kinh tế xanh và nâng cao chất lượng nguồn nhân lực.", "Từ chối mọi sự tham gia vào các chuỗi cung ứng toàn cầu."], answer: 2 }
        ],
        tf: [
            { type: 'tf', text: "Về sự tăng trưởng, phát triển kinh tế và hội nhập kinh tế quốc tế:", options: [
                { text: "a) (Nhận biết) GDP bình quân đầu người là một trong những chỉ tiêu quan trọng để đánh giá mức độ tăng trưởng kinh tế.", answer: true },
                { text: "b) (Thông hiểu) Một quốc gia có tốc độ tăng trưởng kinh tế cao thì chắc chắn quốc gia đó đã đạt được sự phát triển kinh tế bền vững.", answer: false },
                { text: "c) (Vận dụng) Việc Việt Nam ký kết Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương (CPTPP) là biểu hiện của hội nhập kinh tế quốc tế sâu rộng.", answer: true },
                { text: "d) (Vận dụng cao) Hội nhập kinh tế quốc tế chỉ mang lại cơ hội thu hút vốn FDI và xuất khẩu mà không đặt ra bất kỳ thách thức nào đối với nền kinh tế và an ninh quốc gia.", answer: false }
            ]}
        ]
    }
};

appDatabase.khoi12[2] = {
    title: "Chủ đề 2: Bảo hiểm và An sinh xã hội",
    exercises: {
        mcq: [
            { type: 'mcq', text: "Bảo hiểm xã hội bắt buộc ở Việt Nam do chủ thể nào tổ chức thực hiện?", options: ["Các công ty bảo hiểm nhân thọ tư nhân.", "Nhà nước.", "Các tổ chức phi chính phủ.", "Các ngân hàng thương mại."], answer: 1 },
            { type: 'mcq', text: "Mục đích chính của bảo hiểm y tế là gì?", options: ["Bồi thường thiệt hại khi xảy ra tai nạn giao thông.", "Chi trả chi phí khám chữa bệnh, chăm sóc sức khỏe cho người tham gia khi ốm đau.", "Cung cấp khoản tiền lớn khi người tham gia qua đời.", "Bảo vệ tài sản của doanh nghiệp trước thiên tai."], answer: 1 },
            { type: 'mcq', text: "An sinh xã hội là hệ thống các chính sách của Nhà nước nhằm mục đích gì?", options: ["Tăng cường thu ngân sách nhà nước.", "Giúp mọi người dân phòng ngừa, giảm thiểu và khắc phục rủi ro, bảo đảm mức sống tối thiểu.", "Xóa bỏ hoàn toàn khoảng cách giàu nghèo ngay lập tức.", "Độc quyền cung cấp các dịch vụ thương mại."], answer: 1 },
            { type: 'mcq', text: "Một người lao động bị mất việc làm do công ty phá sản, họ sẽ được hưởng quyền lợi từ loại hình bảo hiểm nào nếu đã đóng đầy đủ?", options: ["Bảo hiểm nhân thọ.", "Bảo hiểm thất nghiệp.", "Bảo hiểm y tế.", "Bảo hiểm tài sản."], answer: 1 },
            { type: 'mcq', text: "Chính sách cấp thẻ bảo hiểm y tế miễn phí cho trẻ em dưới 6 tuổi thể hiện trụ cột nào của hệ thống an sinh xã hội?", options: ["Cung cấp việc làm.", "Bảo hiểm xã hội.", "Trợ giúp xã hội và dịch vụ xã hội cơ bản.", "Xóa đói giảm nghèo vùng sâu vùng xa."], answer: 2 }
        ],
        tf: [
            { type: 'tf', text: "Về các loại hình bảo hiểm:", options: [
                { text: "a) (Nhận biết) Bảo hiểm thương mại (như bảo hiểm nhân thọ, bảo hiểm ô tô) là loại hình bảo hiểm mang tính chất kinh doanh tìm kiếm lợi nhuận.", answer: true },
                { text: "b) (Thông hiểu) Bảo hiểm xã hội tự nguyện cho phép người lao động tự do lựa chọn mức đóng và phương thức đóng phù hợp với thu nhập của mình.", answer: true },
                { text: "c) (Vận dụng) Người lao động làm việc theo hợp đồng lao động không thời hạn không bắt buộc phải tham gia bảo hiểm xã hội.", answer: false },
                { text: "d) (Vận dụng cao) Sự phát triển của hệ thống bảo hiểm thương mại làm suy yếu và có thể thay thế hoàn toàn hệ thống an sinh xã hội do Nhà nước quản lý.", answer: false }
            ]}
        ]
    }
};

appDatabase.khoi12[3] = {
    title: "Chủ đề 3: Pháp luật quốc tế & Quyền, nghĩa vụ công dân",
    exercises: {
        mcq: [
            { type: 'mcq', text: "Pháp luật quốc tế (Công pháp quốc tế) là hệ thống các nguyên tắc, quy phạm pháp luật điều chỉnh quan hệ giữa các chủ thể nào?", options: ["Giữa các cá nhân thuộc các quốc gia khác nhau.", "Giữa các doanh nghiệp đa quốc gia.", "Giữa các quốc gia có chủ quyền và các chủ thể khác của pháp luật quốc tế.", "Giữa chính quyền trung ương và chính quyền địa phương."], answer: 2 },
            { type: 'mcq', text: "Một trong những nguyên tắc cơ bản của pháp luật quốc tế được Hiến chương Liên hợp quốc ghi nhận là gì?", options: ["Sử dụng vũ lực để giải quyết xung đột kinh tế.", "Bình đẳng về chủ quyền giữa các quốc gia.", "Các nước lớn có quyền can thiệp vào công việc nội bộ của các nước nhỏ.", "Chỉ bảo vệ quyền lợi của các nước phương Tây."], answer: 1 },
            { type: 'mcq', text: "Trong lĩnh vực kinh tế, công dân Việt Nam có quyền cơ bản nào sau đây?", options: ["Quyền tự do kinh doanh trong những ngành nghề mà pháp luật không cấm.", "Quyền không phải nộp bất kỳ loại thuế nào.", "Quyền kinh doanh hàng giả, hàng lậu để thu lợi nhuận.", "Quyền trốn đóng bảo hiểm xã hội cho người lao động."], answer: 0 },
            { type: 'mcq', text: "Việc công dân đủ 18 tuổi thực hiện bỏ phiếu bầu cử đại biểu Quốc hội là việc thực hiện quyền gì?", options: ["Quyền tham gia quản lý nhà nước và xã hội.", "Quyền khiếu nại, tố cáo.", "Quyền tự do ngôn luận.", "Quyền bầu cử và ứng cử."], answer: 3 },
            { type: 'mcq', text: "Nghĩa vụ bảo vệ Tổ quốc là nghĩa vụ thiêng liêng và quyền cao quý của ai?", options: ["Chỉ của nam giới trong độ tuổi thanh niên.", "Chỉ của cán bộ, chiến sĩ quân đội nhân dân.", "Của mọi công dân Việt Nam.", "Chỉ của những người làm việc trong cơ quan nhà nước."], answer: 2 }
        ],
        tf: [
            { type: 'tf', text: "Về quyền và nghĩa vụ cơ bản của công dân theo Hiến pháp:", options: [
                { text: "a) (Nhận biết) Công dân có quyền tự do ngôn luận, tự do báo chí, tiếp cận thông tin, hội họp, lập hội theo quy định của pháp luật.", answer: true },
                { text: "b) (Thông hiểu) Quyền tự do kinh doanh đồng nghĩa với việc doanh nghiệp được phép kinh doanh mọi mặt hàng, kể cả vũ khí và ma túy.", answer: false },
                { text: "c) (Vận dụng) Khi phát hiện cơ sở sản xuất xả thải trái phép gây ô nhiễm môi trường, công dân có quyền tố cáo đến cơ quan chức năng.", answer: true },
                { text: "d) (Vận dụng cao) Việc pháp luật quốc tế quy định nguyên tắc 'Tôn trọng các cam kết quốc tế (Pacta sunt servanda)' buộc Việt Nam phải sửa đổi toàn bộ hệ thống pháp luật nội địa cho giống hệt pháp luật của các nước châu Âu.", answer: false }
            ]}
        ]
    }
};

// Tự động nạp "Bài kiểm tra" bằng cách trộn MCQ và TF
[appDatabase.khoi10, appDatabase.khoi11, appDatabase.khoi12].forEach(khoi => {
    Object.keys(khoi).forEach(topicId => {
        khoi[topicId].exercises.test = [
            ...khoi[topicId].exercises.mcq,
            ...khoi[topicId].exercises.tf
        ];
    });
});

// ================= DỮ LIỆU ĐỀ THI THỬ =================
// Đề 1, 2, 3, 4, 5, 6 (Giữ lại cấu trúc tham chiếu đề minh họa HSA 2026 - Môn KTPL)
appDatabase.mocktest[1] = [
    // --- PHẦN I: TRẮC NGHIỆM ĐA LỰA CHỌN (24 CÂU - MÔN KTPL) ---
    { type: 'mcq', text: "Hoạt động nào sau đây là hoạt động phân phối trong nền kinh tế?", options: ["Nhà máy sản xuất ra áo sơ mi.", "Doanh nghiệp chia cổ tức cho các cổ đông.", "Người dân mua rau tại siêu thị.", "Sử dụng điện thoại để lướt web."], answer: 1 },
    { type: 'mcq', text: "Chức năng cơ bản của tiền tệ khi dùng để niêm yết giá hàng hóa là", options: ["Thước đo giá trị.", "Phương tiện lưu thông.", "Phương tiện cất trữ.", "Tiền tệ thế giới."], answer: 0 },
    { type: 'mcq', text: "Hội nhập kinh tế quốc tế không mang lại tác động nào sau đây?", options: ["Thu hút vốn đầu tư nước ngoài.", "Mở rộng thị trường xuất khẩu.", "Làm đóng băng sự đổi mới công nghệ trong nước.", "Tạo thêm nhiều việc làm cho người lao động."], answer: 2 },
    { type: 'mcq', text: "Chỉ số nào sau đây phản ánh tình trạng lạm phát của một quốc gia?", options: ["Chỉ số giá tiêu dùng (CPI).", "Chỉ số phát triển con người (HDI).", "Tỉ lệ thất nghiệp.", "Tổng sản phẩm quốc nội (GDP)."], answer: 0 },
    { type: 'mcq', text: "Quyền bình đẳng giữa các dân tộc trong lĩnh vực chính trị thể hiện ở việc:", options: ["Các dân tộc đều có đại diện của mình trong hệ thống cơ quan nhà nước.", "Nhà nước hỗ trợ vốn cho vùng đồng bào dân tộc thiểu số.", "Trường dân tộc nội trú được xây dựng ở nhiều nơi.", "Các lễ hội văn hóa dân tộc được bảo tồn."], answer: 0 },
    { type: 'mcq', text: "Hành vi nào sau đây vi phạm quyền bất khả xâm phạm về thân thể của công dân?", options: ["Công an bắt người đang bị truy nã.", "Bắt giữ người khi có quyết định của Tòa án.", "Bắt và giam giữ người vì nghi ngờ ăn trộm mà không có chứng cứ.", "Bắt người đang thực hiện hành vi phạm tội quả tang."], answer: 2 },
    // Do giới hạn không gian, chỉ đưa đại diện các câu. Thực tế một đề có 24 câu.
    
    // --- PHẦN II: TRẮC NGHIỆM ĐÚNG/SAI (4 CÂU) ---
    { type: 'tf', text: "Đọc thông tin: 'Trong bối cảnh hội nhập kinh tế quốc tế, Việt Nam đã ký kết hàng loạt các Hiệp định thương mại tự do (FTA) thế hệ mới như EVFTA, CPTPP...'", options: [
        { text: "a) (Nhận biết) EVFTA là Hiệp định thương mại tự do giữa Việt Nam và Liên minh châu Âu.", answer: true },
        { text: "b) (Thông hiểu) Việc tham gia các FTA thế hệ mới chỉ mang lại thuận lợi mà không tạo ra bất cứ thách thức nào cho doanh nghiệp Việt Nam.", answer: false },
        { text: "c) (Vận dụng) Để tận dụng ưu đãi thuế quan từ EVFTA, doanh nghiệp xuất khẩu dệt may Việt Nam phải đáp ứng nghiêm ngặt các quy tắc về xuất xứ hàng hóa.", answer: true },
        { text: "d) (Vận dụng cao) Hội nhập kinh tế sâu rộng đòi hỏi Nhà nước phải từ bỏ hoàn toàn vai trò quản lý vĩ mô để tuân theo luật chơi của WTO.", answer: false }
    ]},
    { type: 'tf', text: "Về hệ thống an sinh xã hội ở Việt Nam:", options: [
        { text: "a) (Nhận biết) Bảo hiểm y tế toàn dân là một trong những trụ cột của an sinh xã hội.", answer: true },
        { text: "b) (Thông hiểu) Chính sách trợ cấp cho người khuyết tật nặng, người già neo đơn thuộc về nhóm chính sách bảo hiểm xã hội bắt buộc.", answer: false }, // Thuộc trợ giúp xã hội
        { text: "c) (Vận dụng) Công ty X trốn đóng bảo hiểm thất nghiệp cho công nhân là hành vi vi phạm pháp luật và xâm phạm quyền lợi chính đáng của người lao động.", answer: true },
        { text: "d) (Vận dụng cao) Hệ thống an sinh xã hội phát triển vững mạnh là minh chứng rõ nét cho bản chất tốt đẹp và định hướng xã hội chủ nghĩa của nhà nước ta.", answer: true }
    ]}
];

// Sao chép đề mẫu cho 6 đề đầu
for(let i=2; i<=6; i++){
    appDatabase.mocktest[i] = [ ...appDatabase.mocktest[1] ];
}

// ================= DỮ LIỆU ĐỀ THI THỬ SỐ 7 (THIẾT KẾ ĐỘC QUYỀN MÔN KTPL) =================
appDatabase.mocktest[7] = [
    // --- PHẦN I: TRẮC NGHIỆM ĐA LỰA CHỌN (24 CÂU) ---
    // Mức độ Nhận biết (6 câu)
    { type: 'mcq', text: "Trong các chức năng của tiền tệ, chức năng nào đòi hỏi phải là tiền vàng hoặc tiền tín dụng có giá trị quốc tế?", options: ["Thước đo giá trị.", "Phương tiện lưu thông.", "Phương tiện thanh toán.", "Tiền tệ thế giới."], answer: 3 },
    { type: 'mcq', text: "Tổ chức nào sau đây là diễn đàn hợp tác kinh tế lớn nhất khu vực Châu Á - Thái Bình Dương?", options: ["ASEAN.", "APEC.", "EU.", "WTO."], answer: 1 },
    { type: 'mcq', text: "Cơ quan hành chính nhà nước cao nhất của nước Cộng hòa XHCN Việt Nam là", options: ["Quốc hội.", "Chính phủ.", "Tòa án nhân dân tối cao.", "Chủ tịch nước."], answer: 1 },
    { type: 'mcq', text: "Theo Luật Hôn nhân và gia đình, độ tuổi kết hôn hợp pháp của công dân Việt Nam là", options: ["Nam từ đủ 18 tuổi, nữ từ đủ 18 tuổi.", "Nam từ đủ 20 tuổi, nữ từ đủ 18 tuổi.", "Nam từ đủ 20 tuổi, nữ từ đủ 20 tuổi.", "Nam từ đủ 22 tuổi, nữ từ đủ 18 tuổi."], answer: 1 },
    { type: 'mcq', text: "Thuế giá trị gia tăng (VAT) thuộc loại thuế nào?", options: ["Thuế trực thu.", "Thuế gián thu.", "Thuế thu nhập cá nhân.", "Thuế tài nguyên."], answer: 1 },
    { type: 'mcq', text: "Loại hình bảo hiểm nào sau đây do Nhà nước tổ chức, nhằm bảo đảm thay thế hoặc bù đắp một phần thu nhập của người lao động khi họ bị giảm hoặc mất thu nhập do ốm đau, thai sản, tai nạn lao động?", options: ["Bảo hiểm nhân thọ.", "Bảo hiểm tài sản.", "Bảo hiểm xã hội.", "Bảo hiểm y tế."], answer: 2 },

    // Mức độ Thông hiểu (6 câu)
    { type: 'mcq', text: "Bản chất của tăng trưởng kinh tế là gì?", options: ["Là sự gia tăng quy mô sản lượng của nền kinh tế trong một thời kỳ nhất định.", "Là sự hoàn thiện cơ cấu kinh tế theo hướng hiện đại.", "Là sự thay đổi triệt để về công bằng xã hội.", "Là sự gia tăng dân số của một quốc gia."], answer: 0 },
    { type: 'mcq', text: "Mục đích lớn nhất của việc Nhà nước thu thuế là gì?", options: ["Làm cho doanh nghiệp tư nhân bị phá sản.", "Tạo nguồn thu lớn nhất cho Ngân sách nhà nước để thực hiện các chức năng kinh tế - xã hội, bảo đảm an ninh quốc phòng.", "Trả lương cho người lao động ở các doanh nghiệp FDI.", "Khuyến khích người dân gửi tiền vào ngân hàng."], answer: 1 },
    { type: 'mcq', text: "Bình đẳng trước pháp luật có nghĩa là bất kỳ công dân nào vi phạm pháp luật đều phải", options: ["Bị tước quyền công dân.", "Chịu trách nhiệm pháp lý theo quy định của pháp luật.", "Bị phạt tù giam.", "Khắc phục hậu quả bằng tiền."], answer: 1 },
    { type: 'mcq', text: "Hiện tượng lạm phát chi phí đẩy xảy ra khi nào?", options: ["Khi lượng tiền phát hành ra lưu thông quá nhiều.", "Khi chi phí sản xuất (giá xăng dầu, nguyên vật liệu) tăng cao đột biến làm giá cả hàng hóa tăng.", "Khi người tiêu dùng ồ ạt mua sắm hàng hóa.", "Khi lãi suất ngân hàng giảm mạnh."], answer: 1 },
    { type: 'mcq', text: "Vì sao nói Hiến pháp là đạo luật cơ bản của Nhà nước?", options: ["Vì Hiến pháp do Chính phủ ban hành.", "Vì Hiến pháp chứa đựng quy định chi tiết về xử phạt hành chính.", "Vì Hiến pháp quy định những vấn đề nền tảng, quan trọng nhất của quốc gia và có hiệu lực pháp lý cao nhất.", "Vì Hiến pháp áp dụng riêng cho các cơ quan tư pháp."], answer: 2 },
    { type: 'mcq', text: "Chủ thể nào đóng vai trò quan trọng nhất trong việc ký kết các điều ước quốc tế và thực hiện pháp luật quốc tế?", options: ["Các tổ chức phi chính phủ.", "Các công ty đa quốc gia.", "Cá nhân công dân.", "Các quốc gia có chủ quyền."], answer: 3 },

    // Mức độ Vận dụng (6 câu)
    { type: 'mcq', text: "Khi lạm phát trong nước tăng cao, Ngân hàng Nhà nước Việt Nam thường áp dụng chính sách tiền tệ nào sau đây?", options: ["Giảm lãi suất để kích thích vay vốn.", "Tăng lãi suất điều hành để hút tiền về, giảm bớt lượng tiền lưu thông.", "In thêm tiền giấy để phát cho người dân.", "Hạ tỷ lệ dự trữ bắt buộc đối với các ngân hàng thương mại."], answer: 1 },
    { type: 'mcq', text: "Công ty A từ chối nhận chị B vào làm việc chỉ vì chị B đang mang thai, dù chị đáp ứng đủ chuyên môn. Công ty A đã vi phạm quyền bình đẳng trong lĩnh vực nào?", options: ["Bình đẳng giới trong lĩnh vực chính trị.", "Bình đẳng trong hôn nhân và gia đình.", "Bình đẳng trong lao động và việc làm.", "Bình đẳng trong kinh doanh thương mại."], answer: 2 },
    { type: 'mcq', text: "Để giải quyết tình trạng thất nghiệp cơ cấu do sự thay thế của Trí tuệ nhân tạo (AI), giải pháp dài hạn cốt lõi nhất của Nhà nước là gì?", options: ["Cấm sử dụng AI trong các doanh nghiệp.", "Tăng cường phát tiền trợ cấp thất nghiệp vô thời hạn.", "Đổi mới hệ thống giáo dục, hỗ trợ đào tạo lại kỹ năng số và nghề nghiệp mới cho người lao động.", "Đưa toàn bộ người lao động thất nghiệp về làm nông nghiệp."], answer: 2 },
    { type: 'mcq', text: "Ông C mở cửa hàng bán lẻ hàng hóa nhưng không đăng ký kinh doanh và cố ý trốn nộp thuế giá trị gia tăng. Hành vi của ông C là", options: ["Sử dụng pháp luật.", "Không tuân thủ pháp luật.", "Vi phạm pháp luật hành chính hoặc hình sự về thuế.", "Vi phạm pháp luật dân sự."], answer: 2 },
    { type: 'mcq', text: "Theo Luật Hôn nhân và gia đình, tài sản được tạo ra trong thời kỳ hôn nhân do một tay người chồng đi làm kiếm tiền (người vợ ở nhà nội trợ) được xác định là:", options: ["Tài sản riêng của người chồng.", "Tài sản riêng của người vợ.", "Tài sản chung của vợ chồng, người vợ ở nhà nội trợ được coi như lao động có thu nhập.", "Tài sản của cha mẹ hai bên."], answer: 2 },
    { type: 'mcq', text: "Việc Việt Nam tích cực tham gia các Hiệp định Thương mại tự do (FTA) nhằm mục đích gì?", options: ["Đóng cửa thị trường nội địa để tự cung tự cấp.", "Xóa bỏ thuế quan, mở rộng thị trường xuất khẩu, thu hút đầu tư và công nghệ.", "Gia nhập các liên minh quân sự ở châu Âu.", "Từ bỏ độc lập tự chủ về kinh tế."], answer: 1 },

    // Mức độ Vận dụng cao (6 câu)
    { type: 'mcq', text: "Trong bối cảnh nền kinh tế số, việc các cá nhân kinh doanh trên nền tảng mạng xã hội (Facebook, TikTok) có doanh thu lớn nhưng tìm cách lách luật không nộp thuế sẽ gây ra hệ lụy lớn nhất là gì?", options: ["Làm tăng sức cạnh tranh của các doanh nghiệp truyền thống.", "Thất thu ngân sách nhà nước, gây bất bình đẳng trong nghĩa vụ nộp thuế và làm méo mó môi trường cạnh tranh.", "Làm giảm giá cả hàng hóa cho người tiêu dùng.", "Khiến các nền tảng mạng xã hội bị cấm hoạt động vĩnh viễn."], answer: 1 },
    { type: 'mcq', text: "Đánh giá vai trò của hệ thống An sinh xã hội (bảo hiểm xã hội, bảo hiểm y tế, trợ cấp xã hội) trong thời kỳ đại dịch COVID-19 tại Việt Nam, nhận định nào sâu sắc nhất?", options: ["An sinh xã hội chỉ làm tăng gánh nặng nợ công mà không có tác dụng gì.", "Hệ thống ASXH đã phát huy vai trò là 'lưới an toàn', trụ đỡ vững chắc giúp giảm sốc, hỗ trợ người yếu thế duy trì cuộc sống, góp phần ổn định chính trị - xã hội.", "An sinh xã hội đã thay thế hoàn toàn tiền lương của người lao động.", "Chỉ có khu vực tư nhân mới đóng vai trò cứu trợ trong đại dịch."], answer: 1 },
    { type: 'mcq', text: "Nguyên tắc 'Tôn trọng các cam kết quốc tế (Pacta sunt servanda)' trong Pháp luật quốc tế đặt ra yêu cầu gì đối với Việt Nam khi đã hội nhập toàn diện?", options: ["Phải sửa đổi hoàn toàn Hiến pháp theo chuẩn phương Tây.", "Bãi bỏ toàn bộ các bộ luật dân sự, hình sự trong nước.", "Nội luật hóa các cam kết quốc tế, đảm bảo sự tương thích giữa pháp luật quốc gia và các điều ước quốc tế đã ký kết.", "Tuyệt đối không ký kết thêm bất kỳ hiệp định nào."], answer: 2 },
    { type: 'mcq', text: "Từ bài học kinh nghiệm về xử lý lạm phát phi mã những năm 1980 ở Việt Nam, chính sách điều hành kinh tế vĩ mô hiện nay luôn ưu tiên điều gì?", options: ["In tiền ồ ạt để tăng lương cơ sở.", "Thả nổi hoàn toàn giá cả các mặt hàng chiến lược (xăng, điện).", "Kiểm soát lạm phát, ổn định kinh tế vĩ mô làm nền tảng vững chắc để thúc đẩy tăng trưởng kinh tế bền vững.", "Chỉ tập trung tăng trưởng GDP bằng mọi giá dù lạm phát lên tới 20%."], answer: 2 },
    { type: 'mcq', text: "Sự phân hóa giàu nghèo và chênh lệch phát triển giữa các vùng miền đặt ra yêu cầu cấp thiết nào đối với chính sách tài khóa (Ngân sách nhà nước) của Việt Nam?", options: ["Cắt giảm toàn bộ chi ngân sách cho các tỉnh miền núi.", "Thu hồi toàn bộ lợi nhuận của các tỉnh kinh tế trọng điểm.", "Sử dụng ngân sách để điều tiết thu nhập (qua thuế TNCN lũy tiến) và phân bổ nguồn lực hỗ trợ đầu tư cơ sở hạ tầng, an sinh cho vùng khó khăn.", "Miễn thuế hoàn toàn cho mọi công dân."], answer: 2 },
    { type: 'mcq', text: "Việc Quốc hội ban hành và sửa đổi Luật Đất đai (năm 2024) thể hiện bản chất nào của pháp luật nước Cộng hòa XHCN Việt Nam?", options: ["Tính bảo thủ, không thay đổi trước thực tiễn.", "Tính lịch sử, thể hiện ý chí của toàn dân, kịp thời thể chế hóa chủ trương của Đảng để tháo gỡ điểm nghẽn nguồn lực đất đai phục vụ phát triển đất nước.", "Tính áp đặt một chiều từ phía các doanh nghiệp bất động sản.", "Tính khuôn mẫu, sao chép nguyên bản từ pháp luật nước ngoài."], answer: 1 },

    // --- PHẦN II: TRẮC NGHIỆM ĐÚNG/SAI (4 CÂU - Bao hàm 4 mức độ nhận thức trong từng ý) ---
    { type: 'tf', text: "Câu 1. Về các chủ thể và các hoạt động kinh tế cơ bản trong nền kinh tế thị trường:", options: [
        { text: "a) (Nhận biết) Người tiêu dùng là chủ thể tiêu thụ các sản phẩm hàng hóa, dịch vụ do sản xuất tạo ra.", answer: true },
        { text: "b) (Thông hiểu) Vai trò lớn nhất của chủ thể trung gian (người buôn bán, siêu thị) là kết nối, giúp cho quá trình sản xuất và tiêu dùng diễn ra nhanh chóng, hiệu quả hơn.", answer: true },
        { text: "c) (Vận dụng) Doanh nghiệp A xả chất thải chưa qua xử lý ra sông để tiết kiệm chi phí là hành vi phù hợp với mục tiêu tối đa hóa lợi nhuận mà nhà nước khuyến khích.", answer: false },
        { text: "d) (Vận dụng cao) Trong nền kinh tế thị trường định hướng XHCN, sự can thiệp của Nhà nước vào thị trường là nhằm khắc phục các 'khuyết tật' của thị trường (ô nhiễm, độc quyền, khủng hoảng) để đảm bảo phát triển bền vững.", answer: true }
    ]},
    { type: 'tf', text: "Câu 2. Về hội nhập kinh tế quốc tế và các tổ chức kinh tế:", options: [
        { text: "a) (Nhận biết) WTO (Tổ chức Thương mại Thế giới) là một tổ chức hội nhập kinh tế đa phương ở cấp độ toàn cầu.", answer: true },
        { text: "b) (Thông hiểu) Hội nhập kinh tế quốc tế giúp các quốc gia mở rộng thị trường, thu hút vốn, công nghệ và kinh nghiệm quản lý.", answer: true },
        { text: "c) (Vận dụng) Khi tham gia Cộng đồng Kinh tế ASEAN (AEC), lao động có tay nghề cao của Việt Nam có thể tự do di chuyển làm việc trong khu vực mà không gặp bất cứ rào cản nào về luật pháp quốc gia.", answer: false }, // Vẫn có rào cản theo luật riêng của từng nước dù được nới lỏng.
        { text: "d) (Vận dụng cao) Tham gia các Hiệp định Thương mại tự do (FTA) thế hệ mới đòi hỏi Việt Nam không chỉ giảm thuế quan mà còn phải cải cách sâu rộng thể chế pháp luật về lao động, môi trường và sở hữu trí tuệ.", answer: true }
    ]},
    { type: 'tf', text: "Câu 3. Về quyền bình đẳng của công dân trước pháp luật:", options: [
        { text: "a) (Nhận biết) Mọi công dân, nam nữ thuộc các dân tộc, tôn giáo, thành phần, địa vị xã hội khác nhau đều không bị phân biệt đối xử trong việc hưởng quyền.", answer: true },
        { text: "b) (Thông hiểu) Bình đẳng về trách nhiệm pháp lý có nghĩa là bất kì ai vi phạm pháp luật cũng đều phải chịu các chế tài xử phạt theo quy định của pháp luật.", answer: true },
        { text: "c) (Vận dụng) Công ty B trả mức lương cao hơn cho nhân viên C so với nhân viên D vì C có bằng cấp cao hơn và làm việc hiệu quả hơn, đây là sự vi phạm quyền bình đẳng trong lao động.", answer: false },
        { text: "d) (Vận dụng cao) Chính sách ưu tiên điểm thi tuyển sinh đại học cho con thương binh, liệt sĩ, người dân tộc thiểu số vùng sâu vùng xa là biểu hiện của nguyên tắc công bằng xã hội (bình đẳng thực chất) chứ không phải là sự bất bình đẳng.", answer: true }
    ]},
    { type: 'tf', text: "Câu 4. Về hệ thống pháp luật và vi phạm pháp luật:", options: [
        { text: "a) (Nhận biết) Hiến pháp là đạo luật cơ bản của Nhà nước, có hiệu lực pháp lý cao nhất trong hệ thống pháp luật Việt Nam.", answer: true },
        { text: "b) (Thông hiểu) Vi phạm hành chính là hành vi vi phạm pháp luật, có mức độ nguy hiểm cho xã hội thấp hơn tội phạm (vi phạm hình sự).", answer: true },
        { text: "c) (Vận dụng) Cảnh sát giao thông ra quyết định xử phạt vi phạm hành chính đối với người đi xe mô tô không đội mũ bảo hiểm là hình thức 'Tuân thủ pháp luật'.", answer: false }, // Là 'Áp dụng pháp luật' của cơ quan nhà nước.
        { text: "d) (Vận dụng cao) Nguyên tắc pháp chế XHCN đòi hỏi mọi chủ thể (từ cơ quan nhà nước, tổ chức đến cá nhân công dân) đều phải sống và làm việc theo Hiến pháp và pháp luật, cấm lạm quyền.", answer: true }
    ]}
];

// Khởi tạo các Đề thi thử trống (8 đến 10)
for (let testId = 8; testId <= 10; testId++) {
    appDatabase.mocktest[testId] = []; 
}

/* =========================================================================
   LOGIC HOẠT ĐỘNG GIAO DIỆN
========================================================================= */

let currentSection = 'khoi12'; 
let currentTopicId = null;
let currentExerciseType = null; 
let timerInterval = null;
let timeLeft = 0;
let isSubmitted = false;

document.addEventListener('DOMContentLoaded', () => { 
    selectSection('khoi12'); 
});

function selectSection(section) {
    currentSection = section;
    const tabs = ['khoi10', 'khoi11', 'khoi12', 'mocktest'];
    tabs.forEach(t => {
        const tab = document.getElementById('tab-' + t);
        tab.className = t === section 
            ? "px-5 py-2 bg-gray-50 text-blue-800 font-bold rounded-md shadow-sm text-sm transition-colors"
            : "px-5 py-2 bg-white/20 hover:bg-white/90 hover:text-blue-800 font-semibold rounded-md text-sm transition-colors";
    });

    // Tuỳ biến theo môn KTPL cho giáo viên Phạm Văn Tiến
    let title = section === 'mocktest' ? "NGÂN HÀNG ĐỀ THI THỬ KTPL" : `NGÂN HÀNG CÂU HỎI LỚP ${section.replace('khoi', '')} (KTPL)`;
    document.getElementById('sidebar-title').innerText = title;
    
    renderSidebar();
    document.getElementById('test-screen').classList.add('hidden-element');
    document.getElementById('result-screen').classList.add('hidden-element');
    document.getElementById('welcome-screen').classList.remove('hidden-element');
}

function renderSidebar() {
    const container = document.getElementById('sidebar-container');
    container.innerHTML = '';

    if (currentSection.startsWith('khoi')) {
        Object.keys(appDatabase[currentSection]).forEach(topicId => {
            const topic = appDatabase[currentSection][topicId];
            const div = document.createElement('div');
            div.className = 'border-b border-gray-200';
            div.innerHTML = `
                <div class="px-4 py-3 font-bold text-gray-700 cursor-pointer flex justify-between items-center hover:bg-blue-50" onclick="toggleSidebarMenu('menu-${currentSection}-${topicId}')">
                    <span>${topic.title}</span> <span class="text-[10px] text-gray-400">▼</span>
                </div>
                <div id="menu-${currentSection}-${topicId}" class="flex flex-col bg-white border-t border-gray-100 hidden-element">
                    <button onclick="startTest('${currentSection}', ${topicId}, 'mcq')" class="text-left px-6 py-3 text-sm border-b border-gray-50 hover:bg-blue-50">Luyện Trắc nghiệm (Nhiều lựa chọn)</button>
                    <button onclick="startTest('${currentSection}', ${topicId}, 'tf')" class="text-left px-6 py-3 text-sm border-b border-gray-50 hover:bg-blue-50">Luyện Đúng/Sai</button>
                    <button onclick="startTest('${currentSection}', ${topicId}, 'test')" class="text-left px-6 py-3 text-sm border-b border-gray-50 hover:bg-blue-50 font-semibold text-red-600">Bài kiểm tra Đơn vị</button>
                </div>
            `;
            container.appendChild(div);
        });
    } else {
        const div = document.createElement('div');
        div.className = 'flex flex-col bg-white';
        for (let t = 1; t <= 10; t++) {
            let label = t <= 7 ? `Đề thi thử Tốt nghiệp số ${t}` : `Đề thi thử Tốt nghiệp số ${t} (Đang cập nhật)`;
            div.innerHTML += `<button onclick="startTest('mocktest', null, ${t})" class="text-left px-6 py-4 text-sm hover:bg-blue-50 border-b border-gray-100 font-semibold text-gray-700">${label}</button>`;
        }
        // Bản quyền Thầy Tiến
        div.innerHTML += `<div class="px-6 py-4 text-xs text-gray-400 text-center border-t">© 2026 Bản quyền thuộc về Thầy Phạm Văn Tiến<br>ĐT: 0943.930.787</div>`;
        container.appendChild(div);
    }
}

function toggleSidebarMenu(id) {
    document.getElementById(id).classList.toggle('hidden-element');
}

function startTest(section, topicId, exerciseType) {
    currentSection = section; 
    currentTopicId = topicId; 
    currentExerciseType = exerciseType; 
    isSubmitted = false;

    document.getElementById('welcome-screen').classList.add('hidden-element');
    document.getElementById('result-screen').classList.add('hidden-element');
    document.getElementById('test-screen').classList.remove('hidden-element');
    document.getElementById('submit-btn').classList.remove('hidden-element');
    
    if (section.startsWith('khoi')) {
        let typeStr = exerciseType === 'mcq' ? "Luyện Trắc nghiệm" : (exerciseType === 'tf' ? "Luyện Đúng/Sai" : "Bài kiểm tra Đơn vị");
        document.getElementById('current-test-title').innerText = `${appDatabase[section][topicId].title}`;
        document.getElementById('current-test-subtitle').innerText = typeStr;
        resetTimer(45); 
    } else {
        document.getElementById('current-test-title').innerText = `Đề thi thử Tốt nghiệp THPT 2026 - Đề số ${exerciseType}`;
        document.getElementById('current-test-subtitle').innerText = "Môn: Giáo dục Kinh tế và Pháp luật (4 Mức độ Nhận thức)";
        resetTimer(50); 
    }
    renderTestContent();
    startTimer();
}

function renderTestContent() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    
    let questions = [];
    if (currentSection.startsWith('khoi')) {
        questions = appDatabase[currentSection][currentTopicId].exercises[currentExerciseType] || [];
    } else {
        questions = appDatabase.mocktest[currentExerciseType] || [];
    }

    if (questions.length === 0) {
        container.innerHTML = `<div class="bg-gray-50 rounded-xl py-12 text-center border-2 border-dashed border-gray-300"><p class="text-gray-500 font-bold text-lg">Đang cập nhật câu hỏi cho phần này...</p></div>`;
        document.getElementById('submit-btn').classList.add('hidden-element'); 
        clearInterval(timerInterval);
        return;
    }

    let html = '';
    let phan1Html = '';
    let phan2Html = '';
    let mcqCounter = 1;
    let tfCounter = 1;

    questions.forEach((q, index) => {
        if (q.type === 'mcq') {
            const labels = ['A', 'B', 'C', 'D'];
            let optionsHtml = '';
            q.options.forEach((opt, oIdx) => {
                optionsHtml += `
                    <label class="option-label flex items-start space-x-2 p-3 rounded-lg border border-gray-200 bg-white w-full cursor-pointer" id="box_q_${index}_opt_${oIdx}">
                        <input type="radio" name="q_${index}" value="${oIdx}" class="mt-0.5 w-5 h-5 text-blue-600 flex-shrink-0 cursor-pointer">
                        <span class="flex-grow text-gray-800 text-base leading-snug" id="span_q_${index}_opt_${oIdx}">
                            <strong class="text-blue-800 mr-1">${labels[oIdx]}.</strong> ${opt}
                        </span>
                    </label>
                `;
            });
            phan1Html += `
                <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm mb-5 question-item" data-index="${index}" data-type="mcq" data-ans="${q.answer}">
                    <div class="mb-4"><span class="font-bold text-blue-700 text-lg">Câu ${mcqCounter}:</span> <span class="text-lg font-medium ml-1">${q.text}</span></div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">${optionsHtml}</div>
                </div>
            `;
            mcqCounter++;
        } 
        else if (q.type === 'tf') {
            let optionsHtml = '';
            q.options.forEach((opt, oIdx) => {
                optionsHtml += `
                    <div class="flex flex-col md:flex-row md:items-center justify-between p-3 rounded-lg border border-gray-200 bg-gray-50 mb-2 tf-option" id="box_q_${index}_tf_${oIdx}" data-ans="${opt.answer}">
                        <span class="flex-grow text-gray-800 mb-2 md:mb-0 md:mr-4"><strong>${['a', 'b', 'c', 'd'][oIdx]})</strong> ${opt.text.replace(/^[a-d]\)\s*/, '')}</span>
                        <div class="flex space-x-4 flex-shrink-0 mt-2 md:mt-0">
                            <label class="flex items-center space-x-1 cursor-pointer">
                                <input type="radio" name="q_${index}_tf_${oIdx}" value="true" class="w-5 h-5">
                                <span class="font-bold text-green-700">Đúng</span>
                            </label>
                            <label class="flex items-center space-x-1 cursor-pointer">
                                <input type="radio" name="q_${index}_tf_${oIdx}" value="false" class="w-5 h-5">
                                <span class="font-bold text-red-700">Sai</span>
                            </label>
                        </div>
                    </div>
                `;
            });
            phan2Html += `
                <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm mb-5 question-item" data-index="${index}" data-type="tf">
                    <div class="mb-4"><span class="font-bold text-blue-700 text-lg">Câu ${tfCounter}:</span> <span class="text-lg font-medium ml-1 italic text-gray-700">${q.text}</span></div>
                    <div class="flex flex-col">${optionsHtml}</div>
                </div>
            `;
            tfCounter++;
        }
    });

    if(phan1Html !== '') html += `<h3 class="text-xl font-black uppercase text-red-600 mb-4">Phần I: Câu hỏi trắc nghiệm nhiều phương án</h3>${phan1Html}`;
    if(phan2Html !== '') html += `<h3 class="text-xl font-black uppercase text-red-600 mb-4 mt-8">Phần II: Câu trắc nghiệm Đúng/Sai</h3>${phan2Html}`;

    container.innerHTML = html;
}

function submitTest() {
    if(isSubmitted) return;
    clearInterval(timerInterval);
    isSubmitted = true;
    document.getElementById('submit-btn').classList.add('hidden-element');

    let totalScore = 0;
    let maxScore = 0;

    document.querySelectorAll('.question-item').forEach(el => {
        const index = el.getAttribute('data-index');
        const type = el.getAttribute('data-type');
        
        if(type === 'mcq') {
            maxScore += 1; 
            const correctAns = parseInt(el.getAttribute('data-ans'));
            const selected = document.querySelector(`input[name="q_${index}"]:checked`);
            
            document.querySelectorAll(`input[name="q_${index}"]`).forEach(input => input.disabled = true);
            document.getElementById(`box_q_${index}_opt_${correctAns}`).classList.add('correct-ans-box');

            if (selected) {
                const selectedVal = parseInt(selected.value);
                if (selectedVal === correctAns) totalScore += 1;
                else document.getElementById(`box_q_${index}_opt_${selectedVal}`).classList.add('wrong-ans-box');
            }
        } 
        else if (type === 'tf') {
            maxScore += 1; 
            let correctSubCount = 0;
            
            el.querySelectorAll('.tf-option').forEach((tfEl, oIdx) => {
                const correctAns = tfEl.getAttribute('data-ans') === 'true';
                const selected = document.querySelector(`input[name="q_${index}_tf_${oIdx}"]:checked`);
                
                document.querySelectorAll(`input[name="q_${index}_tf_${oIdx}"]`).forEach(input => input.disabled = true);
                
                if(selected) {
                    const selectedVal = selected.value === 'true';
                    if(selectedVal === correctAns) {
                        correctSubCount++;
                        tfEl.classList.add('correct-ans-box');
                    } else {
                        tfEl.classList.add('wrong-ans-box');
                    }
                } else {
                    tfEl.classList.add('wrong-ans-box'); 
                }
            });

            if(correctSubCount === 4) totalScore += 1;
            else if(correctSubCount === 3) totalScore += 0.5;
            else if(correctSubCount === 2) totalScore += 0.25;
            else if(correctSubCount === 1) totalScore += 0.1;
        }
    });

    let finalScore = (totalScore / maxScore) * 10;
    
    document.getElementById('score-display').innerText = `${finalScore.toFixed(1)}/10`;
    document.getElementById('result-screen').classList.remove('hidden-element');
    window.scrollTo({ top: document.getElementById('result-screen').offsetTop - 50, behavior: 'smooth' });
}

function startTimer() {
    timerInterval = setInterval(() => {
        if(timeLeft <= 0) { clearInterval(timerInterval); submitTest(); return; }
        timeLeft--;
        const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const s = (timeLeft % 60).toString().padStart(2, '0');
        document.getElementById('timer-display').innerText = `${m}:${s}`;
    }, 1000);
}

function resetTimer(minutes) { clearInterval(timerInterval); timeLeft = minutes * 60; document.getElementById('timer-display').innerText = `${minutes}:00`; }
function continueAfterResult() { window.scrollTo({ top: 0, behavior: 'smooth' }); }