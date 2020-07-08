import React from 'react';
import * as MultiStep from '../components/MultiStep/MultiStep'

//COmpound Components - zestaw komponentów, który będzie wpływał na siebie ( w przyszłości)

const Compound = () => (
  <div>
    <h1>Hello World!</h1>
    <MultiStep.Wrapper>

      <MultiStep.Page pageId={1}>
        <div className="box">
          <p>What's your name</p>
          <input class="input" type="text" placeholder="First name"/>
        </div>
      </MultiStep.Page>

      <MultiStep.Page pageId={2}>
        <div className="box">
          <p>Last name?</p>
          <input class="input" type="text" placeholder="Last name"/>
        </div>
      </MultiStep.Page>

      <MultiStep.Page pageId={3}>
        <div className="box">
          <p>Give your email</p>
          <input class="input" type="email" placeholder="email"/>
        </div>
      </MultiStep.Page>

      <MultiStep.Controls />

    </MultiStep.Wrapper>
  </div>
)

export default Compound;