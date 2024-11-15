import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
class MedicalFacility extends Component {

    render() {
        return (
            <div className='section-share section-medical-facility'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cơ sở y tế</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-facility'></div>
                                <div>Bệnh viện Hữu nghị Việt Đức 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-facility'></div>
                                <div>Bệnh viện Hữu nghị Việt Đức 2</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-facility'></div>
                                <div>Bệnh viện Hữu nghị Việt Đức 3</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-facility'></div>
                                <div>Bệnh viện Hữu nghị Việt Đức 4</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-facility'></div>
                                <div>Bệnh viện Hữu nghị Việt Đức 5</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-facility'></div>
                                <div>Bệnh viện Hữu nghị Việt Đức 6</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-facility'></div>
                                <div>Bệnh viện Hữu nghị Việt Đức 7</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-facility'></div>
                                <div>Bệnh viện Hữu nghị Việt Đức 8</div>
                            </div>
                        </Slider>
                    </div>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
