import * as React from 'react';
import './Footer.css';

interface IFooterProps {
    language: any;
    handleLanguageChange(newLanguage: string): void
}

class Footer extends React.Component<IFooterProps> {
    public currentLanguage = localStorage.getItem("lang") || "de";

    public render() {
        const lang = this.props.language.FOOTER;
        return (
            <div className="footer">
                <div className="links">
                    <a href="#">{lang.DATA_PROTECTION}</a>
                    <a href="#">{lang.CONDITIONS}</a>
                    <a href="#">{lang.IMPRINT}</a>
                </div>
                <div className="language-selector">
                    <select defaultValue={this.currentLanguage} onChange={this.handleLanguageChange}>
                        <option value="de">German</option>
                        <option value="en">English</option>
                        <option value="al">Albanian</option>
                    </select>
                </div>
                <div className="footer-break"/>
                {lang.COPYRIGHT} © {new Date().getFullYear()}
                <div className="footer-socialmedia">
                    <div className="socialmedia-item fb"/>
                    <div className="socialmedia-item twitter"/>
                    <div className="socialmedia-item google"/>
                    <div className="socialmedia-item instagram"/>
                </div>
            </div>
        )
    }

    public handleLanguageChange = (event: any) => {
        console.log("Language changed")
        localStorage.setItem("lang", event.target.value);
        this.props.handleLanguageChange(event.target.value);
    }
}
export default Footer;