import React, { Component } from 'react';
import { connect } from 'react-redux';
import './About.scss';
import { FormattedMessage } from 'react-intl';

class About extends Component {

    render() {

        return (
            <div className="section-share section-about">
                <div className="section-about-header">
                    Truyền thông nói gì về Channel Duy7ham
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/HUxly_9N_9w"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                    </div>
                    <div className="content-right">
                        <p>
                            Trước đó, khoảng 18h50, cơn mưa khá nặng hạt đổ xuống nơi diễn ra hợp luyện diễu binh, quận 1. Trong ảnh là khối chiến sĩ Quân chủng Phòng không Không quân đứng dưới mưa.

                            Theo dự báo của Đài Khí tượng Thủy văn Khu vực Nam Bộ và Tây Nguyên, từ hôm nay đến 29/4 tại TP HCM và Nam Bộ mưa xảy ra vào chiều tối, trong khi buổi sáng và trưa trời nắng nóng, với nền nhiệt 34-36 độ C. Còn trong những ngày lễ từ 30/4-3/5 tại trung tâm TP HCM và các quận huyện lân cận sẽ có ngày nắng, chiều tối khả năng xảy ra mưa.

                            Đơn vị dự báo thời tiết khuyến nghị ban tổ chức các chương trình nên chuẩn bị dựng rạp, che chắn thiết bị điện tử, đảm bảo phương tiện cấp cứu, ứng phó tình huống phát sinh do thời tiết. Người dân tham gia các hoạt động ngoài trời nên chuẩn bị ô, áo mưa.
                        </p>

                    </div>
                </div>
            </div>
        );
    }

}


const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
