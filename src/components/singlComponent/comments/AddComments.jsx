import { Component} from "react";
import { Comment, Avatar, Form, Button, List, Input } from "antd";
import moment from "moment";

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </>
);

class AddComment extends Component {
  state = {
    comments: [],
    submitting: false,
    value: "",
    storage:[]
 
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    localStorage.setItem("coment", this.state.value)
    
    this.setState({
      submitting: true,
      storage: localStorage.getItem("coment")
 
    });
    setTimeout(() => {
      this.setState({
        submitting: false,
        value: "",
        comments: [
          ...this.state.comments,
          {
            author: "user",
            avatar:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png",
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
        ],
      });
    }, 1000);
  };

  handleChange = (e) => {
      let{ value } = e.target
    this.setState({
      value: value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;
    
    return (
      <>
        {comments.length > 0 && <CommentList comments={comments} />}

        <Comment
          avatar={
            <Avatar
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
              alt="user"
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </>
    );
  }
}

export default AddComment;