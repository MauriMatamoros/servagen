import React from 'react';

export default class Services extends React.Component {
  render() {
      return(
        <div className="row text-center">
          <h4>Servicios</h4>
          <div className="col-sm-4 col-md-4 col-xs-12 col-lg-4">
            <div className="thumbnail">
              <img className="thumbnail-image" src="/images/Empresas.jpeg" alt="..."/>
              <div className="caption">
                <h3>Empresas</h3>
                <p>...</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-xs-12 col-lg-4">
            <div className="thumbnail">
              <img className="thumbnail-image" src="/images/Personal.jpeg" alt="..."/>
              <div className="caption">
                <h3>Personales</h3>
                <p>...</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-xs-12 col-lg-4">
            <div className="thumbnail">
              <img className="thumbnail-image" src="/images/Fiesta.jpeg" alt="..."/>
              <div className="caption">
                <h3>Fiestas</h3>
                <p>...</p>
              </div>
            </div>
          </div>
        </div>
      );
  };
};
