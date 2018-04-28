import React, { Component } from "react";
import {
  Input,
  Form,
  Label,
  Message,
  Button,
  Grid,
  Card
} from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link } from "../route";

class frontPage extends Component {
  state = {
    value: "",
    errorMessage: "",
    loading: false
  };

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  }
  render() {
    return (
      <Layout>
        <div>
          <Form error={!!this.state.errorMessage}>
            <Form.Field>
              <label>Project Name</label>

              <Input
                value={this.state.value}
                onChange={event => this.setState({ value: event.target.value })}
                label="Project Name"
                labelPosition="left"
              />

              <Message
                error
                header="Error!"
                content={this.state.errorMessage}
              />
            </Form.Field>
          </Form>
          <Link route={`/ideas/${this.state.value}`}>
            <a>
              <Button primary>Create Campaign</Button>
            </a>
          </Link>
        </div>
      </Layout>
    );
  }
}
export default frontPage;
