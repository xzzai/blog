import React from 'react';
import PropTypes from 'prop-types';
import LzEditor from 'react-lz-editor';
import InputItem from "../InputItem";
import Button from "../Button";
import TopicTag from "../TopicTag";
import DefaultImg from '../../img/default-img.png';
import './articleForm.scss';

class ArticleForm extends React.Component {

    constructor(props) {
        super(props);
        this.publish = this.publish.bind(this);
        this.save = this.save.bind(this);
        this.modalClose = this.modalClose.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.thumbChange = this.thumbChange.bind(this);
        this.contentChange = this.contentChange.bind(this);
    }

    publish() {
        this.props.handlePublish();
    }

    save() {
        this.props.handleSave();
    }

    titleChange(v) {
        this.props.titleChange(v);
    }

    summaryChange(v) {
        this.props.summaryChange(v);
    }

    contentChange(v) {
        this.props.contentChange(v);
    }

    tagEnter(v) {
        this.props.tagEnter(v);
    }

    tagClose(v) {
        this.props.closeTag(v);
    }

    modalClose() {
        this.props.modalClose();
    }

    handleUpload() {
        const file = this.fileInput.files[0];
        if (file) {
            this.props.upload(file);
        }
    }

    thumbChange() {
        const file = this.coverInput.files[0];
        if (file) {
            this.props.changeThumb(file);
        }
    }

    render() {
        const {tags, errorMsg, successMsg, btnContent,
            defaultSummary, defaultContent, defaultTitle, filePath, defaultThumb} = this.props;
        return (
            <div className={'container article-form'}>
                <div className={'article-form-title'}>
                    <div className={'blog-title'}>
                        <span>标题</span> <InputItem inputType={'text'} handleChange={(v) => this.titleChange(v)} defaultVal={defaultTitle}/>
                    </div>
                    <div className={'blog-thumb'}>
                        <span>卡片图像</span>
                        <img src={defaultThumb ? defaultThumb : DefaultImg} className={'article-form-thumb'} />
                        <div className={'thumb-change'}>
                            <input type='file' name='file' ref={(input)=>{this.coverInput = input;}}/>
                            <input type='button' value={'上传图像'} onClick={this.thumbChange} />
                        </div>
                    </div>
                </div>
                <div className={'article-form-tags article-form-item'}>
                    <span>标签</span>
                    <InputItem inputType={'text'}  onEnter={(v) => this.tagEnter(v)}>
                        {
                            tags.map((val, index) => (
                                <TopicTag topicName={val} id={index} tagClose={(v) => this.tagClose(v)} key={index}/>
                            ))
                        }
                    </InputItem>
                </div>
                <div className={'article-form-summary article-form-item'}>
                    <span>简介</span> <textarea onChange={(v) => this.summaryChange(v)} value={defaultSummary} className={'summary-text'} />
                </div>
                <div className={'article-form-content article-form-item'}>
                    <span>正文</span>
                    <LzEditor
                        active={true}
                        importContent={defaultContent}
                        cbReceiver={this.contentChange}
                        image={false}
                        video={false}
                        audio={false}
                        convertFormat="markdown"/>
                </div>
                <div className={'blog-img-file'}>
                    <input type='file' name='file' ref={(input)=>{this.fileInput = input;}} />
                    <input type='button' value={'上传图片'} onClick={this.handleUpload} />
                    <input type='text' readOnly={true} value={filePath}/>
                </div>

                <div className={'article-form-button'}>
                    <Button describe={btnContent} btnClick={this.publish} className={''}/>
                    <Button describe={'保存'} btnClick={this.save} className={''}/>
                    <span className={'success-msg'}>{successMsg}</span>
                    <span className={'error-msg'}>{errorMsg}</span>
                </div>
            </div>
        );
    }
}

ArticleForm.propTypes = {
    tags: PropTypes.array.isRequired,
    errorMsg: PropTypes.string,
    successMsg: PropTypes.string,
    defaultTitle: PropTypes.string,
    defaultSummary: PropTypes.string,
    defaultContent: PropTypes.string,
    defaultThumb: PropTypes.string,
    btnContent: PropTypes.string.isRequired,
    filePath: PropTypes.string,
    upload: PropTypes.func.isRequired,
    handlePublish: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired,
    titleChange: PropTypes.func.isRequired,
    changeThumb: PropTypes.func.isRequired,
    summaryChange: PropTypes.func.isRequired,
    contentChange: PropTypes.func.isRequired,
    tagEnter: PropTypes.func.isRequired,
    closeTag: PropTypes.func.isRequired,
    modalClose: PropTypes.func.isRequired,
};

export default ArticleForm;
