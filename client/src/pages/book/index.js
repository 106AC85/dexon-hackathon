import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { DetailWrapper, Header, Content } from "./style";
import { actionCreators } from "./store";
import { from } from "rxjs";
class Book extends PureComponent {
  render() {
    return (
      <DetailWrapper>這是一個測試</DetailWrapper>
      // <DetailWrapper>
      //   <Header>{this.props.title}</Header>
      //   <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
      // </DetailWrapper>
    );
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapStateToProps = state => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"])
});

const mapDispathToProps = dispatch => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(withRouter(Book));
