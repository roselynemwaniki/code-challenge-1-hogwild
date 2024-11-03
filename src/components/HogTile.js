import React, { useState } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

function HogTile({ hog, onHideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div className="ui eight wide column">
      <Card onClick={toggleDetails}>
        <Image src={hog.image} wrapped ui={false} alt={hog.name} />
        <Card.Content>
          <Card.Header>{hog.name}</Card.Header>
          {showDetails && (
            <>
              <Card.Meta>
                <span>Specialty: {hog.specialty}</span>
              </Card.Meta>
              <Card.Description>
                Weight: {hog.weight} lbs
              </Card.Description>
              <Card.Description>
                Greased: {hog.greased ? "Yes" : "No"}
              </Card.Description>
              <Card.Description>
                Highest Medal: {hog.highestMedal}
              </Card.Description>
            </>
          )}
        </Card.Content>
        <Button onClick={() => onHideHog(hog.name)}>Hide</Button>
      </Card>
    </div>
  );
}

export default HogTile;
