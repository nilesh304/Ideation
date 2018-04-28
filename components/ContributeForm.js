import React, { Component } from "react";
import { Form, Input, Message, Button, Label } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import Router from "../route";
import web3 from "../ethereum/web3";

class ContributeForm extends Component {
  state = {
    value: "",
    errorMessage: "",
    loading: false
  };
  onSubmit = async event => {
    event.preventDefault();
    const campaign = Campaign(this.props.address);
    this.setState({ loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.Contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether")
      });
      //Router.replaceRoute(`/campaigns/${this.props.address}`);
      //window.location.reload();
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false, value: "" });
  };
  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Amount to Contribute</label>

          <Input
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
            label="ether"
            labelPosition="right"
          />
          <Label basic color="green" pointing>
            Value should be more than zero eth
          </Label>
          <Message error header="Error!" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>
            Contribute
          </Button>
        </Form.Field>
      </Form>
    );
  }
}
export default ContributeForm;
