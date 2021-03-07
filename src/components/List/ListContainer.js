import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList} from '../../redux/columnsRedux';
import {createActionAddColumn} from'../../redux/columnsRedux';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredLists = state.lists.filter(list => list.id == id);
  const listParams = filteredLists[0] || {};

  return {
    ...listParams,
    columns: getColumnsForList(state, id),
  };
};
// funkcja mapStateToProps dodaje propsy komponentu List,
// wykorzystując fragmenty stanu aplikacji z reduksowego magazynu (store).

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.match.params.id,
    title,
  })),// mapDispatchToProps to funkcja, która nadaje komponentowi propsy, 
}); // w których znajdą się funkcje wysyłające akcje do magazynu. 
// Pamiętaj, że akcja jest zgłoszeniem chęci zmiany stanu aplikacji 

export default connect(mapStateToProps, mapDispatchToProps)(List);