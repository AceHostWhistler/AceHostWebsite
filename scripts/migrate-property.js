"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var LISTINGS_DIR = path.join(process.cwd(), 'src/pages/listings');
// Standard photo dimensions based on typical property photos
var DEFAULT_PHOTO_DIMENSIONS = {
    width: 1920,
    height: 1080
};
function convertToPropertyPhotos(photoUrls) {
    return photoUrls.map(function (url, index) { return (__assign({ src: url, alt: "Property interior view ".concat(index + 1) }, DEFAULT_PHOTO_DIMENSIONS)); });
}
function generatePropertyTemplate(propertyInfo) {
    var _a, _b, _c, _d, _e;
    return "import { PropertyLayout } from '../../../components/PropertyLayout';\nimport { PropertyInfo } from '../../../types/property';\n\nconst propertyInfo: PropertyInfo = {\n  title: \"".concat(propertyInfo.title || '', "\",\n  description: \"").concat(propertyInfo.description || '', "\",\n  guests: ").concat(propertyInfo.guests || 0, ",\n  bedrooms: ").concat(propertyInfo.bedrooms || 0, ",\n  beds: ").concat(propertyInfo.beds || 0, ",\n  bathrooms: ").concat(propertyInfo.bathrooms || 0, ",\n  priceRange: \"").concat(propertyInfo.priceRange || '', "\",\n  winterPriceRange: \"").concat(propertyInfo.winterPriceRange || '', "\",\n  holidayPriceRange: \"").concat(propertyInfo.holidayPriceRange || '', "\",\n  minimumStay: \"").concat(propertyInfo.minimumStay || '', "\",\n  airbnbLink: \"").concat(propertyInfo.airbnbLink || '', "\",\n  photos: ").concat(JSON.stringify(propertyInfo.photos || [], null, 2), ",\n  spaceDetails: {\n    description: \"").concat(((_a = propertyInfo.spaceDetails) === null || _a === void 0 ? void 0 : _a.description) || '', "\",\n    highlights: ").concat(JSON.stringify(((_b = propertyInfo.spaceDetails) === null || _b === void 0 ? void 0 : _b.highlights) || [], null, 2), "\n  },\n  bedroomLayout: {\n    description: \"").concat(((_c = propertyInfo.bedroomLayout) === null || _c === void 0 ? void 0 : _c.description) || '', "\",\n    rooms: ").concat(JSON.stringify(((_d = propertyInfo.bedroomLayout) === null || _d === void 0 ? void 0 : _d.rooms) || [], null, 2), "\n  },\n  location: {\n    description: \"").concat(((_e = propertyInfo.location) === null || _e === void 0 ? void 0 : _e.description) || '', "\"\n  }\n};\n\nexport default function Property() {\n  return <PropertyLayout propertyInfo={propertyInfo} />;\n}\n");
}
function extractPropertyInfo(filePath) {
    return __awaiter(this, void 0, void 0, function () {
        var content, titleMatch, title, descMatch, description, photosMatch, photoUrls, guestsMatch, guests, priceRangeMatch, priceRange, winterPriceMatch, winterPriceRange, holidayPriceMatch, holidayPriceRange;
        return __generator(this, function (_a) {
            content = fs.readFileSync(filePath, 'utf8');
            titleMatch = content.match(/<title>(.*?)\|/);
            title = titleMatch ? titleMatch[1].trim() : '';
            descMatch = content.match(/content="([^"]*?)"/);
            description = descMatch ? descMatch[1] : '';
            photosMatch = content.match(/const photos = \[([\s\S]*?)\];/);
            photoUrls = photosMatch
                ? photosMatch[1]
                    .split(',')
                    .map(function (p) { return p.trim(); })
                    .filter(function (p) { return p.startsWith('"') || p.startsWith("'"); })
                    .map(function (p) { return p.replace(/['"]/g, '').trim(); })
                : [];
            guestsMatch = content.match(/(\d+)\s*guests/);
            guests = guestsMatch ? parseInt(guestsMatch[1]) : 0;
            priceRangeMatch = content.match(/\$[\d,]+-\$[\d,]+\+?/);
            priceRange = priceRangeMatch ? priceRangeMatch[0] : '';
            winterPriceMatch = content.match(/Winter.*?\$([\d,]+-\$[\d,]+\+?)/);
            winterPriceRange = winterPriceMatch ? winterPriceMatch[1] : '';
            holidayPriceMatch = content.match(/Christmas.*?\$([\d,]+-\$[\d,]+\+?)/);
            holidayPriceRange = holidayPriceMatch ? holidayPriceMatch[1] : '';
            return [2 /*return*/, {
                    title: title,
                    description: description,
                    guests: guests,
                    photos: convertToPropertyPhotos(photoUrls),
                    priceRange: priceRange,
                    winterPriceRange: winterPriceRange,
                    holidayPriceRange: holidayPriceRange
                }];
        });
    });
}
function migrateProperty(propertyDir) {
    return __awaiter(this, void 0, void 0, function () {
        var indexPath, backupPath, propertyInfo, newContent, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    indexPath = path.join(LISTINGS_DIR, propertyDir, 'index.tsx');
                    if (!fs.existsSync(indexPath)) {
                        console.log("No index.tsx found in ".concat(propertyDir, ", skipping..."));
                        return [2 /*return*/];
                    }
                    backupPath = path.join(LISTINGS_DIR, propertyDir, 'index.tsx.bak');
                    fs.copyFileSync(indexPath, backupPath);
                    console.log("Created backup for ".concat(propertyDir));
                    return [4 /*yield*/, extractPropertyInfo(indexPath)];
                case 1:
                    propertyInfo = _a.sent();
                    console.log("Extracted info for ".concat(propertyDir, ":"), propertyInfo);
                    newContent = generatePropertyTemplate(propertyInfo);
                    // Write new content
                    fs.writeFileSync(indexPath, newContent);
                    console.log("Updated ".concat(propertyDir, " with new template"));
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error("Error migrating ".concat(propertyDir, ":"), error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Properties to migrate
var PROPERTIES_TO_MIGRATE = [
    'panoramic-estate-kadenwood',
    'heron-views-whistler-village',
    'ravens-nest-ski-in-ski-out-views',
    'snow-pine',
    'wedge-mountain-lodge-spa',
    'marquise-2-bed-ski-in-ski-out',
    'the-nest-ski-in-ski-out',
    'chalet-la-forja-kadenwood'
];
function migrateProperties() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, PROPERTIES_TO_MIGRATE_1, property;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Starting property migration...');
                    _i = 0, PROPERTIES_TO_MIGRATE_1 = PROPERTIES_TO_MIGRATE;
                    _a.label = 1;
                case 1:
                    if (!(_i < PROPERTIES_TO_MIGRATE_1.length)) return [3 /*break*/, 4];
                    property = PROPERTIES_TO_MIGRATE_1[_i];
                    console.log("\nMigrating ".concat(property, "..."));
                    return [4 /*yield*/, migrateProperty(property)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    console.log('\nMigration complete!');
                    console.log('Please review each migrated file and fill in any missing information.');
                    return [2 /*return*/];
            }
        });
    });
}
// Run the migration
migrateProperties();
