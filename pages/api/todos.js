import {sendMethodNotAllowed, sendOk,} from '@/utils/apiMethods.js';
import {getCollection} from "@/utils/functions";
import {ObjectId,} from 'mongodb';

const COLLECTION_NAME = 'todos';

const getTodos = async () => {
	const collection = await getCollection(COLLECTION_NAME);
	return collection.find({}).toArray();
}

const getTodo = async (id) => {
    const collection = await getCollection(COLLECTION_NAME);
    return collection.findOne({_id: ObjectId.createFromHexString(id)});
}

const postTodo = async (todo) => {
	const collection = await getCollection(COLLECTION_NAME);
	return collection.insertOne(todo);
}

const putTodo = async (todo) => {
	const collection = await getCollection(COLLECTION_NAME);
	const id = todo.id;
	const { title, description } = todo;
	return collection.updateOne({_id: new ObjectId(id)}, {$set: {title, description}});
}

const deleteTodo = async (id) => {
	const collection = await getCollection(COLLECTION_NAME);
	return collection.deleteOne({_id: new ObjectId(id)});
}

export default async function handler(req, res) {

	const isAllowedMethod = req.method === 'GET' || req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE';
	if(!isAllowedMethod) {
		return sendMethodNotAllowed(res);
	}

	if(req.method === 'GET' && req.query.id) {
		const id = req.query.id;
		const todo = await getTodo(id);
		return sendOk(res, todo);
	}
	else if(req.method === 'GET') {
		const todos = await getTodos();
		return sendOk(res, todos);
	}
	else if(req.method === 'POST') {
		const todo = req.body;
		const result = await postTodo(todo);
		return sendOk(res, result);
	}
	else if(req.method === 'PUT') {
		const todo = req.body;
		const result = await putTodo(todo);
		return sendOk(res, result);
	}
	else if(req.method === 'DELETE') {
		const id = req.query.id;
		const result = await deleteTodo(id);
		return sendOk(res, result);
	}
}