class TableServiceModel {
  constructor() {
    this._status = false;
  }

  getOccupiedStatus() {
    return this._status;
  }

  setOccupiedStatus(status) {
    this._status = status;
  }
}

const TableService = new TableServiceModel;
module.exports = TableService;