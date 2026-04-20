class CopyEntity {
  static copyObject(obj, name) {
    const newObj = obj;
    if (obj.name) {
      newObj.name = name;
    }
    console.log(newObj);

    return newObj;
  }
}

const testObject = {
  name: "John",
  age: 25,
  hobby: ["music", "art"],
};

CopyEntity.copyObject(testObject, "Oljas");
