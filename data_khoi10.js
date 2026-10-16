/* =========================================================================
   DỮ LIỆU GDKT&PL KHỐI 10 THEO ĐƠN VỊ BÀI HỌC (21 BÀI)
   Sách Kết nối tri thức với cuộc sống (Bản chỉnh lí mới nhất)
   Bản quyền thuộc về số ĐT: 0943.930.787
========================================================================= */

window.appDatabase = window.appDatabase || {};

const dataKhoi10 = {
    1: {
        title: "Bài 1: Các hoạt động kinh tế cơ bản trong đời sống xã hội",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Hoạt động nào đóng vai trò là hoạt động cơ bản nhất, quyết định đến các hoạt động phân phối - trao đổi, tiêu dùng?", options: ["Hoạt động sản xuất.", "Hoạt động phân phối.", "Hoạt động trao đổi.", "Hoạt động tiêu dùng."], answer: 0 },
                { type: 'mcq', text: "Hoạt động phân chia các yếu tố sản xuất cho các ngành, các đơn vị sản xuất khác nhau để tạo ra sản phẩm thuộc hoạt động nào?", options: ["Hoạt động tiêu dùng.", "Hoạt động phân phối cho sản xuất.", "Hoạt động trao đổi hàng hoá.", "Hoạt động tích luỹ."], answer: 1 },
                { type: 'mcq', text: "Hoạt động nào đóng vai trò trung gian, là cầu nối giữa sản xuất với tiêu dùng?", options: ["Sản xuất và tích luỹ.", "Phân phối - trao đổi.", "Tiêu dùng cá nhân.", "Đầu tư công."], answer: 1 },
                { type: 'mcq', text: "Hoạt động nào được ví như 'đơn đặt hàng' của xã hội đối với sản xuất, là mục đích và động lực của sản xuất?", options: ["Hoạt động phân phối.", "Hoạt động trao đổi.", "Hoạt động tiêu dùng.", "Hoạt động xuất khẩu."], answer: 2 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Đọc thông tin sau: Công ty X là doanh nghiệp chuyên sản xuất may mặc. Để thực hiện các hợp đồng lớn, Ban Giám đốc đã phân công lao động cho các bộ phận cắt vải, may, kiểm tra chất lượng và phân bổ máy móc, nguyên liệu hợp lí. Nhờ đó doanh thu tăng cao và công ty cải thiện tiền lương, thưởng cho công nhân.",
                    options: [
                        { text: "a) (Nhận biết) Việc Công ty X tạo ra các sản phẩm may mặc là hoạt động sản xuất.", answer: true },
                        { text: "b) (Thông hiểu) Việc phân bổ máy móc, nguyên liệu và trả lương cho công nhân thể hiện hoạt động trao đổi trên thị trường.", answer: false },
                        { text: "c) (Vận dụng) Phân phối hợp lí các yếu tố sản xuất và kết quả sản xuất giúp tạo động lực cho người lao động gắn bó với doanh nghiệp.", answer: true },
                        { text: "d) (Vận dụng cao) Sự phối hợp nhịp nhàng giữa sản xuất và phân phối là yếu tố cốt lõi nâng cao năng suất và năng lực cạnh tranh của Công ty X.", answer: true }
                    ]
                }
            ]
        }
    },
    2: {
        title: "Bài 2: Các chủ thể của nền kinh tế",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Những người đầu tư vốn, sản xuất, cung cấp hàng hoá, dịch vụ ra thị trường đáp ứng nhu cầu tiêu dùng của xã hội được gọi là gì?", options: ["Chủ thể tiêu dùng.", "Chủ thể sản xuất.", "Chủ thể trung gian.", "Chủ thể Nhà nước."], answer: 1 },
                { type: 'mcq', text: "Các thương nhân chuyên phân phối hàng hoá, nhà môi giới chứng khoán, môi giới bất động sản, trung tâm giới thiệu việc làm thuộc nhóm chủ thể nào?", options: ["Chủ thể sản xuất.", "Chủ thể tiêu dùng.", "Chủ thể trung gian.", "Chủ thể Nhà nước."], answer: 2 },
                { type: 'mcq', text: "Chủ thể nào có vai trò định hướng, dẫn dắt, tạo môi trường pháp lí và kinh tế vĩ mô ổn định cho phát triển kinh tế?", options: ["Chủ thể Nhà nước.", "Chủ thể sản xuất.", "Chủ thể trung gian.", "Chủ thể tiêu dùng."], answer: 0 },
                { type: 'mcq', text: "Xu hướng người dân ưu tiên mua sản phẩm hữu cơ, bao bì phân huỷ sinh học buộc doanh nghiệp phải thay đổi quy trình sản xuất thể hiện vai trò của chủ thể nào?", options: ["Chủ thể trung gian.", "Chủ thể tiêu dùng.", "Chủ thể Nhà nước.", "Chủ thể tài chính."], answer: 1 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về vai trò của các chủ thể tham gia trong nền kinh tế:",
                    options: [
                        { text: "a) (Nhận biết) Các chủ thể của nền kinh tế bao gồm: chủ thể sản xuất, chủ thể tiêu dùng, chủ thể trung gian và Nhà nước.", answer: true },
                        { text: "b) (Thông hiểu) Chủ thể sản xuất chỉ cần chạy theo mục tiêu lợi nhuận tối đa mà không cần quan tâm đến bảo vệ môi trường hay quyền lợi người tiêu dùng.", answer: false },
                        { text: "c) (Vận dụng) Trung tâm giới thiệu việc làm đóng vai trò là chủ thể trung gian kết nối cung - cầu lao động giúp nền kinh tế vận hành linh hoạt hơn.", answer: true },
                        { text: "d) (Vận dụng cao) Việc Nhà nước ban hành chiến lược phát triển kinh tế số và đầu tư hạ tầng cáp quang thể hiện vai trò kiến tạo thể chế và dẫn dắt sự phát triển kinh tế.", answer: true }
                    ]
                }
            ]
        }
    },
    3: {
        title: "Bài 3: Thị trường",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Tổng hoà những quan hệ kinh tế, trong đó nhu cầu của các chủ thể được đáp ứng thông qua việc trao đổi, mua bán với sự xác định giá cả, số lượng hàng hoá, dịch vụ gọi là gì?", options: ["Ngân sách.", "Thị trường.", "Tín dụng.", "Phân phối."], answer: 1 },
                { type: 'mcq', text: "Theo vai trò của các đối tượng mua bán, giao dịch, thị trường được phân chia thành những loại nào?", options: ["Thị trường trong nước và thị trường quốc tế.", "Thị trường tư liệu sản xuất, tư liệu tiêu dùng, lao động, khoa học - công nghệ.", "Thị trường truyền thống và thị trường trực tuyến.", "Thị trường cạnh tranh và thị trường độc quyền."], answer: 1 },
                { type: 'mcq', text: "Thị trường thừa nhận công dụng xã hội của hàng hoá và lao động đã hao phí để sản xuất ra nó thông qua việc hàng hoá bán được hay không là biểu hiện của chức năng nào?", options: ["Chức năng thông tin.", "Chức năng thừa nhận.", "Chức năng điều tiết, kích thích.", "Chức năng dự trữ."], answer: 1 },
                { type: 'mcq', text: "Nhận thấy áo sơ mi chất liệu cotton bán chạy ở mức giá 550.000 đồng/áo trong khi áo vải kate chững lại, Công ty may A đã tăng sản xuất áo cotton. Công ty A đã dựa vào chức năng nào của thị trường?", options: ["Chức năng thông tin và chức năng điều tiết, kích thích.", "Chức năng bảo hiểm rủi ro.", "Chức năng phân phối thu nhập quốc dân.", "Chức năng quản lí hành chính."], answer: 0 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về khái niệm, phân loại và các chức năng cơ bản của thị trường:",
                    options: [
                        { text: "a) (Nhận biết) Các yếu tố cơ bản của thị trường bao gồm hàng hoá, tiền tệ, người mua, người bán và các quan hệ cung - cầu, cạnh tranh, giá cả.", answer: true },
                        { text: "b) (Thông hiểu) Thị trường bao giờ cũng chỉ gắn liền với một địa điểm vật lí cố định như chợ truyền thống hay siêu thị.", answer: false },
                        { text: "c) (Vận dụng) Khi giá thịt lợn tăng vọt do dịch bệnh làm khan hiếm nguồn cung, người tiêu dùng chuyển sang mua cá và thịt gia cầm là biểu hiện chức năng điều tiết tiêu dùng của thị trường.", answer: true },
                        { text: "d) (Vận dụng cao) Việc người nông dân lập trang mạng xã hội để quảng bá và bán dược liệu quê hương ra quốc tế thể hiện sự vận dụng linh hoạt thị trường hiện đại.", answer: true }
                    ]
                }
            ]
        }
    },
    4: {
        title: "Bài 4: Cơ chế thị trường",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Hệ thống các quan hệ kinh tế mang tính tự điều chỉnh tuân theo yêu cầu của các quy luật kinh tế như cạnh tranh, cung - cầu, giá cả, lợi nhuận được gọi là gì?", options: ["Cơ chế kế hoạch hoá tập trung.", "Cơ chế thị trường.", "Cơ chế bao cấp.", "Cơ chế hành chính."], answer: 1 },
                { type: 'mcq', text: "Nội dung nào sau đây là ưu điểm của cơ chế thị trường?", options: ["Không bao giờ xảy ra khủng hoảng kinh tế.", "Kích thích tính năng động, sáng tạo của các chủ thể kinh tế và phân bổ nguồn lực hiệu quả.", "Tự động xoá bỏ hoàn toàn sự phân hoá giàu nghèo.", "Loại bỏ hoàn toàn hiện tượng ô nhiễm môi trường."], answer: 1 },
                { type: 'mcq', text: "Số tiền phải trả cho một hàng hoá để bù đắp những chi phí sản xuất và lưu thông hàng hoá đó được gọi là gì?", options: ["Lợi nhuận ròng.", "Giá cả hàng hoá.", "Thuế giá trị gia tăng.", "Lãi suất tín dụng."], answer: 1 },
                { type: 'mcq', text: "Nhà nước thực hiện biện pháp áp trần giá sữa dành cho trẻ em dưới 6 tuổi và yêu cầu niêm yết giá công khai là vận dụng chức năng nào của giá cả thị trường?", options: ["Là công cụ để Nhà nước thực hiện quản lí, kích thích, điều tiết nền kinh tế.", "Xoá bỏ cơ chế thị trường.", "Cấm các doanh nghiệp sữa cạnh tranh.", "Thu hồi toàn bộ lợi nhuận của doanh nghiệp."], answer: 0 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về cơ chế thị trường và giá cả thị trường:",
                    options: [
                        { text: "a) (Nhận biết) Giá cả thị trường là giá bán thực tế của hàng hoá trên thị trường hay giá cả được thoả thuận giữa người mua và người bán.", answer: true },
                        { text: "b) (Thông hiểu) Cơ chế thị trường luôn hoàn hảo nên không bao giờ phát sinh các thủ đoạn cạnh tranh không lành mạnh hay hàng giả.", answer: false },
                        { text: "c) (Vận dụng) Thấy giá dưa hấu tăng cao, nhiều hộ dân tự phát chặt bỏ cây trồng khác để ồ ạt trồng dưa dẫn đến dư thừa, rớt giá là biểu hiện rủi ro tự phát của cơ chế thị trường.", answer: true },
                        { text: "d) (Vận dụng cao) Để phát huy ưu điểm và hạn chế khuyết tật của cơ chế thị trường, Nhà nước cần tăng cường quản lí vĩ mô bằng pháp luật, quy hoạch và các công cụ kinh tế.", answer: true }
                    ]
                }
            ]
        }
    },
    5: {
        title: "Bài 5: Ngân sách nhà nước",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Toàn bộ các khoản thu, chi của Nhà nước được dự toán và thực hiện trong một khoảng thời gian nhất định do cơ quan nhà nước có thẩm quyền quyết định gọi là gì?", options: ["Ngân sách nhà nước.", "Quỹ tín dụng thương mại.", "Vốn điều lệ doanh nghiệp.", "Quỹ bảo hiểm nhân thọ."], answer: 0 },
                { type: 'mcq', text: "Theo quy định của pháp luật, cơ quan nào có thẩm quyền quyết định dự toán ngân sách nhà nước và phê chuẩn quyết toán ngân sách nhà nước hằng năm?", options: ["Ngân hàng Nhà nước.", "Quốc hội.", "Kiểm toán độc lập.", "Bộ Công Thương."], answer: 1 },
                { type: 'mcq', text: "Hoạt động thu, chi của ngân sách nhà nước được thực hiện theo nguyên tắc nào sau đây?", options: ["Hoàn trả trực tiếp theo tỉ lệ đóng góp.", "Không hoàn trả trực tiếp.", "Thoả thuận tự nguyện giữa các bên.", "Chia cổ tức hằng năm cho người nộp."], answer: 1 },
                { type: 'mcq', text: "Theo Luật Ngân sách nhà nước năm 2025, hệ thống ngân sách nhà nước bao gồm những bộ phận nào?", options: ["Ngân sách doanh nghiệp và ngân sách hộ gia đình.", "Ngân sách trung ương và ngân sách địa phương.", "Ngân sách nội tệ và ngân sách ngoại tệ.", "Ngân sách thương mại và ngân sách từ thiện."], answer: 1 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về đặc điểm, vai trò và quyền, nghĩa vụ công dân đối với Ngân sách nhà nước:",
                    options: [
                        { text: "a) (Nhận biết) Ngân sách nhà nước thuộc sở hữu toàn dân do Nhà nước đại diện chủ sở hữu và thống nhất quản lí.", answer: true },
                        { text: "b) (Thông hiểu) Chỉ có cán bộ nhà nước mới có quyền được cung cấp thông tin và giám sát tài chính - ngân sách tại địa phương.", answer: false },
                        { text: "c) (Vận dụng) Việc Nhà nước dùng ngân sách đầu tư mở đường giao thông, kéo điện lưới và xây trường học ở các tỉnh miền núi thể hiện vai trò điều tiết kinh tế và bảo đảm an sinh xã hội.", answer: true },
                        { text: "d) (Vận dụng cao) Theo Điều 35 Luật Ngân sách nhà nước năm 2025, người dân khi được nhận kinh phí hỗ trợ từ ngân sách phải sử dụng đúng mục đích, đúng chế độ, tiết kiệm và hiệu quả.", answer: true }
                    ]
                }
            ]
        }
    },
    6: {
        title: "Bài 6: Thuế",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Theo Luật Quản lí thuế năm 2025, khoản phải nộp ngân sách nhà nước bắt buộc của tổ chức, hộ gia đình, hộ kinh doanh, cá nhân theo quy định của các luật thuế gọi là gì?", options: ["Tiền gửi tiết kiệm.", "Thuế.", "Phí dịch vụ tư nhân.", "Tiền từ thiện."], answer: 1 },
                { type: 'mcq', text: "Loại thuế nào sau đây là thuế trực thu (người nộp thuế đồng thời là người chịu thuế)?", options: ["Thuế giá trị gia tăng.", "Thuế tiêu thụ đặc biệt.", "Thuế thu nhập cá nhân.", "Thuế bảo vệ môi trường."], answer: 2 },
                { type: 'mcq', text: "Theo Luật Thuế thu nhập doanh nghiệp năm 2025, doanh nghiệp kinh doanh ngành nghề phổ thông có tổng doanh thu không quá 3 tỉ đồng/năm được áp dụng mức thuế suất nào?", options: ["15%.", "20%.", "35%.", "50%."], answer: 0 },
                { type: 'mcq', text: "Theo Luật Thuế thu nhập cá nhân năm 2025 (hiệu lực từ 01/7/2026), mức giảm trừ gia cảnh đối với bản thân người nộp thuế và mỗi người phụ thuộc lần lượt là bao nhiêu?", options: ["9 triệu đồng/tháng và 3,6 triệu đồng/tháng.", "11 triệu đồng/tháng và 4,4 triệu đồng/tháng.", "15,5 triệu đồng/tháng và 6,2 triệu đồng/tháng.", "20 triệu đồng/tháng và 10 triệu đồng/tháng."], answer: 2 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về các loại thuế phổ biến và quyền, nghĩa vụ của công dân về thuế:",
                    options: [
                        { text: "a) (Nhận biết) Thuế là nguồn thu chính của ngân sách nhà nước và là công cụ điều tiết vĩ mô quan trọng.", answer: true },
                        { text: "b) (Thông hiểu) Đối với thuế giá trị gia tăng (VAT), doanh nghiệp sản xuất kinh doanh là người chịu thuế cuối cùng chứ không phải người tiêu dùng.", answer: false },
                        { text: "c) (Vận dụng) Quốc hội thông qua Luật Thuế tiêu thụ đặc biệt năm 2025 tăng thuế đối với mặt hàng thuốc lá nhằm định hướng hạn chế tiêu dùng sản phẩm có hại cho sức khoẻ.", answer: true },
                        { text: "d) (Vận dụng cao) Cá nhân kinh doanh trực tuyến có doanh thu lớn nhưng dùng tài khoản cá nhân người thân để nhận tiền nhằm che giấu doanh thu, không kê khai là hành vi trốn thuế vi phạm pháp luật.", answer: true }
                    ]
                }
            ]
        }
    },
    7: {
        title: "Bài 7: Sản xuất kinh doanh và các mô hình sản xuất kinh doanh",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Hoạt động sản xuất ra sản phẩm hàng hoá, dịch vụ để đáp ứng nhu cầu của thị trường nhằm mục đích thu được lợi nhuận được gọi là gì?", options: ["Sản xuất tự cấp tự túc.", "Sản xuất kinh doanh.", "Hoạt động thiện nguyện.", "Tiêu dùng công cộng."], answer: 1 },
                { type: 'mcq', text: "Theo quy định hiện hành, Hợp tác xã là tổ chức kinh tế tập thể, đồng sở hữu, có tư cách pháp nhân, do ít nhất bao nhiêu thành viên chính thức tự nguyện thành lập?", options: ["Ít nhất 02 thành viên.", "Ít nhất 03 thành viên.", "Ít nhất 05 thành viên.", "Ít nhất 07 thành viên."], answer: 2 },
                { type: 'mcq', text: "Loại hình doanh nghiệp nào do một cá nhân làm chủ, không có tư cách pháp nhân và chủ doanh nghiệp chịu trách nhiệm bằng toàn bộ tài sản của mình?", options: ["Công ty cổ phần.", "Công ty trách nhiệm hữu hạn một thành viên.", "Doanh nghiệp tư nhân.", "Doanh nghiệp nhà nước."], answer: 2 },
                { type: 'mcq', text: "Loại hình doanh nghiệp nào có vốn điều lệ được chia thành nhiều phần bằng nhau gọi là cổ phần và có quyền phát hành cổ phiếu để huy động vốn?", options: ["Doanh nghiệp tư nhân.", "Công ty hợp danh.", "Công ty trách nhiệm hữu hạn hai thành viên.", "Công ty cổ phần."], answer: 3 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về đặc điểm các mô hình sản xuất kinh doanh:",
                    options: [
                        { text: "a) (Nhận biết) Hộ sản xuất kinh doanh có quy mô nhỏ lẻ, bộ máy quản lí gọn nhẹ nhưng khó huy động vốn lớn.", answer: true },
                        { text: "b) (Thông hiểu) Trong công ty trách nhiệm hữu hạn hai thành viên trở lên, số lượng thành viên tối đa là không giới hạn.", answer: false },
                        { text: "c) (Vận dụng) Anh N thành lập công ty trách nhiệm hữu hạn một thành viên với vốn điều lệ 5 tỉ đồng thì chỉ chịu trách nhiệm về các khoản nợ của công ty trong phạm vi 5 tỉ đồng đó.", answer: true },
                        { text: "d) (Vận dụng cao) Doanh nghiệp K sau khi cổ phần hoá có Nhà nước nắm giữ 54% vốn điều lệ thì vẫn được xác định là doanh nghiệp nhà nước.", answer: true }
                    ]
                }
            ]
        }
    },
    8: {
        title: "Bài 8: Tín dụng và vai trò của tín dụng trong đời sống",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Quan hệ kinh tế giữa chủ thể sở hữu (người cho vay) và chủ thể sử dụng nguồn vốn nhàn rỗi (người vay) theo nguyên tắc hoàn trả có kì hạn cả vốn gốc và lãi gọi là gì?", options: ["Tín dụng.", "Ngân sách.", "Viện trợ không hoàn lại.", "Phân phối thu nhập."], answer: 0 },
                { type: 'mcq', text: "Nội dung nào sau đây KHÔNG phải là đặc điểm cơ bản của tín dụng?", options: ["Dựa trên sự tin tưởng.", "Có tính tạm thời.", "Có tính hoàn trả cả gốc lẫn lãi.", "Chuyển giao vĩnh viễn quyền sở hữu vốn cho người vay."], answer: 3 },
                { type: 'mcq', text: "Người cho vay chỉ cấp tín dụng khi có lòng tin vào việc người vay sử dụng vốn vay đúng mục đích, hiệu quả và có khả năng trả nợ đúng hạn thể hiện đặc điểm nào của tín dụng?", options: ["Tính bắt buộc hành chính.", "Dựa trên sự tin tưởng (chữ tín).", "Tính phi lợi nhuận.", "Tính không hoàn trả."], answer: 1 },
                { type: 'mcq', text: "Việc Chính phủ triển khai chương trình tín dụng ưu đãi cho học sinh, sinh viên có hoàn cảnh khó khăn vay vốn học tập thể hiện vai trò nào của tín dụng?", options: ["Là công cụ điều tiết kinh tế - xã hội của Nhà nước.", "Tối đa hoá lợi nhuận cho ngân hàng thương mại.", "Làm tăng tỉ lệ lạm phát.", "Hạn chế số lượng sinh viên đại học."], answer: 0 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về đặc điểm và vai trò của tín dụng trong đời sống xã hội:",
                    options: [
                        { text: "a) (Nhận biết) Tín dụng giúp luân chuyển nguồn vốn tạm thời nhàn rỗi từ nơi thừa đến nơi thiếu vốn để đầu tư phát triển.", answer: true },
                        { text: "b) (Thông hiểu) Khi vay vốn tín dụng, nếu kinh doanh gặp thua lỗ thì người vay đương nhiên được miễn trả tiền gốc và tiền lãi.", answer: false },
                        { text: "c) (Vận dụng) Khi gặp khó khăn chưa trả được nợ đúng hạn, bà Q chủ động đến ngân hàng trình bày phương án và xin gia hạn nợ là hành vi có trách nhiệm trong quan hệ tín dụng.", answer: true },
                        { text: "d) (Vận dụng cao) Tín dụng đen không phải là dịch vụ tín dụng hợp pháp vì lãi suất cắt cổ, vượt quá quy định pháp luật và gây mất trật tự an toàn xã hội.", answer: true }
                    ]
                }
            ]
        }
    },
    9: {
        title: "Bài 9: Dịch vụ tín dụng",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Hình thức cho vay của ngân hàng hoàn toàn dựa vào uy tín của người vay, không cần tài sản bảo đảm được gọi là gì?", options: ["Cho vay thế chấp.", "Cho vay tín chấp.", "Tín dụng thương mại.", "Phát hành trái phiếu."], answer: 1 },
                { type: 'mcq', text: "Hình thức cho vay đòi hỏi người vay phải có tài sản bảo đảm (như quyền sử dụng đất, nhà ở, ô tô) có giá trị tương đương với lượng vốn cho vay gọi là gì?", options: ["Cho vay tín chấp.", "Cho vay thế chấp.", "Mua hàng trả chậm.", "Gửi tiết kiệm."], answer: 1 },
                { type: 'mcq', text: "Quan hệ tín dụng giữa các doanh nghiệp được thực hiện dưới hình thức mua bán chịu, mua bán trả chậm hàng hoá được gọi là gì?", options: ["Tín dụng nhà nước.", "Tín dụng thương mại.", "Tín dụng ngân hàng.", "Tín dụng tiêu dùng cá nhân."], answer: 1 },
                { type: 'mcq', text: "Loại thẻ ngân hàng cho phép chủ thẻ 'chi tiêu trước, trả tiền sau' trong phạm vi hạn mức tín dụng được cấp gọi là gì?", options: ["Thẻ ghi nợ nội địa (ATM).", "Thẻ tín dụng (Credit Card).", "Thẻ bảo hiểm y tế.", "Thẻ căn cước."], answer: 1 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về các loại hình dịch vụ tín dụng trong đời sống:",
                    options: [
                        { text: "a) (Nhận biết) Phát hành trái phiếu chính phủ (tín phiếu kho bạc, trái phiếu kho bạc, công trái xây dựng Tổ quốc) là hình thức Nhà nước đi vay vốn.", answer: true },
                        { text: "b) (Thông hiểu) Mua hàng trả góp qua công ty tài chính luôn có tổng chi phí thấp hơn so với việc thanh toán tiền mặt một lần.", answer: false },
                        { text: "c) (Vận dụng) Khi sử dụng thẻ tín dụng ngân hàng, nếu chủ thẻ thanh toán đầy đủ dư nợ trong thời hạn miễn lãi (như 40 - 45 ngày) thì sẽ không bị tính lãi suất vay.", answer: true },
                        { text: "d) (Vận dụng cao) Ngân hàng Chính sách xã hội hoạt động không vì mục đích lợi nhuận, thực hiện cho vay ưu đãi đối với hộ nghèo và các đối tượng chính sách để bảo đảm an sinh xã hội.", answer: true }
                    ]
                }
            ]
        }
    },
    10: {
        title: "Bài 10: Lập kế hoạch tài chính cá nhân",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Bản kế hoạch thu chi giúp quản lí tiền bạc của cá nhân bao gồm các quyết định về thu nhập, chi tiêu, tiết kiệm, đầu tư để thực hiện những mục tiêu tài chính gọi là gì?", options: ["Kế hoạch tài chính cá nhân.", "Dự toán ngân sách nhà nước.", "Báo cáo quyết toán thuế.", "Hợp đồng tín dụng."], answer: 0 },
                { type: 'mcq', text: "Xét theo thời gian thực hiện, kế hoạch tài chính cá nhân ngắn hạn nhằm thực hiện mục tiêu tài chính trong khoảng thời gian bao lâu?", options: ["Dưới 3 tháng.", "Từ 3 đến 6 tháng.", "Từ 6 tháng đến 1 năm.", "Trên 5 năm."], answer: 0 },
                { type: 'mcq', text: "Kế hoạch tài chính cá nhân dài hạn là bản kế hoạch thu chi nhằm thực hiện những mục tiêu tài chính quan trọng trong thời gian bao lâu?", options: ["Dưới 1 tháng.", "Từ 1 đến 2 tháng.", "Từ 6 tháng trở lên.", "Chỉ trong 1 tuần."], answer: 2 },
                { type: 'mcq', text: "Bước đầu tiên trong quy trình lập kế hoạch tài chính cá nhân là gì?", options: ["Tuân thủ kế hoạch tài chính.", "Xác định mục tiêu tài chính và thời hạn thực hiện.", "Đi vay tiền ngân hàng.", "Chi tiêu hết cho nhu cầu giải trí."], answer: 1 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Đọc thông tin sau: Lên lớp 10 phải ở trọ xa nhà, mỗi tháng M có tổng thu 3.000.000 đồng (bố mẹ cho 2,5 triệu, làm thêm 500 nghìn). M thiết lập quy tắc phân bổ: 80% cho chi thiết yếu (ăn uống, thuê nhà, điện nước = 2.400.000đ), 13% cho chi phát sinh (390.000đ) và 7% tiết kiệm (210.000đ) để cuối năm học mua xe đạp mới.",
                    options: [
                        { text: "a) (Nhận biết) Mục tiêu tiết kiệm trong 9 tháng để mua xe đạp mới của M là mục tiêu tài chính cá nhân dài hạn.", answer: true },
                        { text: "b) (Thông hiểu) Để tăng nhanh khoản tiền tiết kiệm, M nên cắt giảm tối đa tiền ăn uống hằng ngày dù ảnh hưởng đến sức khoẻ.", answer: false },
                        { text: "c) (Vận dụng) Việc M ghi chép và tách bạch giữa khoản chi thiết yếu (thứ cần) và chi phát sinh (thứ muốn) giúp M kiểm soát chi tiêu không vượt quá thu nhập.", answer: true },
                        { text: "d) (Vận dụng cao) Nếu trong tháng có khoản chi đột xuất làm vượt định mức, M cần chủ động cắt giảm các khoản chi phát sinh không cần thiết ở tuần/tháng tiếp theo để bù đắp và giữ vững kế hoạch.", answer: true }
                    ]
                }
            ]
        }
    },
    11: {
        title: "Bài 11: Khái niệm, đặc điểm và vai trò của pháp luật",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Hệ thống các quy tắc xử sự có tính bắt buộc chung, do Nhà nước ban hành hoặc thừa nhận và bảo đảm thực hiện nhằm điều chỉnh các quan hệ xã hội gọi là gì?", options: ["Quy phạm đạo đức.", "Pháp luật.", "Hương ước làng xã.", "Điều lệ đoàn thể."], answer: 1 },
                { type: 'mcq', text: "Pháp luật là quy tắc xử sự chung, được áp dụng nhiều lần, ở nhiều nơi, đối với tất cả mọi người là thể hiện đặc điểm nào của pháp luật?", options: ["Tính quy phạm phổ biến.", "Tính quyền lực, bắt buộc chung.", "Tính xác định chặt chẽ về mặt hình thức.", "Tính tự nguyện thoả thuận."], answer: 0 },
                { type: 'mcq', text: "Pháp luật do Nhà nước ban hành và được bảo đảm thực hiện bằng sức mạnh của quyền lực nhà nước (kể cả biện pháp cưỡng chế) thể hiện đặc điểm nào?", options: ["Tính quy phạm phổ biến.", "Tính quyền lực, bắt buộc chung.", "Tính xác định chặt chẽ về hình thức.", "Tính truyền thống."], answer: 1 },
                { type: 'mcq', text: "Đối với công dân, pháp luật giữ vai trò là phương tiện để công dân làm gì?", options: ["Thực hiện và bảo vệ quyền, lợi ích hợp pháp của mình.", "Áp đặt ý chí cá nhân lên người khác.", "Miễn trừ mọi nghĩa vụ xã hội.", "Thay thế cơ quan nhà nước xét xử tội phạm."], answer: 0 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về đặc điểm và vai trò của pháp luật trong đời sống xã hội:",
                    options: [
                        { text: "a) (Nhận biết) Pháp luật là phương tiện để Nhà nước quản lí xã hội một cách hiệu quả và dân chủ.", answer: true },
                        { text: "b) (Thông hiểu) Nội dung của mọi văn bản pháp luật có thể viết theo ngôn ngữ đa nghĩa, tuỳ thuộc vào cách hiểu của người áp dụng.", answer: false },
                        { text: "c) (Vận dụng) Anh T đi xe máy vượt đèn đỏ bị cảnh sát giao thông lập biên bản xử phạt hành chính thể hiện tính quyền lực, bắt buộc chung của pháp luật.", answer: true },
                        { text: "d) (Vận dụng cao) Sống và làm việc theo Hiến pháp và pháp luật vừa giúp bảo vệ trật tự an toàn xã hội, vừa tạo môi trường ổn định để mỗi công dân phát triển toàn diện.", answer: true }
                    ]
                }
            ]
        }
    },
    12: {
        title: "Bài 12: Hệ thống pháp luật và văn bản pháp luật Việt Nam",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Trong cấu trúc bên trong của hệ thống pháp luật Việt Nam, đơn vị nhỏ nhất là gì?", options: ["Ngành luật.", "Chế định pháp luật.", "Quy phạm pháp luật.", "Bộ luật."], answer: 2 },
                { type: 'mcq', text: "Tập hợp các quy phạm pháp luật có cùng tính chất điều chỉnh một nhóm quan hệ xã hội tương ứng trong một hoặc nhiều ngành luật được gọi là gì?", options: ["Chế định pháp luật.", "Hệ thống pháp luật.", "Văn bản áp dụng pháp luật.", "Thông tư liên tịch."], answer: 0 },
                { type: 'mcq', text: "Trong hệ thống văn bản quy phạm pháp luật Việt Nam, văn bản nào có hiệu lực pháp lí cao nhất?", options: ["Bộ luật Hình sự.", "Nghị định của Chính phủ.", "Hiến pháp.", "Lệnh của Chủ tịch nước."], answer: 2 },
                { type: 'mcq', text: "Cơ quan nào có thẩm quyền ban hành văn bản quy phạm pháp luật dưới hình thức 'Nghị định'?", options: ["Quốc hội.", "Chính phủ.", "Chủ tịch nước.", "Toà án nhân dân tối cao."], answer: 1 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về hệ thống pháp luật và văn bản pháp luật Việt Nam:",
                    options: [
                        { text: "a) (Nhận biết) Hệ thống pháp luật được thể hiện ra bên ngoài bằng các văn bản quy phạm pháp luật có thứ bậc hiệu lực pháp lí từ cao xuống thấp.", answer: true },
                        { text: "b) (Thông hiểu) Quyết định khen thưởng một cá nhân cụ thể hoặc bản án của Toà án đối với một bị cáo được gọi là văn bản quy phạm pháp luật.", answer: false },
                        { text: "c) (Vận dụng) Văn bản quy phạm pháp luật do cơ quan nhà nước cấp dưới ban hành không được trái với văn bản quy phạm pháp luật của cơ quan nhà nước cấp trên.", answer: true },
                        { text: "d) (Vận dụng cao) Việc phân định rõ các ngành luật (Hiến pháp, Dân sự, Hình sự, Hành chính, Lao động...) giúp điều chỉnh toàn diện, chính xác từng lĩnh vực quan hệ xã hội đặc thù.", answer: true }
                    ]
                }
            ]
        }
    },
    13: {
        title: "Bài 13: Thực hiện pháp luật",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Quá trình hoạt động có mục đích, làm cho những quy định của pháp luật đi vào cuộc sống và trở thành hành vi hợp pháp của các cá nhân, tổ chức gọi là gì?", options: ["Xây dựng pháp luật.", "Thực hiện pháp luật.", "Tuyên truyền đạo đức.", "Soạn thảo văn bản."], answer: 1 },
                { type: 'mcq', text: "Hình thức thực hiện pháp luật nào mà các chủ thể pháp luật kiềm chế không làm những điều mà pháp luật cấm?", options: ["Sử dụng pháp luật.", "Thi hành pháp luật.", "Tuân thủ pháp luật.", "Áp dụng pháp luật."], answer: 2 },
                { type: 'mcq', text: "Hình thức thực hiện pháp luật nào mà các chủ thể chủ động thực hiện nghĩa vụ của mình bằng hành động tích cực (làm những điều pháp luật bắt buộc phải làm)?", options: ["Tuân thủ pháp luật.", "Thi hành pháp luật.", "Sử dụng pháp luật.", "Áp dụng pháp luật."], answer: 1 },
                { type: 'mcq', text: "Hình thức thực hiện pháp luật nào luôn có sự tham gia của cơ quan, công chức nhà nước có thẩm quyền?", options: ["Sử dụng pháp luật.", "Tuân thủ pháp luật.", "Thi hành pháp luật.", "Áp dụng pháp luật."], answer: 3 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về các hình thức thực hiện pháp luật trong thực tiễn:",
                    options: [
                        { text: "a) (Nhận biết) Thực hiện pháp luật bao gồm 4 hình thức: tuân thủ pháp luật, thi hành pháp luật, sử dụng pháp luật và áp dụng pháp luật.", answer: true },
                        { text: "b) (Thông hiểu) Mọi công dân đều có quyền tự mình thực hiện hình thức 'Áp dụng pháp luật' để xử phạt người vi phạm.", answer: false },
                        { text: "c) (Vận dụng) Doanh nghiệp kê khai và nộp thuế đúng hạn là đang thực hiện pháp luật theo hình thức 'Thi hành pháp luật'.", answer: true },
                        { text: "d) (Vận dụng cao) Khi công dân có thể tự do lựa chọn làm hoặc không làm những gì pháp luật cho phép (như thực hiện quyền khiếu nại, quyền tự do kinh doanh) thì đó là hình thức 'Sử dụng pháp luật'.", answer: true }
                    ]
                }
            ]
        }
    },
    14: {
        title: "Bài 14: Khái niệm, đặc điểm, vị trí của Hiến pháp nước CHXHCN Việt Nam",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Hệ thống các quy phạm pháp luật có hiệu lực pháp lí cao nhất quy định những vấn đề cơ bản nhất về chủ quyền quốc gia, chế độ chính trị, quyền con người, quyền và nghĩa vụ công dân là văn bản nào?", options: ["Bộ luật Dân sự.", "Hiến pháp.", "Luật Tổ chức Quốc hội.", "Luật Đất đai."], answer: 1 },
                { type: 'mcq', text: "Theo quy định của Hiến pháp Việt Nam, để thông qua Hiến pháp hoặc sửa đổi Hiến pháp phải có ít nhất bao nhiêu tổng số đại biểu Quốc hội biểu quyết tán thành?", options: ["Quá nửa (trên 50%).", "Ít nhất hai phần ba (2/3).", "Ít nhất ba phần tư (3/4).", "100% đại biểu."], answer: 1 },
                { type: 'mcq', text: "Vị trí tối thượng của Hiến pháp trong hệ thống pháp luật Việt Nam được thể hiện như thế nào?", options: ["Hiến pháp là luật cơ bản của nước CHXHCN Việt Nam, có hiệu lực pháp lí cao nhất.", "Hiến pháp ngang bằng với các Bộ luật do Quốc hội ban hành.", "Hiến pháp chỉ áp dụng cho các cơ quan nhà nước ở trung ương.", "Hiến pháp có thể được sửa đổi bởi Chính phủ."], answer: 0 },
                { type: 'mcq', text: "Cơ quan duy nhất nào có quyền lập hiến (làm Hiến pháp và sửa đổi Hiến pháp) ở Việt Nam?", options: ["Chính phủ.", "Toà án nhân dân tối cao.", "Quốc hội.", "Uỷ ban Thường vụ Quốc hội."], answer: 2 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về đặc điểm và vị trí của Hiến pháp nước Cộng hoà xã hội chủ nghĩa Việt Nam:",
                    options: [
                        { text: "a) (Nhận biết) Mọi văn bản pháp luật khác đều được ban hành trên cơ sở Hiến pháp và phải phù hợp với Hiến pháp.", answer: true },
                        { text: "b) (Thông hiểu) Hiến pháp quy định chi tiết mọi mức xử phạt hành chính đối với từng hành vi vi phạm cụ thể trong đời sống.", answer: false },
                        { text: "c) (Vận dụng) Mọi văn bản quy phạm pháp luật có nội dung trái với Hiến pháp đều phải bị đình chỉ việc thi hành hoặc bãi bỏ.", answer: true },
                        { text: "d) (Vận dụng cao) Quy trình lập hiến và sửa đổi Hiến pháp chặt chẽ, có sự tham gia đóng góp ý kiến của Nhân dân nhằm bảo đảm tính ổn định lâu dài và thể hiện ý chí toàn dân.", answer: true }
                    ]
                }
            ]
        }
    },
    15: {
        title: "Bài 15: Nội dung cơ bản của Hiến pháp về chế độ chính trị",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Theo Điều 1 Hiến pháp năm 2013, nước Cộng hoà xã hội chủ nghĩa Việt Nam là một nước như thế nào?", options: ["Liên bang gồm nhiều tiểu bang độc lập.", "Độc lập, có chủ quyền, thống nhất và toàn vẹn lãnh thổ, bao gồm đất liền, hải đảo, vùng biển và vùng trời.", "Quân chủ lập hiến.", "Chia thành các khu tự trị độc lập."], answer: 1 },
                { type: 'mcq', text: "Theo Điều 2 Hiến pháp năm 2013, tất cả quyền lực nhà nước ở nước Cộng hoà xã hội chủ nghĩa Việt Nam thuộc về ai?", options: ["Thuộc về Nhân dân.", "Thuộc về Chính phủ.", "Thuộc về các tập đoàn kinh tế.", "Thuộc về Toà án."], answer: 0 },
                { type: 'mcq', text: "Theo Điều 4 Hiến pháp năm 2013, tổ chức nào là lực lượng lãnh đạo Nhà nước và xã hội ở Việt Nam?", options: ["Mặt trận Tổ quốc Việt Nam.", "Đảng Cộng sản Việt Nam.", "Tổng Liên đoàn Lao động Việt Nam.", "Hội Luật gia Việt Nam."], answer: 1 },
                { type: 'mcq', text: "Nhân dân thực hiện quyền lực nhà nước bằng những hình thức nào theo quy định của Hiến pháp?", options: ["Chỉ bằng dân chủ trực tiếp.", "Chỉ bằng dân chủ đại diện.", "Bằng dân chủ trực tiếp, bằng dân chủ đại diện thông qua Quốc hội, Hội đồng nhân dân và thông qua các cơ quan khác của Nhà nước.", "Thông qua các tổ chức phi chính phủ quốc tế."], answer: 2 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về nội dung cơ bản của Hiến pháp quy định chế độ chính trị Việt Nam:",
                    options: [
                        { text: "a) (Nhận biết) Nhà nước Cộng hoà xã hội chủ nghĩa Việt Nam là nhà nước pháp quyền xã hội chủ nghĩa của Nhân dân, do Nhân dân, vì Nhân dân.", answer: true },
                        { text: "b) (Thông hiểu) Quyền lực nhà nước ở Việt Nam được phân chia tách biệt hoàn toàn, không có sự phối hợp hay kiểm soát giữa các cơ quan lập pháp, hành pháp, tư pháp.", answer: false },
                        { text: "c) (Vận dụng) Việc cử tri cả nước đi bỏ phiếu bầu đại biểu Quốc hội và Hội đồng nhân dân các cấp là thực hiện quyền lực nhà nước theo hình thức dân chủ trực tiếp để bầu ra cơ quan đại diện.", answer: true },
                        { text: "d) (Vận dụng cao) Đường lối đối ngoại độc lập, tự chủ, hoà bình, hữu nghị, hợp tác và phát triển được hiến định là cơ sở pháp lí cao nhất để Việt Nam hội nhập quốc tế sâu rộng.", answer: true }
                    ]
                }
            ]
        }
    },
    16: {
        title: "Bài 16: Nội dung cơ bản của Hiến pháp về quyền con người, quyền và nghĩa vụ cơ bản của công dân",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Theo Hiến pháp năm 2013, ở nước Cộng hoà xã hội chủ nghĩa Việt Nam, các quyền con người, quyền công dân về chính trị, dân sự, kinh tế, văn hoá, xã hội được công nhận, tôn trọng, bảo vệ, bảo đảm theo cái gì?", options: ["Theo Hiến pháp và pháp luật.", "Theo phong tục từng vùng miền.", "Theo ý muốn của người đứng đầu cơ quan.", "Theo khả năng tài chính của từng cá nhân."], answer: 0 },
                { type: 'mcq', text: "Theo khoản 2 Điều 14 Hiến pháp năm 2013, quyền con người, quyền công dân chỉ có thể bị hạn chế theo quy định của luật trong trường hợp cần thiết vì lí do nào?", options: ["Vì lợi ích kinh tế của một doanh nghiệp.", "Vì lí do quốc phòng, an ninh quốc gia, trật tự, an toàn xã hội, đạo đức xã hội, sức khoẻ của cộng đồng.", "Vì yêu cầu của chính quyền cấp xã.", "Khi công dân chuyển nơi cư trú."], answer: 1 },
                { type: 'mcq', text: "Quyền nào sau đây là quyền về chính trị, dân sự của công dân được quy định trong Hiến pháp?", options: ["Quyền bầu cử và ứng cử vào Quốc hội, Hội đồng nhân dân.", "Quyền sở hữu tư liệu sản xuất.", "Quyền nghiên cứu khoa học.", "Quyền hưởng thụ giá trị văn hoá."], answer: 0 },
                { type: 'mcq', text: "Nghĩa vụ nào sau đây là nghĩa vụ thiêng liêng và quyền cao quý của công dân theo Điều 45 Hiến pháp năm 2013?", options: ["Kinh doanh thương mại.", "Bảo vệ Tổ quốc.", "Du lịch nước ngoài.", "Gửi tiền tiết kiệm."], answer: 1 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về quyền con người, quyền và nghĩa vụ cơ bản của công dân trong Hiến pháp:",
                    options: [
                        { text: "a) (Nhận biết) Quyền công dân không tách rời nghĩa vụ công dân; mọi người có nghĩa vụ tôn trọng quyền của người khác.", answer: true },
                        { text: "b) (Thông hiểu) Công dân được phép lợi dụng quyền tự do ngôn luận để xâm phạm lợi ích quốc gia và xúc phạm danh dự của người khác.", answer: false },
                        { text: "c) (Vận dụng) Khi dịch bệnh truyền nhiễm nguy hiểm bùng phát, Nhà nước áp dụng biện pháp cách li y tế bắt buộc là việc hạn chế quyền tự do đi lại hợp hiến nhằm bảo vệ sức khoẻ cộng đồng.", answer: true },
                        { text: "d) (Vận dụng cao) Việc Hiến pháp năm 2013 đưa Chương 'Quyền con người, quyền và nghĩa vụ cơ bản của công dân' lên Chương II (ngay sau Chế độ chính trị) khẳng định giá trị tối cao của quyền con người trong nhà nước pháp quyền.", answer: true }
                    ]
                }
            ]
        }
    },
    17: {
        title: "Bài 17: Nội dung cơ bản của Hiến pháp về kinh tế, văn hoá, xã hội, giáo dục, KHCN, môi trường",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Theo Điều 51 Hiến pháp năm 2013, nền kinh tế Việt Nam là nền kinh tế như thế nào?", options: ["Nền kinh tế thị trường tự do hoàn toàn.", "Nền kinh tế thị trường định hướng xã hội chủ nghĩa với nhiều hình thức sở hữu và nhiều thành phần kinh tế.", "Nền kinh tế kế hoạch hoá tập trung bao cấp.", "Nền kinh tế chỉ có một thành phần duy nhất."], answer: 1 },
                { type: 'mcq', text: "Trong nền kinh tế Việt Nam, thành phần kinh tế nào giữ vai trò chủ đạo?", options: ["Kinh tế có vốn đầu tư nước ngoài.", "Kinh tế tư nhân.", "Kinh tế nhà nước.", "Kinh tế hộ gia đình."], answer: 2 },
                { type: 'mcq', text: "Theo Điều 53 Hiến pháp năm 2013, đất đai, tài nguyên nước, tài nguyên khoáng sản, nguồn lợi ở vùng biển, vùng trời thuộc sở hữu của ai?", options: ["Thuộc sở hữu tư nhân của người khai thác.", "Là tài sản công thuộc sở hữu toàn dân do Nhà nước đại diện chủ sở hữu và thống nhất quản lí.", "Thuộc sở hữu của các doanh nghiệp khai khoáng.", "Thuộc sở hữu riêng của từng tỉnh, thành phố."], answer: 1 },
                { type: 'mcq', text: "Theo Điều 61 và Điều 62 Hiến pháp năm 2013, lĩnh vực nào được xác định là 'quốc sách hàng đầu'?", options: ["Phát triển giáo dục và phát triển khoa học và công nghệ.", "Khai thác khoáng sản thô.", "Nhập khẩu hàng tiêu dùng xa xỉ.", "Kinh doanh bất động sản."], answer: 0 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về nội dung Hiến pháp quy định lĩnh vực kinh tế, văn hoá, giáo dục, khoa học công nghệ và môi trường:",
                    options: [
                        { text: "a) (Nhận biết) Các chủ thể thuộc các thành phần kinh tế bình đẳng, hợp tác và cạnh tranh theo pháp luật.", answer: true },
                        { text: "b) (Thông hiểu) Bảo vệ môi trường là trách nhiệm riêng của các cơ quan nhà nước, các doanh nghiệp và hộ gia đình không có nghĩa vụ này.", answer: false },
                        { text: "c) (Vận dụng) Chính sách miễn học phí cho học sinh phổ thông công lập và ưu tiên phát triển giáo dục miền núi, hải đảo là cụ thể hoá quy định của Hiến pháp về phát triển giáo dục.", answer: true },
                        { text: "d) (Vận dụng cao) Tổ chức, cá nhân gây ô nhiễm môi trường, làm suy kiệt tài nguyên thiên nhiên và suy giảm đa dạng sinh học phải bị xử lí nghiêm và có trách nhiệm khắc phục, bồi thường thiệt hại.", answer: true }
                    ]
                }
            ]
        }
    },
    18: {
        title: "Bài 18: Đặc điểm, cấu trúc và nguyên tắc hoạt động của hệ thống chính trị Việt Nam",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Cấu trúc của hệ thống chính trị nước Cộng hoà xã hội chủ nghĩa Việt Nam bao gồm các bộ phận nào?", options: ["Đảng Cộng sản Việt Nam, Nhà nước CHXHCN Việt Nam, Mặt trận Tổ quốc Việt Nam và các tổ chức chính trị - xã hội.", "Chỉ bao gồm Quốc hội, Chính phủ và Toà án.", "Các doanh nghiệp nhà nước và các hiệp hội kinh doanh.", "Các cơ quan hành chính từ trung ương đến địa phương."], answer: 0 },
                { type: 'mcq', text: "Tổ chức nào sau đây thuộc nhóm các tổ chức chính trị - xã hội trong hệ thống chính trị Việt Nam?", options: ["Đoàn Thanh niên Cộng sản Hồ Chí Minh.", "Hội người nuôi ong.", "Câu lạc bộ bóng đá.", "Hiệp hội bất động sản."], answer: 0 },
                { type: 'mcq', text: "Nguyên tắc nào đảm bảo mọi hoạt động của hệ thống chính trị đều xuất phát từ lợi ích và nguyện vọng chính đáng của Nhân dân?", options: ["Nguyên tắc quyền lực nhà nước thuộc về Nhân dân.", "Nguyên tắc lợi nhuận tối đa.", "Nguyên tắc tự do cá nhân tuyệt đối.", "Nguyên tắc thoả thuận thương mại."], answer: 0 },
                { type: 'mcq', text: "Hệ thống chính trị Việt Nam mang bản chất của giai cấp nào?", options: ["Giai cấp tư sản.", "Bản chất giai cấp công nhân, tính nhân dân và tính dân tộc sâu sắc.", "Tầng lớp tiểu thương.", "Tầng lớp địa chủ."], answer: 1 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về cấu trúc và nguyên tắc hoạt động của hệ thống chính trị Việt Nam:",
                    options: [
                        { text: "a) (Nhận biết) Trong hệ thống chính trị Việt Nam, Đảng Cộng sản Việt Nam là hạt nhân lãnh đạo, Nhà nước là trụ cột quản lí, Mặt trận Tổ quốc và các đoàn thể là cơ sở chính trị của chính quyền nhân dân.", answer: true },
                        { text: "b) (Thông hiểu) Các tổ chức trong hệ thống chính trị hoạt động biệt lập, không cần tuân theo nguyên tắc tập trung dân chủ và pháp chế xã hội chủ nghĩa.", answer: false },
                        { text: "c) (Vận dụng) Mặt trận Tổ quốc Việt Nam thực hiện vai trò giám sát và phản biện xã hội, tập hợp, phát huy sức mạnh đại đoàn kết toàn dân tộc.", answer: true },
                        { text: "d) (Vận dụng cao) Tính nhất원 chính trị (một đảng duy nhất cầm quyền là Đảng Cộng sản Việt Nam) giúp giữ vững sự ổn định chính trị - xã hội và thống nhất mục tiêu phát triển đất nước.", answer: true }
                    ]
                }
            ]
        }
    },
    19: {
        title: "Bài 19: Quốc hội, Chủ tịch nước và Chính phủ nước CHXHCN Việt Nam",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Cơ quan đại biểu cao nhất của Nhân dân, cơ quan quyền lực nhà nước cao nhất của nước Cộng hoà xã hội chủ nghĩa Việt Nam là cơ quan nào?", options: ["Chính phủ.", "Quốc hội.", "Chủ tịch nước.", "Toà án nhân dân tối cao."], answer: 1 },
                { type: 'mcq', text: "Ba chức năng cơ bản của Quốc hội nước Cộng hoà xã hội chủ nghĩa Việt Nam là gì?", options: ["Lập hiến và lập pháp; quyết định các vấn đề quan trọng của đất nước; giám sát tối cao đối với hoạt động của Nhà nước.", "Xét xử tội phạm; công tố; thi hành án.", "Điều hành kinh tế; thu thuế; in tiền.", "Kí kết hợp đồng thương mại; quản lí doanh nghiệp."], answer: 0 },
                { type: 'mcq', text: "Người đứng đầu Nhà nước, thay mặt nước Cộng hoà xã hội chủ nghĩa Việt Nam về đối nội và đối ngoại là ai?", options: ["Thủ tướng Chính phủ.", "Chủ tịch nước.", "Chánh án Toà án nhân dân tối cao.", "Bộ trưởng Bộ Ngoại giao."], answer: 1 },
                { type: 'mcq', text: "Cơ quan hành chính nhà nước cao nhất của nước Cộng hoà xã hội chủ nghĩa Việt Nam, thực hiện quyền hành pháp, là cơ quan chấp hành của Quốc hội là cơ quan nào?", options: ["Uỷ ban Thường vụ Quốc hội.", "Chính phủ.", "Viện kiểm sát nhân dân tối cao.", "Hội đồng bầu cử quốc gia."], answer: 1 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về vị trí, chức năng của Quốc hội, Chủ tịch nước và Chính phủ:",
                    options: [
                        { text: "a) (Nhận biết) Chủ tịch nước do Quốc hội bầu trong số các đại biểu Quốc hội và là người thống lĩnh lực lượng vũ trang nhân dân, giữ chức Chủ tịch Hội đồng quốc phòng và an ninh.", answer: true },
                        { text: "b) (Thông hiểu) Thủ tướng Chính phủ do Chủ tịch nước tự bổ nhiệm mà không cần Quốc hội bầu hay phê chuẩn.", answer: false },
                        { text: "c) (Vận dụng) Hoạt động chất vấn và trả lời chất vấn của các Bộ trưởng tại các kì họp Quốc hội là biểu hiện thực hiện chức năng giám sát tối cao của Quốc hội.", answer: true },
                        { text: "d) (Vận dụng cao) Sự phối hợp chặt chẽ giữa Quốc hội (ban hành luật, quyết sách) và Chính phủ (tổ chức thi hành Hiến pháp, luật và điều hành kinh tế - xã hội) đảm bảo tính thống nhất và hiệu lực của quyền lực nhà nước.", answer: true }
                    ]
                }
            ]
        }
    },
    20: {
        title: "Bài 20: Toà án nhân dân và Viện kiểm sát nhân dân",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Cơ quan xét xử của nước Cộng hoà xã hội chủ nghĩa Việt Nam, thực hiện quyền tư pháp là cơ quan nào?", options: ["Viện kiểm sát nhân dân.", "Toà án nhân dân.", "Bộ Tư pháp.", "Cơ quan Cảnh sát điều tra."], answer: 1 },
                { type: 'mcq', text: "Cơ quan thực hành quyền công tố và kiểm sát hoạt động tư pháp của nước Cộng hoà xã hội chủ nghĩa Việt Nam là cơ quan nào?", options: ["Toà án nhân dân.", "Thanh tra Chính phủ.", "Viện kiểm sát nhân dân.", "Uỷ ban Tư pháp của Quốc hội."], answer: 2 },
                { type: 'mcq', text: "Nguyên tắc quan trọng trong hoạt động xét xử của Toà án nhân dân là gì?", options: ["Thẩm phán và Hội thẩm xét xử độc lập và chỉ tuân theo pháp luật.", "Xét xử theo chỉ đạo của cơ quan hành chính địa phương.", "Xét xử bí mật tất cả mọi vụ án dân sự.", "Xét xử dựa trên dư luận mạng xã hội."], answer: 0 },
                { type: 'mcq', text: "Nhiệm vụ chung của cả Toà án nhân dân và Viện kiểm sát nhân dân là gì?", options: ["Ban hành các đạo luật và sửa đổi Hiến pháp.", "Bảo vệ công lí, bảo vệ quyền con người, quyền công dân, bảo vệ chế độ xã hội chủ nghĩa, bảo vệ lợi ích của Nhà nước, quyền và lợi ích hợp pháp của tổ chức, cá nhân.", "Lập dự toán và phân bổ ngân sách nhà nước.", "Quản lí hoạt động xuất nhập khẩu hàng hoá."], answer: 1 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về chức năng, nguyên tắc tổ chức và hoạt động của Toà án nhân dân và Viện kiểm sát nhân dân:",
                    options: [
                        { text: "a) (Nhận biết) Chế độ xét xử sơ thẩm, phúc thẩm được bảo đảm trong hoạt động của Toà án nhân dân.", answer: true },
                        { text: "b) (Thông hiểu) Viện kiểm sát nhân dân là cơ quan trực tiếp ra bản án tuyên phạt tù đối với người phạm tội tại phiên toà.", answer: false },
                        { text: "c) (Vận dụng) Việc đảm bảo nguyên tắc tranh tụng trong xét xử và bảo đảm quyền bào chữa của bị can, bị cáo giúp tránh làm oan người vô tội và xét xử đúng người, đúng tội, đúng pháp luật.", answer: true },
                        { text: "d) (Vận dụng cao) Viện kiểm sát nhân dân thực hiện chức năng kiểm sát hoạt động tư pháp nhằm đảm bảo mọi hoạt động khởi tố, điều tra, truy tố, xét xử và thi hành án đều tuân thủ nghiêm chỉnh pháp luật.", answer: true }
                    ]
                }
            ]
        }
    },
    21: {
        title: "Bài 21: Hội đồng nhân dân và Uỷ ban nhân dân",
        exercises: {
            mcq: [
                { type: 'mcq', text: "Cơ quan quyền lực nhà nước ở địa phương, đại diện cho ý chí, nguyện vọng và quyền làm chủ của Nhân dân địa phương, do Nhân dân địa phương bầu ra là cơ quan nào?", options: ["Uỷ ban nhân dân.", "Hội đồng nhân dân.", "Uỷ ban Mặt trận Tổ quốc.", "Toà án nhân dân cấp tỉnh."], answer: 1 },
                { type: 'mcq', text: "Cơ quan nào do Hội đồng nhân dân cùng cấp bầu ra, là cơ quan chấp hành của Hội đồng nhân dân, cơ quan hành chính nhà nước ở địa phương?", options: ["Uỷ ban nhân dân.", "Viện kiểm sát nhân dân.", "Chi cục Thuế.", "Đoàn đại biểu Quốc hội."], answer: 0 },
                { type: 'mcq', text: "Hội đồng nhân dân quyết định các vấn đề của địa phương do luật định và thực hiện chức năng gì đối với hoạt động của các cơ quan nhà nước ở địa phương?", options: ["Thực hiện quyền xét xử tư pháp.", "Giám sát việc tuân theo Hiến pháp và pháp luật ở địa phương và việc thực hiện nghị quyết của Hội đồng nhân dân.", "Thực hành quyền công tố.", "Ban hành các Bộ luật."], answer: 1 },
                { type: 'mcq', text: "Uỷ ban nhân dân chịu trách nhiệm trước những chủ thể nào?", options: ["Chỉ chịu trách nhiệm trước Chủ tịch UBND.", "Chịu trách nhiệm trước Nhân dân địa phương, Hội đồng nhân dân cùng cấp và cơ quan hành chính nhà nước cấp trên.", "Chỉ chịu trách nhiệm trước Toà án nhân dân cùng cấp.", "Không phải báo cáo công tác trước Hội đồng nhân dân."], answer: 1 }
            ],
            tf: [
                {
                    type: 'tf',
                    text: "Về tổ chức và hoạt động của chính quyền địa phương (Hội đồng nhân dân và Uỷ ban nhân dân):",
                    options: [
                        { text: "a) (Nhận biết) Đại biểu Hội đồng nhân dân có trách nhiệm liên hệ chặt chẽ với cử tri, thu thập và phản ánh trung thực ý kiến, nguyện vọng của cử tri.", answer: true },
                        { text: "b) (Thông hiểu) Uỷ ban nhân dân là cơ quan cấp trên của Hội đồng nhân dân cùng cấp và có quyền bãi bỏ nghị quyết của Hội đồng nhân dân.", answer: false },
                        { text: "c) (Vận dụng) Khi người dân đến trụ sở Uỷ ban nhân dân phường để làm thủ tục đăng kí khai sinh, chứng thực giấy tờ là đang làm việc với cơ quan hành chính nhà nước ở địa phương.", answer: true },
                        { text: "d) (Vận dụng cao) Sự gắn kết giữa Hội đồng nhân dân (quyết nghị chủ trương, giám sát) và Uỷ ban nhân dân (tổ chức thực hiện, quản lí hành chính) bảo đảm hiệu lực, hiệu quả quản trị nhà nước ngay từ cơ sở.", answer: true }
                    ]
                }
            ]
        }
    }
};

window.appDatabase.khoi10 = dataKhoi10;