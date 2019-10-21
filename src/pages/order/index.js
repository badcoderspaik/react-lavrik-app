import React from 'react';
import {Form, Button, Modal} from 'react-bootstrap';
import withStore from '@/hocs/WithStore';
import {routesMap} from '@r/';
import {Link} from 'react-router-dom';

class Order extends React.Component {

  state = {
    showModal: false
  };

  show = () => {
    this.setState({ showModal: true });
  };

  hide = () => {
    this.setState({ showModal: false });
  };

  confirm = () => {
    this.hide();
    this.props.history.push(routesMap.result);
  };

  render() {
    let formFields = [];
    let disable = true;
    let formData = this.props.stores.order;

    for (let name in formData.data) {
      let field = formData.data[name];
      disable = field.valid;

      formFields.push(
        <Form.Group key={name} controlId={'order-form-' + name}>
          <Form.Label>{field.label}</Form.Label>
          <Form.Control
            type='text'
            value={field.value}
            onChange={(e) => formData.change(name, e.target.value)}
          />
          {field.valid === null || field.valid ? '' :
            <Form.Text className='text-muted'>
              {field.errorText}
            </Form.Text>
          }
        </Form.Group>
      );
    }

    return (
      <div>
        <h2>Order</h2>
        <hr/>
        <Form>
          {formFields}
        </Form>

        <Link className='btn btn-warning' to={routesMap.index}>
          Home
        </Link>
        &nbsp;
        <Button
          variant='success'
          disabled={!disable}
          onClick={this.show}
        >
          Apply order
        </Button>

        <Modal show={this.state.showModal} backdrop='static' onHide={this.hide}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hide}>
              Ooops
            </Button>
            <Button variant='primary' onClick={this.confirm}>
              All right
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default withStore(Order);