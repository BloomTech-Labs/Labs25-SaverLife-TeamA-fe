import React from 'react';
import Navbar from '../../common/Navbar';
import { Progress } from 'antd';

const RenderPastSpendingPage = props => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Progress towards Goal</h1>
        <Progress
          strokeColor={{ '0%': '#ecb7db', '100%': '#c01089' }}
          percent={99}
        />
      </div>
      <h1>Graph will go below this</h1>
      <div>
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea0be3d4-ead6-41cf-9440-d74dac5b31e0/dcwny3l-1b647289-df6f-4650-b681-c083dc9cdd5e.jpg/v1/fill/w_1024,h_576,q_75,strp/the_cat_in_the_hat_hang_in_there_baby__by_lah2000_dcwny3l-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC9lYTBiZTNkNC1lYWQ2LTQxY2YtOTQ0MC1kNzRkYWM1YjMxZTBcL2Rjd255M2wtMWI2NDcyODktZGY2Zi00NjUwLWI2ODEtYzA4M2RjOWNkZDVlLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.GlkUeJzSgZ-ct1ipGhhIxW637Mk3inQEO2Rx4hQB60g"
          alt="some graph here"
        />
      </div>
    </div>
  );
};

export default RenderPastSpendingPage;
