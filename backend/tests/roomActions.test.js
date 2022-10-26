const supertest = require("supertest")

const roomActions = require("../src/functions/roomActions.js")
const ChatRoom = require("../src/classes/ChatRoom")



describe("does roomActions work correct", () => {
    let mockChatroom;
    let mockChatRoomList = []

    beforeAll(() => {
        mockChatroom = new ChatRoom("roomName1", "user123", "createRoom")
        mockChatRoomList.push(mockChatroom)
    })

    test("can create new room correctly", () => {
        expect(roomActions.createNewRoom("roomName1", "user123", "")).toStrictEqual(mockChatroom)
    })

    test("can join to existing room", () => {
        roomActions.addUserToExistingRoom(mockChatRoomList[0], "user1234")
        expect(mockChatRoomList[0]).toEqual({
            roomName: 'roomName1',
            messages: [
                {
                    messageWriter: 'System',
                    messageContent: 'The room was created by user123'
                },
                {
                    messageWriter: 'System',
                    messageContent: 'user1234 Has just joined!'
                }
            ]
        })
    })

    test("can add new message to room",() =>
    {
        roomActions.addMessageToRoom("user123","hello",mockChatRoomList[0])
        expect(mockChatRoomList[0]).toEqual({
            roomName: 'roomName1',
            messages: [
                {
                    messageWriter: 'System',
                    messageContent: 'The room was created by user123'
                },
                {
                    messageWriter: 'System',
                    messageContent: 'user1234 Has just joined!'
                },
                {
                    messageWriter: 'user123',
                    messageContent: 'hello'
                }
            ]
        })
    })

})



