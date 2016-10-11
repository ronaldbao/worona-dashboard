import React from 'react';
import cn from 'classnames';
import moment from 'moment';
import { connect } from 'react-redux';
import * as deps from '../../dependencies';
import { Link } from 'react-router';

const Site = ({ name, url, date, id, deleteSite }) => (
  <div className="column is-narrow-mobile is-one-third-tablet is-one-quarter-desktop">
    <div className={cn('card', 'is-fullwidth')}>
      <header className="card-header">
        <p className="card-header-title">
          {name}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          <strong>URL:</strong> {url}
          <br />
          <strong>Site ID:</strong> {id}
          <br />
          <br />
          <small>Last modified: {moment(date).fromNow()}</small>
        </div>
      </div>
      <footer className="card-footer">
        <Link className="card-footer-item" to={`/check-site/${id}`} role="button" >
          <span className={cn('icon', 'is-small')}>
            <i className="fa fa-cog"></i>
          </span>
          Configure
        </Link>
        <a className="card-footer-item is-loading" onClick={deleteSite} role="button" >
          <span className={cn('icon', 'is-small')}>
            <i className="fa fa-trash-o"></i>
          </span>
          Delete
        </a>
      </footer>
    </div>
  </div>
);
Site.propTypes = {
  name: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  date: React.PropTypes.number.isRequired,
  deleteSite: React.PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteSite: () => dispatch(deps.actions.deleteSiteRequested(ownProps.id)),
});

export default connect(null, mapDispatchToProps)(Site);
