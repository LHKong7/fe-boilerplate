// singleton in JS using object literal notation:
let singleton = {
    name: value,
    method() {

    }
}

// module pattern = singleton pattern + private variables + privileged methods
let modulePattern = function() {
    // private variables and functions
    let privatevariable = 10;

    function privateFunction() {
        return false;
    }

    // privileged/public methods and properties
    return {
        publicProperty: true,

        publicMethod() {
            privatevariable++;
            return privateFunction();
        }
    }
}

// application:
let application = function() {
    let components = new Array();

    components.push(new BaseComponent());

    return {
        getComponentCount() {
            return components.length;
        },

        registerComponent(component) {
            if (typeof component == 'object') {
                components.push(component);
            }
        }
    }
}

// module-augmentation pattern
let singletonAugment = function() {
    // private variables and functions
    let privateVariable = 10;
   
    function privateFunction() {
        return false;
    }
   
    // create object
    let object = new CustomType();
   
    // add privileged/public properties and methods
    object.publicProperty = true;
   
    object.publicMethod = function() {
        privateVariable++;
        return privateFunction();
    };
   
    // return the object
    return object;
}();
