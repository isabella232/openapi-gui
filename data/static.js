var petstore = {"openapi":"3.0.0-RC0","servers":[{"url":"http://petstore.swagger.io/v2"}],"info":{"description":"This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.","version":"1.0.0","title":"Swagger Petstore","termsOfService":"http://swagger.io/terms/","contact":{"email":"apiteam@swagger.io"},"license":{"name":"Apache 2.0","url":"http://www.apache.org/licenses/LICENSE-2.0.html"}},"tags":[{"name":"pet","description":"Everything about your Pets","externalDocs":{"description":"Find out more","url":"http://swagger.io"}},{"name":"store","description":"Access to Petstore orders"},{"name":"user","description":"Operations about user","externalDocs":{"description":"Find out more about our store","url":"http://swagger.io"}}],"paths":{"/pet":{"post":{"tags":["pet"],"summary":"Add a new pet to the store","description":"","operationId":"addPet","parameters":[],"responses":{"405":{"description":"Invalid input"}},"security":[{"petstore_auth":["write:pets","read:pets"]}],"requestBody":{"$ref":"#/components/requestBodies/requestBody1"}},"put":{"tags":["pet"],"summary":"Update an existing pet","description":"","operationId":"updatePet","parameters":[],"responses":{"400":{"description":"Invalid ID supplied"},"404":{"description":"Pet not found"},"405":{"description":"Validation exception"}},"security":[{"petstore_auth":["write:pets","read:pets"]}],"requestBody":{"$ref":"#/components/requestBodies/requestBody1"}}},"/pet/findByStatus":{"get":{"tags":["pet"],"summary":"Finds Pets by status","description":"Multiple status values can be provided with comma separated strings","operationId":"findPetsByStatus","parameters":[{"name":"status","in":"query","description":"Status values that need to be considered for filter","required":true,"schema":{"type":"array","items":{"type":"string","enum":["available","pending","sold"],"default":"available"}}}],"responses":{"200":{"description":"successful operation","content":{"application/xml":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/Pet"}}},"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/Pet"}}}}},"400":{"description":"Invalid status value"}},"security":[{"petstore_auth":["write:pets","read:pets"]}]}},"/pet/findByTags":{"get":{"tags":["pet"],"summary":"Finds Pets by tags","description":"Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.","operationId":"findPetsByTags","parameters":[{"name":"tags","in":"query","description":"Tags to filter by","required":true,"schema":{"type":"array","items":{"type":"string"}}}],"responses":{"200":{"description":"successful operation","content":{"application/xml":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/Pet"}}},"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/Pet"}}}}},"400":{"description":"Invalid tag value"}},"security":[{"petstore_auth":["write:pets","read:pets"]}],"deprecated":true}},"/pet/{petId}":{"get":{"tags":["pet"],"summary":"Find pet by ID","description":"Returns a single pet","operationId":"getPetById","parameters":[{"name":"petId","in":"path","description":"ID of pet to return","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"successful operation","content":{"application/xml":{"schema":{"$ref":"#/components/schemas/Pet"}},"application/json":{"schema":{"$ref":"#/components/schemas/Pet"}}}},"400":{"description":"Invalid ID supplied"},"404":{"description":"Pet not found"}},"security":[{"api_key":[]}]},"post":{"tags":["pet"],"summary":"Updates a pet in the store with form data","description":"","operationId":"updatePetWithForm","parameters":[{"name":"petId","in":"path","description":"ID of pet that needs to be updated","required":true,"type":"integer","format":"int64"}],"responses":{"405":{"description":"Invalid input"}},"security":[{"petstore_auth":["write:pets","read:pets"]}],"requestBody":{"content":{"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"name":{"description":"Updated name of the pet","type":"string","required":false},"status":{"description":"Updated status of the pet","type":"string","required":false}}}}}}},"delete":{"tags":["pet"],"summary":"Deletes a pet","description":"","operationId":"deletePet","parameters":[{"name":"api_key","in":"header","required":false,"type":"string"},{"name":"petId","in":"path","description":"Pet id to delete","required":true,"type":"integer","format":"int64"}],"responses":{"400":{"description":"Invalid ID supplied"},"404":{"description":"Pet not found"}},"security":[{"petstore_auth":["write:pets","read:pets"]}]}},"/pet/{petId}/uploadImage":{"post":{"tags":["pet"],"summary":"uploads an image","description":"","operationId":"uploadFile","parameters":[{"name":"petId","in":"path","description":"ID of pet to update","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ApiResponse"}}}}},"security":[{"petstore_auth":["write:pets","read:pets"]}],"requestBody":{"content":{"application/octet-stream":{"schema":{"type":"string","format":"binary"}}}}}},"/store/inventory":{"get":{"tags":["store"],"summary":"Returns pet inventories by status","description":"Returns a map of status codes to quantities","operationId":"getInventory","parameters":[],"responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"object","additionalProperties":{"type":"integer","format":"int32"}}}}}},"security":[{"api_key":[]}]}},"/store/order":{"post":{"tags":["store"],"summary":"Place an order for a pet","description":"","operationId":"placeOrder","parameters":[],"responses":{"200":{"description":"successful operation","content":{"application/xml":{"schema":{"$ref":"#/components/schemas/Order"}},"application/json":{"schema":{"$ref":"#/components/schemas/Order"}}}},"400":{"description":"Invalid Order"}},"requestBody":{"content":{"application/json":{"description":"order placed for purchasing the pet","schema":{"$ref":"#/components/schemas/Order"}}}}}},"/store/order/{orderId}":{"get":{"tags":["store"],"summary":"Find purchase order by ID","description":"For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions","operationId":"getOrderById","parameters":[{"name":"orderId","in":"path","description":"ID of pet that needs to be fetched","required":true,"type":"integer","maximum":10,"minimum":1,"format":"int64"}],"responses":{"200":{"description":"successful operation","content":{"application/xml":{"schema":{"$ref":"#/components/schemas/Order"}},"application/json":{"schema":{"$ref":"#/components/schemas/Order"}}}},"400":{"description":"Invalid ID supplied"},"404":{"description":"Order not found"}}},"delete":{"tags":["store"],"summary":"Delete purchase order by ID","description":"For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors","operationId":"deleteOrder","parameters":[{"name":"orderId","in":"path","description":"ID of the order that needs to be deleted","required":true,"type":"integer","minimum":1,"format":"int64"}],"responses":{"400":{"description":"Invalid ID supplied"},"404":{"description":"Order not found"}}}},"/user":{"post":{"tags":["user"],"summary":"Create user","description":"This can only be done by the logged in user.","operationId":"createUser","parameters":[],"responses":{"default":{"description":"successful operation"}},"requestBody":{"content":{"application/json":{"description":"Created user object","schema":{"$ref":"#/components/schemas/User"}}}}}},"/user/createWithArray":{"post":{"tags":["user"],"summary":"Creates list of users with given input array","description":"","operationId":"createUsersWithArrayInput","parameters":[],"responses":{"default":{"description":"successful operation"}},"requestBody":{"$ref":"#/components/requestBodies/requestBody2"}}},"/user/createWithList":{"post":{"tags":["user"],"summary":"Creates list of users with given input array","description":"","operationId":"createUsersWithListInput","parameters":[],"responses":{"default":{"description":"successful operation"}},"requestBody":{"$ref":"#/components/requestBodies/requestBody2"}}},"/user/login":{"get":{"tags":["user"],"summary":"Logs user into the system","description":"","operationId":"loginUser","parameters":[{"name":"username","in":"query","description":"The user name for login","required":true,"type":"string"},{"name":"password","in":"query","description":"The password for login in clear text","required":true,"type":"string","format":"password"}],"responses":{"200":{"description":"successful operation","headers":{"X-Rate-Limit":{"type":"integer","format":"int32","description":"calls per hour allowed by the user"},"X-Expires-After":{"type":"string","format":"date-time","description":"date in UTC when token expires"}},"content":{"application/xml":{"schema":{"type":"string"}},"application/json":{"schema":{"type":"string"}}}},"400":{"description":"Invalid username/password supplied"}}}},"/user/logout":{"get":{"tags":["user"],"summary":"Logs out current logged in user session","description":"","operationId":"logoutUser","parameters":[],"responses":{"default":{"description":"successful operation"}}}},"/user/{username}":{"get":{"tags":["user"],"summary":"Get user by user name","description":"","operationId":"getUserByName","parameters":[{"name":"username","in":"path","description":"The name that needs to be fetched. Use user1 for testing. ","required":true,"type":"string"}],"responses":{"200":{"description":"successful operation","content":{"application/xml":{"schema":{"$ref":"#/components/schemas/User"}},"application/json":{"schema":{"$ref":"#/components/schemas/User"}}}},"400":{"description":"Invalid username supplied"},"404":{"description":"User not found"}}},"put":{"tags":["user"],"summary":"Updated user","description":"This can only be done by the logged in user.","operationId":"updateUser","parameters":[{"name":"username","in":"path","description":"name that need to be updated","required":true,"type":"string"}],"responses":{"400":{"description":"Invalid user supplied"},"404":{"description":"User not found"}},"requestBody":{"content":{"application/json":{"description":"Updated user object","schema":{"$ref":"#/components/schemas/User"}}}}},"delete":{"tags":["user"],"summary":"Delete user","description":"This can only be done by the logged in user.","operationId":"deleteUser","parameters":[{"name":"username","in":"path","description":"The name that needs to be deleted","required":true,"type":"string"}],"responses":{"400":{"description":"Invalid username supplied"},"404":{"description":"User not found"}}}}},"externalDocs":{"description":"Find out more about Swagger","url":"http://swagger.io"},"components":{"schemas":{"Order":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"petId":{"type":"integer","format":"int64"},"quantity":{"type":"integer","format":"int32"},"shipDate":{"type":"string","format":"date-time"},"status":{"type":"string","description":"Order Status","enum":["placed","approved","delivered"]},"complete":{"type":"boolean","default":false}},"xml":{"name":"Order"}},"Category":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"Category"}},"User":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"username":{"type":"string"},"firstName":{"type":"string"},"lastName":{"type":"string"},"email":{"type":"string"},"password":{"type":"string"},"phone":{"type":"string"},"userStatus":{"type":"integer","format":"int32","description":"User Status"}},"xml":{"name":"User"}},"Tag":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"Tag"}},"Pet":{"type":"object","required":["name","photoUrls"],"properties":{"id":{"type":"integer","format":"int64"},"category":{"$ref":"#/components/schemas/Category"},"name":{"type":"string","example":"doggie"},"photoUrls":{"type":"array","xml":{"name":"photoUrl","wrapped":true},"items":{"type":"string"}},"tags":{"type":"array","xml":{"name":"tag","wrapped":true},"items":{"$ref":"#/components/schemas/Tag"}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"xml":{"name":"Pet"}},"ApiResponse":{"type":"object","properties":{"code":{"type":"integer","format":"int32"},"type":{"type":"string"},"message":{"type":"string"}}}},"responses":{},"parameters":{},"examples":{},"requestBodies":{"requestBody1":{"content":{"application/json":{"description":"Pet object that needs to be added to the store","schema":{"$ref":"#/components/schemas/Pet"}},"application/xml":{"description":"Pet object that needs to be added to the store","schema":{"$ref":"#/components/schemas/Pet"}}}},"requestBody2":{"content":{"application/json":{"description":"List of user object","schema":{"type":"array","items":{"$ref":"#/components/schemas/User"}}}}}},"securitySchemes":{"petstore_auth":{"type":"oauth2","flow":{"implicit":{"authorizationUrl":"http://petstore.swagger.io/oauth/dialog","scopes":{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},"api_key":{"type":"apiKey","name":"api_key","in":"header"}},"headers":{}}};

var emptyOpenAPI={"swagger":"3.0.0-RC0","info":{"title":"API","version":"1.0","contact":{},"license":{}},"schemes":[]};

var jsonSchemaDraft4 = {
"id": "http://json-schema.org/draft-04/schema#",
"$schema": "http://json-schema.org/draft-04/schema#",
"description": "OpenApi 2.0 schema subset",
"definitions": {
    "schemaArray": {
        "type": "array",
        "minItems": 1,
        "items": { "$ref": "#" }
    },
    "positiveInteger": {
        "type": "integer",
        "minimum": 0
    },
    "positiveIntegerDefault0": {
        "allOf": [ { "$ref": "#/definitions/positiveInteger" }, { "default": 0 } ]
    },
    "simpleTypes": {
        "enum": [ "array", "boolean", "integer", "null", "number", "object", "string" ]
    },
    "stringArray": {
        "type": "array",
        "items": { "type": "string" },
        "minItems": 1,
        "uniqueItems": true
    }
},
"type": "object",
"properties": {
    "id": {
        "type": "string",
        "format": "uri"
    },
    "$schema": {
        "type": "string",
        "format": "uri"
    },
    "title": {
        "type": "string"
    },
    "description": {
        "type": "string"
    },
    "default": {},
    "multipleOf": {
        "type": "number",
        "minimum": 0,
        "exclusiveMinimum": true
    },
    "maximum": {
        "type": "number"
    },
    "exclusiveMaximum": {
        "type": "boolean",
        "format": "checkbox",
        "default": false
    },
    "minimum": {
        "type": "number"
    },
    "exclusiveMinimum": {
        "type": "boolean",
        "format": "checkbox",
        "default": false
    },
    "maxLength": { "$ref": "#/definitions/positiveInteger" },
    "minLength": { "$ref": "#/definitions/positiveIntegerDefault0" },
    "pattern": {
        "type": "string",
        "format": "regex"
    },
    "additionalItems": {
        "anyOf": [
            { "type": "boolean",
              "format": "checkbox"
            },
            { "$ref": "#" }
        ],
        "default": {}
    },
    "items": {
        "anyOf": [
            { "$ref": "#" },
            { "$ref": "#/definitions/schemaArray" }
        ],
        "default": {}
    },
    "maxItems": { "$ref": "#/definitions/positiveInteger" },
    "minItems": { "$ref": "#/definitions/positiveIntegerDefault0" },
    "uniqueItems": {
        "type": "boolean",
        "format": "checkbox",
        "default": false
    },
    "maxProperties": { "$ref": "#/definitions/positiveInteger" },
    "minProperties": { "$ref": "#/definitions/positiveIntegerDefault0" },
    "required": { "$ref": "#/definitions/stringArray" },
    "additionalProperties": {
        "anyOf": [
            { "type": "boolean",
              "format": "checkbox" 
            },
            { "$ref": "#" }
        ],
        "default": {}
    },
    "definitions": {
        "type": "object",
        "additionalProperties": { "$ref": "#" },
        "default": {}
    },
    "properties": {
        "type": "object",
        "additionalProperties": { "$ref": "#" },
        "default": {}
    },
    "patternProperties": {
        "type": "object",
        "additionalProperties": { "$ref": "#" },
        "default": {}
    },
    "enum": {
        "type": "array",
        "minItems": 1,
        "uniqueItems": true
    },
    "type": {
        "anyOf": [
            { "$ref": "#/definitions/simpleTypes" },
            {
                "type": "array",
                "items": { "$ref": "#/definitions/simpleTypes" },
                "minItems": 1,
                "uniqueItems": true
            }
        ]
    },
    "allOf": { "$ref": "#/definitions/schemaArray" },
    "anyOf": { "$ref": "#/definitions/schemaArray" },
    "oneOf": { "$ref": "#/definitions/schemaArray" },
    "dependencies": {
        "type": "object",
        "additionalProperties": {
            "anyOf": [
                { "$ref": "#" },
                { "$ref": "#/definitions/stringArray" }
            ]
        }
    },
    "not": { "$ref": "#" }
},
"dependencies": {
    "exclusiveMaximum": [ "maximum" ],
    "exclusiveMinimum": [ "minimum" ]
},
"default": {}}

