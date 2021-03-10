import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import StarRatings from 'react-star-ratings';

const ProfileModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.coach.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StarRatings
                    rating={2.403}
                    starDimension="20px"
                    starSpacing="1px"
                    starRatedColor="orange"
          />
          <p>
              {props.coach.id} ratings
          </p>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
            <Button 
                variant="secondary"
                onClick={props.onHide} 
            >
                Close
            </Button>
            <Link
                    to={{
                        pathname: "/coach/profile/",
                        state: {
                            coach: props.coach
                        }
                    }}
                >
              <Button>
                Book
              </Button>
            </Link>
        </Modal.Footer>
      </Modal>
    );
  }

export default ProfileModal