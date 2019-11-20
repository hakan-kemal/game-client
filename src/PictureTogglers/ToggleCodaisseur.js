import React, { Component } from "react";

class ToggleCodaisseur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
    this.toggleBox = this.toggleBox.bind(this);
  }

  toggleBox() {
    const { opened } = this.state;
    this.setState({
      opened: !opened
    });
  }

  render() {
    const { isOpen } = this.props;
    if (!isOpen) {
      return <div onClick={this.props.onClick} className="square"></div>;
    } else {
      return (
        <div>
          <img
            alt="codaisseur"
            src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/3354/s300/codaisseur-square.png"
            className="codeImage"
          ></img>
        </div>
      );
    }
  }
}

export default ToggleCodaisseur;
