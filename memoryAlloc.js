/**
 * @constructor Creates a new memory manager for the provided array.
 * @param {memory} An array to use as the backing memory.
 */
function MemoryManager(memory) {
    this.memory = memory;
    this.stackPointer = [];
    this.stackPointer.push(this.memory.length);
}

/**
 * Allocates a block of memory of requested size.
 * @param {number} size - The size of the block to allocate.
 * @returns {number} A pointer which is the index of the first location in the allocated block.
 * @throws If it is not possible to allocate a block of the requested size.
 */
MemoryManager.prototype.allocate = function (size) {
    if (size > this.memory.length || this.free < size) throw "error";
    this.stackPointer.push(this.stackPointer[this.stackPointer.length - 1] - size);
    console.log(this.stackPointer);
    return this.stackPointer[this.stackPointer.length - 1];

};

/**
 * Releases a previously allocated block of memory.
 * @param {number} pointer - The pointer to the block to release.
 * @throws If the pointer does not point to an allocated block.
 */
MemoryManager.prototype.release = function (pointer) {
    var location = -1;
    this.stackPointer.forEach((ptr, i) => {
        //ptr === pointer
    })
};

/**
 * Reads the value at the location identified by pointer
 * @param {number} pointer - The location to read.
 * @returns {number} The value at that location.
 * @throws If pointer is in unallocated memory.
 */
MemoryManager.prototype.read = function (pointer) {
    var location = -1;
    this.stackPointer.forEach((ptr, i) => {
        ptr === pointer ? location = i : null;
    });
    console.log(location);
    return location != -1 ? this.memory[location] : () => { throw error };
}

/**
 * Writes a value to the location identified by pointer
 * @param {number} pointer - The location to write to.
 * @param {number} value - The value to write.
 * @throws If pointer is in unallocated memory.
 */
MemoryManager.prototype.write = function (pointer, value) {
    var location = -1;
    this.stackPointer.forEach((ptr, i) => {
        ptr === pointer ? location = i : null;
    });
    location != -1 ? this.memory[location] = value : () => { throw error };
    console.log(this.memory);
}


//test:

var array = new Array(16);
var memoryManager = new MemoryManager(array);
var pointer = memoryManager.allocate(8);
var expected = 'a', actual;
memoryManager.write(pointer, expected);
actual = memoryManager.read(pointer);

console.log(actual, expected);

