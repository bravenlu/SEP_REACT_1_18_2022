class Array {
    constructor(arr) {
        this.arr = arr;
    }
    //map
    map(func) {
        var result = [];
        for(var i = 0; i < this.arr.length; i++)
        {
            var entry = func(arr[i]);
            result.push(entry);
        }
        return result;
    }
    //filter
    filter(func) {
        var result = [];
        for(var i = 0; i < this.arr.length; i++)
        {
            var pass = func(arr[i]);
            if(pass) {
                result.push(entry);
            }
        }
        return result;
    }
    //reduce 
    reduce(func) {
        var sum;
        for(var i = 0; i < this.arr.length; i++)
        {
            sum += func(arr[i]);
        }
        return sum;
    }
    //some 
    some(func) {
        for(var i = 0; i < this.arr.length; i++)
        {
            var pass = func(arr[i]);
            if(pass)
            {
                return true;
            }
        }
        return false;
    }
    //every 
    every(func) {
        for(var i = 0; i < this.arr.length; i++) 
        {
            var pass = func(arr[i]);
            if(!pass)
            {
                return false;
            }
        }
        return true;
    }
}
