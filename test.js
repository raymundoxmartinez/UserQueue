const Queue = require('./index');

test('Queue is a class', () => {
    expect(typeof Queue.prototype.constructor).toEqual('function');
});

test('can add elements to a queue', () => {
    const q = new Queue();
    expect(() => {
        q.add(1);
    }).not.toThrow();
});

test('can remove elements from a queue by userId', () => {
    const q = new Queue();
    expect(() => {
        q.add(1);
        q.removeByUser(1);
    }).not.toThrow();
    expect(
        q.data.includes(1)
    ).toBe(false)
});

test('can remove elements from a queue by position', () => {
    const q = new Queue();
    expect(() => {
        q.add(1);
        q.add(2);
        q.add(3);
        q.add(4);
        q.removeByPosition(3);
    }).not.toThrow();
    expect(
        q.data.includes(3)
    ).toBe(false)
    expect(
        q.data.length
    ).toEqual(3)
    q.removeByPosition(1);
    expect(
        q.data.includes(1)
    ).toBe(false)
    expect(
        q.data.length
    ).toEqual(2)
});

test('can move element from one position to another', () => {
    const q = new Queue();
    expect(() => {
        q.add(1);
        q.add(2);
        q.add(3);
        q.add(4);
        q.move(1, 4);
    }).not.toThrow();

    expect(q.data[3]).toEqual(2);
    expect(q.data[0]).toEqual(1);
});

test('can swap element from one position to another', () => {
    const q = new Queue();
    expect(() => {
        q.add(1);
        q.add(2);
        q.add(3);
        q.add(4);
        q.swap(1, 4);
    }).not.toThrow();

    expect(q.data[3]).toEqual(4);
    expect(q.data[0]).toEqual(1);
});

test('can reverse the order of elements in the Queue', () => {
    const q = new Queue();
    expect(() => {
        q.add(1);
        q.add(2);
        q.add(3);
        q.add(4);
    }).not.toThrow();

    expect(q.data).toEqual([4, 3, 2, 1]);
    q.reverse()
    expect(q.data).toEqual([1, 2, 3, 4]);
});

test('prints the elements in the list', () => {
    const q = new Queue();
    expect(() => {
        q.add(1);
        q.add(2);
        q.add(3);
        q.add(4);
    }).not.toThrow();
    q.print()
});
