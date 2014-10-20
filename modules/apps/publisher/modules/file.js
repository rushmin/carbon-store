/*
 * Copyright (c) WSO2 Inc. (http://wso2.com) All Rights Reserved.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

var send = function(path) {
    var mime,
        file = new File(path);
    if(!file.isExists()) {
        response.sendError(404, 'Request resource not found');
        return;
    }
    mime = require('/modules/mime.js');
    response.addHeader('Content-Type', mime.getType(path));
    file.open('r');
    print(file.getStream());
    file.close();
};