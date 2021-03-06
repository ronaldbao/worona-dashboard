import React from 'react';
import { connect } from 'react-redux';
import Button from '../../elements/Button';
import * as deps from '../../deps';
import * as actions from '../../actions';

const DeleteSite = ({ deleteModal, name }) => (
  <div className="columns">
    <div className="column is-half is-offset-one-quarter">
      <hr />
      <div className="is-pulled-right">
        <Button size="small" outlined color="danger" onClick={deleteModal}>
          <span>Delete {name}</span>
        </Button>
      </div>
    </div>
  </div>
);

DeleteSite.propTypes = {
  deleteModal: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ site: deps.selectors.getSelectedSite(state) });

const mergeProps = ({ site: { id, name } }, { dispatch }) => ({
  name,
  deleteModal: () => dispatch(actions.deleteModalOpened({ id, name })),
});

export default connect(mapStateToProps, dispatch => ({ dispatch }), mergeProps)(DeleteSite);
