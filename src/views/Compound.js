import React from 'react';
import * as MultiStep from '../components/MultiStep/MultiStep'

//COmpound Components - zestaw komponentów, który będzie wpływał na siebie ( w przyszłości)

const Compound = () => (
  <div>
    <h1>Hello World!</h1>
    <MultiStep.Wrapper>
      <MultiStep.Page>Page #1</MultiStep.Page>
      <MultiStep.Page>Page #2</MultiStep.Page>
      <MultiStep.Page>Page #3</MultiStep.Page>
      <MultiStep.Controls />
    </MultiStep.Wrapper>
  </div>
)

export default Compound;