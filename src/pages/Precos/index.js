import React from 'react';
import HeaderPrecos from '../../components/HeaderPrecos';
import CardPrecoInternacional from '../../components/CardPrecoInternacional';
import CardPrecoNacional from '../../components/CardPrecoNacional';

const Preco = () => {
    return(
        <React.Fragment>
      <HeaderPrecos />
      <CardPrecoNacional />
      <CardPrecoInternacional />
    </React.Fragment>
    )
}

export default Preco;