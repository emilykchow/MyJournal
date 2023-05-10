import React from 'react';
import { Button } from 'react-bootstrap';

const Profile = () => {
  return (
    <div>

        <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
            Create Group
            </Button>
        </div>

        <Button variant="primary" size="lg">
            Pharmacists
        </Button>

        <Button variant="primary" size="lg">
            Pink Crayons
        </Button>
    </div>
  )
}

export default Profile