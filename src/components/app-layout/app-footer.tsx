import * as React from 'react'

export default class AppFooter extends React.Component {
    render() {
        return (

            <footer className="page-footer font-small blue" >
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="/"> Letterkenny Cricket Council</a>
                </div>
                <style>{`
            .page-footer {
            border-top: 1px solid #eaeaea;
            border-bottom: 1px solid #eaeaea;
            overflow: hidden;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: space-around;
            -webkit-justify-content: space-around;
            -ms-flex-pack: space-around;
            justify-content: space-around;
            width: 100%;
            background: #fff;
            z-index: 1000;
            background-color: #f5f5f7;
            color: #1d1d1f;
      }
        `}</style>
            </footer>

        )
    }
}
