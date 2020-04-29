import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from './styles';
import { formatPrice } from '~/util/format';

export default function VehicleCard({ vehicle }) {
  const priceFormatted = useMemo(() => {
    const priceNumber = Number(vehicle.Price.replace(',', '.'));

    return formatPrice(priceNumber);
  }, [vehicle]);
  return (
    <Container>
      <img src={vehicle.Image} alt={vehicle.Model} />

      <Content>
        <h2>
          {vehicle.Make} {vehicle.Model}
        </h2>
        <h3>{vehicle.Version}</h3>

        <strong>{priceFormatted}</strong>

        <div>
          <span>
            {vehicle.YearFab}/{vehicle.YearModel}
          </span>
          <span>{vehicle.KM}km</span>
        </div>
      </Content>
    </Container>
  );
}

VehicleCard.propTypes = {
  vehicle: PropTypes.shape({
    ID: PropTypes.number,
    Make: PropTypes.string,
    Model: PropTypes.string,
    Version: PropTypes.string,
    Image: PropTypes.string,
    KM: PropTypes.number,
    Price: PropTypes.string,
    YearModel: PropTypes.number,
    YearFab: PropTypes.number,
    Color: PropTypes.string,
  }).isRequired,
};
