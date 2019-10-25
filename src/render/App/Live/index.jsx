import React, { PureComponent } from 'react';
import {Link} from 'dva/router';

export default class Live extends React.Component {
  constructor(props){
      super(props);
		  this.state = {
			  imgSrc: require('../assets/image/3.jpeg'),
		  };
    }
	componentWillMount(){

	}
	render() {
    const { imgSrc } = this.state;
		return (
			<div id="Live">
        <section className="live-Wrapper">
	        <div className="live-Slide-player">
						<button>进入直播间</button>
	        </div>
	        <ul className="live-Slide-nav">
		        <li className="tab">
			        <img src={imgSrc} alt=""/>
		        </li>
		        <li className="tab">
			        <img src={imgSrc} alt=""/>
		        </li>
		        <li className="tab">
			        <img src={imgSrc} alt=""/>
		        </li>
		        <li className="tab">
			        <img src={imgSrc} alt=""/>
		        </li>
		        <li className="tab">
			        <img src={imgSrc} alt=""/>
		        </li>
		        <li className="tab">
			        <img src={imgSrc} alt=""/>
		        </li>
		        <li className="tab">
			        <img src={imgSrc} alt=""/>
		        </li>
		        <li className="tab">
			        <img src={imgSrc} alt=""/>
		        </li>
	        </ul>
        </section>
        <div className="live-Main">
          <ul className="live-Type-nav">
            <li className="tab">
              <img src={imgSrc} alt=""/>
            </li>
            <li className="tab">
              <img src={imgSrc} alt=""/>
            </li>
            <li className="tab">
              <img src={imgSrc} alt=""/>
            </li>
            <li className="tab">
              <img src={imgSrc} alt=""/>
            </li>
            <li className="tab">
              <img src={imgSrc} alt=""/>
            </li>
            <li className="tab">
              <img src={imgSrc} alt=""/>
            </li>
            <li className="tab">
              <img src={imgSrc} alt=""/>
            </li>
            <li className="tab more">
              <a href="javascript:;">查看更多</a>
            </li>
          </ul>

        </div>
        <div className="live-Recommend">
          <div className="main-Title">
            <h2>热门推荐 </h2>
            <a href="#">查看更多></a>
          </div>
          <ul className="live-Recommend-list">
            <li className="item">
              <img src={imgSrc} alt=""/>
              <div className="live-Recommend-detail">
                <img className="avatar" src={imgSrc} alt=""/>
                <div className="title">
                  <h3>直播标题</h3>
                  <div className="detail">
                    <span>作者名字</span><span>12324人</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="item">
              <img src={imgSrc} alt=""/>
              <div className="live-Recommend-detail">
                <img className="avatar" src={imgSrc} alt=""/>
                <div className="title">
                  <h3>直播标题</h3>
                  <div className="detail">
                    <span>作者名字</span><span>12324人</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="item">
              <img src={imgSrc} alt=""/>
              <div className="live-Recommend-detail">
                <img className="avatar" src={imgSrc} alt=""/>
                <div className="title">
                  <h3>直播标题</h3>
                  <div className="detail">
                    <span>作者名字</span><span>12324人</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="item">
              <img src={imgSrc} alt=""/>
              <div className="live-Recommend-detail">
                <img className="avatar" src={imgSrc} alt=""/>
                <div className="title">
                  <h3>直播标题</h3>
                  <div className="detail">
                    <span>作者名字</span><span>12324人</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="item">
              <img src={imgSrc} alt=""/>
              <div className="live-Recommend-detail">
                <img className="avatar" src={imgSrc} alt=""/>
                <div className="title">
                  <h3>直播标题</h3>
                  <div className="detail">
                    <span>作者名字</span><span>12324人</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
			</div>
		);
	}
}

export default class Live extends PureComponent {
    render() {
        return (
            <div className="live-container">
                <div className="live-content">
                    <div className="alive">
                        <div className="live-mask">
                            点击进入直播间
                        </div>
                    </div>
                    <ul className="othen-live">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <ul className="live-classify">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li>
                            <Link to="/more_live_classify">查看更多分类>></Link>
                        </li>
                    </ul>  
                </div>
                <div className="live-hot-recommend">
                    <h3>热门推荐</h3>
                    <ul className="live-hot-recommend-list">
                        <li>
                            <div className="img"></div>
                            <div className="live-hot-recommend-info">
                                <div className="avatar"></div>
                                <div className="live-info">
                                    <p className="title">直播标题</p>
                                    <p className="author">作者名字</p>
                                </div>
                                <div className="live-desc">
                                    <div className="subscribe-state">关注</div>
                                    <span className="watcing-num">观看人数</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="img"></div>
                            <div className="live-hot-recommend-info">
                                <div className="avatar"></div>
                                <div className="live-info">
                                    <p className="title">直播标题</p>
                                    <p className="author">作者名字</p>
                                </div>
                                <div className="live-desc">
                                    <div className="subscribe-state">关注</div>
                                    <span className="watcing-num">观看人数</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="img"></div>
                            <div className="live-hot-recommend-info">
                                <div className="avatar"></div>
                                <div className="live-info">
                                    <p className="title">直播标题</p>
                                    <p className="author">作者名字</p>
                                </div>
                                <div className="live-desc">
                                    <div className="subscribe-state">关注</div>
                                    <span className="watcing-num">观看人数</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="img"></div>
                            <div className="live-hot-recommend-info">
                                <div className="avatar"></div>
                                <div className="live-info">
                                    <p className="title">直播标题</p>
                                    <p className="author">作者名字</p>
                                </div>
                                <div className="live-desc">
                                    <div className="subscribe-state">关注</div>
                                    <span className="watcing-num">观看人数</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="img"></div>
                            <div className="live-hot-recommend-info">
                                <div className="avatar"></div>
                                <div className="live-info">
                                    <p className="title">直播标题</p>
                                    <p className="author">作者名字</p>
                                </div>
                                <div className="live-desc">
                                    <div className="subscribe-state">关注</div>
                                    <span className="watcing-num">观看人数</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}