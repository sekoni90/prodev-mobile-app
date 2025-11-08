import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6'
  },
  searchGroup: {
    padding: 16,
    backgroundColor: 'white'
  },
  searchFormGroup: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchControlGroup: {
    flex: 1
  },
  searchFormText: {
    fontSize: 16,
    color: '#333'
  },
  searchControl: {
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 8,
    padding: 10,
  },
  searchButton: {
    backgroundColor: '#34967C',
    padding: 12,
    marginLeft: 8,
    borderRadius: 8
  },
  filterGroup: {
    flexDirection: 'row',
    padding: 12,
    gap: 12
  },
  filterContainer: {
    width: 86,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listingContainer: {
    padding: 16,
  },
  paginationContainer: {
    paddingVertical: 20,
    alignItems: 'center'
  },
  showMoreButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8
  },
  showMoreButtonText: {
    color: '#34967C',
    fontWeight: '600'
  }
});
