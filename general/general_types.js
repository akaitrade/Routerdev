//
// Autogenerated by Thrift Compiler (0.13.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
if (typeof Int64 === 'undefined' && typeof require === 'function') {
  var Int64 = require('node-int64');
}


ClassObject = function(args) {
  this.byteCodeObjects = null;
  this.instance = null;
  if (args) {
    if (args.byteCodeObjects !== undefined && args.byteCodeObjects !== null) {
      this.byteCodeObjects = Thrift.copyList(args.byteCodeObjects, [null]);
    }
    if (args.instance !== undefined && args.instance !== null) {
      this.instance = args.instance;
    }
  }
};
ClassObject.prototype = {};
ClassObject.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        this.byteCodeObjects = [];
        var _rtmp31 = input.readListBegin();
        var _size0 = _rtmp31.size || 0;
        for (var _i2 = 0; _i2 < _size0; ++_i2) {
          var elem3 = null;
          elem3 = new ByteCodeObject();
          elem3.read(input);
          this.byteCodeObjects.push(elem3);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.instance = input.readBinary().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ClassObject.prototype.write = function(output) {
  output.writeStructBegin('ClassObject');
  if (this.byteCodeObjects !== null && this.byteCodeObjects !== undefined) {
    output.writeFieldBegin('byteCodeObjects', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.byteCodeObjects.length);
    for (var iter4 in this.byteCodeObjects) {
      if (this.byteCodeObjects.hasOwnProperty(iter4)) {
        iter4 = this.byteCodeObjects[iter4];
        iter4.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.instance !== null && this.instance !== undefined) {
    output.writeFieldBegin('instance', Thrift.Type.STRING, 2);
    output.writeBinary(this.instance);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

object = function(args) {
  this.nameClass = null;
  this.instance = null;
  if (args) {
    if (args.nameClass !== undefined && args.nameClass !== null) {
      this.nameClass = args.nameClass;
    }
    if (args.instance !== undefined && args.instance !== null) {
      this.instance = args.instance;
    }
  }
};
object.prototype = {};
object.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.nameClass = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.instance = input.readBinary().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

object.prototype.write = function(output) {
  output.writeStructBegin('object');
  if (this.nameClass !== null && this.nameClass !== undefined) {
    output.writeFieldBegin('nameClass', Thrift.Type.STRING, 1);
    output.writeString(this.nameClass);
    output.writeFieldEnd();
  }
  if (this.instance !== null && this.instance !== undefined) {
    output.writeFieldBegin('instance', Thrift.Type.STRING, 2);
    output.writeBinary(this.instance);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Amount = function(args) {
  this.integral = 0;
  this.fraction = 0;
  if (args) {
    if (args.integral !== undefined && args.integral !== null) {
      this.integral = args.integral;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field integral is unset!');
    }
    if (args.fraction !== undefined && args.fraction !== null) {
      this.fraction = args.fraction;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field fraction is unset!');
    }
  }
};
Amount.prototype = {};
Amount.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.integral = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.fraction = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Amount.prototype.write = function(output) {
  output.writeStructBegin('Amount');
  if (this.integral !== null && this.integral !== undefined) {
    output.writeFieldBegin('integral', Thrift.Type.I32, 1);
    output.writeI32(this.integral);
    output.writeFieldEnd();
  }
  if (this.fraction !== null && this.fraction !== undefined) {
    output.writeFieldBegin('fraction', Thrift.Type.I64, 2);
    output.writeI64(this.fraction);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Variant = function(args) {
  this.v_null = null;
  this.v_void = null;
  this.v_boolean = null;
  this.v_boolean_box = null;
  this.v_byte = null;
  this.v_byte_box = null;
  this.v_short = null;
  this.v_short_box = null;
  this.v_int = null;
  this.v_int_box = null;
  this.v_long = null;
  this.v_long_box = null;
  this.v_float = null;
  this.v_float_box = null;
  this.v_double = null;
  this.v_double_box = null;
  this.v_string = null;
  this.v_object = null;
  this.v_array = null;
  this.v_list = null;
  this.v_set = null;
  this.v_map = null;
  this.v_big_decimal = null;
  this.v_amount = null;
  this.v_byte_array = null;
  if (args) {
    if (args.v_null !== undefined && args.v_null !== null) {
      this.v_null = args.v_null;
    }
    if (args.v_void !== undefined && args.v_void !== null) {
      this.v_void = args.v_void;
    }
    if (args.v_boolean !== undefined && args.v_boolean !== null) {
      this.v_boolean = args.v_boolean;
    }
    if (args.v_boolean_box !== undefined && args.v_boolean_box !== null) {
      this.v_boolean_box = args.v_boolean_box;
    }
    if (args.v_byte !== undefined && args.v_byte !== null) {
      this.v_byte = args.v_byte;
    }
    if (args.v_byte_box !== undefined && args.v_byte_box !== null) {
      this.v_byte_box = args.v_byte_box;
    }
    if (args.v_short !== undefined && args.v_short !== null) {
      this.v_short = args.v_short;
    }
    if (args.v_short_box !== undefined && args.v_short_box !== null) {
      this.v_short_box = args.v_short_box;
    }
    if (args.v_int !== undefined && args.v_int !== null) {
      this.v_int = args.v_int;
    }
    if (args.v_int_box !== undefined && args.v_int_box !== null) {
      this.v_int_box = args.v_int_box;
    }
    if (args.v_long !== undefined && args.v_long !== null) {
      this.v_long = args.v_long;
    }
    if (args.v_long_box !== undefined && args.v_long_box !== null) {
      this.v_long_box = args.v_long_box;
    }
    if (args.v_float !== undefined && args.v_float !== null) {
      this.v_float = args.v_float;
    }
    if (args.v_float_box !== undefined && args.v_float_box !== null) {
      this.v_float_box = args.v_float_box;
    }
    if (args.v_double !== undefined && args.v_double !== null) {
      this.v_double = args.v_double;
    }
    if (args.v_double_box !== undefined && args.v_double_box !== null) {
      this.v_double_box = args.v_double_box;
    }
    if (args.v_string !== undefined && args.v_string !== null) {
      this.v_string = args.v_string;
    }
    if (args.v_object !== undefined && args.v_object !== null) {
      this.v_object = new object(args.v_object);
    }
    if (args.v_array !== undefined && args.v_array !== null) {
      this.v_array = Thrift.copyList(args.v_array, [null]);
    }
    if (args.v_list !== undefined && args.v_list !== null) {
      this.v_list = Thrift.copyList(args.v_list, [null]);
    }
    if (args.v_set !== undefined && args.v_set !== null) {
      this.v_set = Thrift.copyList(args.v_set, [null]);
    }
    if (args.v_map !== undefined && args.v_map !== null) {
      this.v_map = Thrift.copyMap(args.v_map, [null]);
    }
    if (args.v_big_decimal !== undefined && args.v_big_decimal !== null) {
      this.v_big_decimal = args.v_big_decimal;
    }
    if (args.v_amount !== undefined && args.v_amount !== null) {
      this.v_amount = new Amount(args.v_amount);
    }
    if (args.v_byte_array !== undefined && args.v_byte_array !== null) {
      this.v_byte_array = args.v_byte_array;
    }
  }
};
Variant.prototype = {};
Variant.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.v_null = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BYTE) {
        this.v_void = input.readByte().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.BOOL) {
        this.v_boolean = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this.v_boolean_box = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.BYTE) {
        this.v_byte = input.readByte().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.BYTE) {
        this.v_byte_box = input.readByte().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I16) {
        this.v_short = input.readI16().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.I16) {
        this.v_short_box = input.readI16().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.I32) {
        this.v_int = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.I32) {
        this.v_int_box = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.I64) {
        this.v_long = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.I64) {
        this.v_long_box = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.DOUBLE) {
        this.v_float = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.DOUBLE) {
        this.v_float_box = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 15:
      if (ftype == Thrift.Type.DOUBLE) {
        this.v_double = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 16:
      if (ftype == Thrift.Type.DOUBLE) {
        this.v_double_box = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 17:
      if (ftype == Thrift.Type.STRING) {
        this.v_string = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 18:
      if (ftype == Thrift.Type.STRUCT) {
        this.v_object = new object();
        this.v_object.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 19:
      if (ftype == Thrift.Type.LIST) {
        this.v_array = [];
        var _rtmp36 = input.readListBegin();
        var _size5 = _rtmp36.size || 0;
        for (var _i7 = 0; _i7 < _size5; ++_i7) {
          var elem8 = null;
          elem8 = new Variant();
          elem8.read(input);
          this.v_array.push(elem8);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 20:
      if (ftype == Thrift.Type.LIST) {
        this.v_list = [];
        var _rtmp310 = input.readListBegin();
        var _size9 = _rtmp310.size || 0;
        for (var _i11 = 0; _i11 < _size9; ++_i11) {
          var elem12 = null;
          elem12 = new Variant();
          elem12.read(input);
          this.v_list.push(elem12);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 21:
      if (ftype == Thrift.Type.SET) {
        this.v_set = [];
        var _rtmp314 = input.readSetBegin();
        var _size13 = _rtmp314.size || 0;
        for (var _i15 = 0; _i15 < _size13; ++_i15) {
          var elem16 = null;
          elem16 = new Variant();
          elem16.read(input);
          this.v_set.push(elem16);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 22:
      if (ftype == Thrift.Type.MAP) {
        this.v_map = {};
        var _rtmp318 = input.readMapBegin();
        var _size17 = _rtmp318.size || 0;
        for (var _i19 = 0; _i19 < _size17; ++_i19) {
          if (_i19 > 0 ) {
            if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
              input.rstack.pop();
            }
          }
          var key20 = null;
          var val21 = null;
          key20 = new Variant();
          key20.read(input);
          val21 = new Variant();
          val21.read(input);
          this.v_map[key20] = val21;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 23:
      if (ftype == Thrift.Type.STRING) {
        this.v_big_decimal = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 24:
      if (ftype == Thrift.Type.STRUCT) {
        this.v_amount = new Amount();
        this.v_amount.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 25:
      if (ftype == Thrift.Type.STRING) {
        this.v_byte_array = input.readBinary().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Variant.prototype.write = function(output) {
  output.writeStructBegin('Variant');
  if (this.v_null !== null && this.v_null !== undefined) {
    output.writeFieldBegin('v_null', Thrift.Type.STRING, 1);
    output.writeString(this.v_null);
    output.writeFieldEnd();
  }
  if (this.v_void !== null && this.v_void !== undefined) {
    output.writeFieldBegin('v_void', Thrift.Type.BYTE, 2);
    output.writeByte(this.v_void);
    output.writeFieldEnd();
  }
  if (this.v_boolean !== null && this.v_boolean !== undefined) {
    output.writeFieldBegin('v_boolean', Thrift.Type.BOOL, 3);
    output.writeBool(this.v_boolean);
    output.writeFieldEnd();
  }
  if (this.v_boolean_box !== null && this.v_boolean_box !== undefined) {
    output.writeFieldBegin('v_boolean_box', Thrift.Type.BOOL, 4);
    output.writeBool(this.v_boolean_box);
    output.writeFieldEnd();
  }
  if (this.v_byte !== null && this.v_byte !== undefined) {
    output.writeFieldBegin('v_byte', Thrift.Type.BYTE, 5);
    output.writeByte(this.v_byte);
    output.writeFieldEnd();
  }
  if (this.v_byte_box !== null && this.v_byte_box !== undefined) {
    output.writeFieldBegin('v_byte_box', Thrift.Type.BYTE, 6);
    output.writeByte(this.v_byte_box);
    output.writeFieldEnd();
  }
  if (this.v_short !== null && this.v_short !== undefined) {
    output.writeFieldBegin('v_short', Thrift.Type.I16, 7);
    output.writeI16(this.v_short);
    output.writeFieldEnd();
  }
  if (this.v_short_box !== null && this.v_short_box !== undefined) {
    output.writeFieldBegin('v_short_box', Thrift.Type.I16, 8);
    output.writeI16(this.v_short_box);
    output.writeFieldEnd();
  }
  if (this.v_int !== null && this.v_int !== undefined) {
    output.writeFieldBegin('v_int', Thrift.Type.I32, 9);
    output.writeI32(this.v_int);
    output.writeFieldEnd();
  }
  if (this.v_int_box !== null && this.v_int_box !== undefined) {
    output.writeFieldBegin('v_int_box', Thrift.Type.I32, 10);
    output.writeI32(this.v_int_box);
    output.writeFieldEnd();
  }
  if (this.v_long !== null && this.v_long !== undefined) {
    output.writeFieldBegin('v_long', Thrift.Type.I64, 11);
    output.writeI64(this.v_long);
    output.writeFieldEnd();
  }
  if (this.v_long_box !== null && this.v_long_box !== undefined) {
    output.writeFieldBegin('v_long_box', Thrift.Type.I64, 12);
    output.writeI64(this.v_long_box);
    output.writeFieldEnd();
  }
  if (this.v_float !== null && this.v_float !== undefined) {
    output.writeFieldBegin('v_float', Thrift.Type.DOUBLE, 13);
    output.writeDouble(this.v_float);
    output.writeFieldEnd();
  }
  if (this.v_float_box !== null && this.v_float_box !== undefined) {
    output.writeFieldBegin('v_float_box', Thrift.Type.DOUBLE, 14);
    output.writeDouble(this.v_float_box);
    output.writeFieldEnd();
  }
  if (this.v_double !== null && this.v_double !== undefined) {
    output.writeFieldBegin('v_double', Thrift.Type.DOUBLE, 15);
    output.writeDouble(this.v_double);
    output.writeFieldEnd();
  }
  if (this.v_double_box !== null && this.v_double_box !== undefined) {
    output.writeFieldBegin('v_double_box', Thrift.Type.DOUBLE, 16);
    output.writeDouble(this.v_double_box);
    output.writeFieldEnd();
  }
  if (this.v_string !== null && this.v_string !== undefined) {
    output.writeFieldBegin('v_string', Thrift.Type.STRING, 17);
    output.writeString(this.v_string);
    output.writeFieldEnd();
  }
  if (this.v_object !== null && this.v_object !== undefined) {
    output.writeFieldBegin('v_object', Thrift.Type.STRUCT, 18);
    this.v_object.write(output);
    output.writeFieldEnd();
  }
  if (this.v_array !== null && this.v_array !== undefined) {
    output.writeFieldBegin('v_array', Thrift.Type.LIST, 19);
    output.writeListBegin(Thrift.Type.STRUCT, this.v_array.length);
    for (var iter22 in this.v_array) {
      if (this.v_array.hasOwnProperty(iter22)) {
        iter22 = this.v_array[iter22];
        iter22.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.v_list !== null && this.v_list !== undefined) {
    output.writeFieldBegin('v_list', Thrift.Type.LIST, 20);
    output.writeListBegin(Thrift.Type.STRUCT, this.v_list.length);
    for (var iter23 in this.v_list) {
      if (this.v_list.hasOwnProperty(iter23)) {
        iter23 = this.v_list[iter23];
        iter23.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.v_set !== null && this.v_set !== undefined) {
    output.writeFieldBegin('v_set', Thrift.Type.SET, 21);
    output.writeSetBegin(Thrift.Type.STRUCT, this.v_set.length);
    for (var iter24 in this.v_set) {
      if (this.v_set.hasOwnProperty(iter24)) {
        iter24 = this.v_set[iter24];
        iter24.write(output);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.v_map !== null && this.v_map !== undefined) {
    output.writeFieldBegin('v_map', Thrift.Type.MAP, 22);
    output.writeMapBegin(Thrift.Type.STRUCT, Thrift.Type.STRUCT, Thrift.objectLength(this.v_map));
    for (var kiter25 in this.v_map) {
      if (this.v_map.hasOwnProperty(kiter25)) {
        var viter26 = this.v_map[kiter25];
        kiter25.write(output);
        viter26.write(output);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.v_big_decimal !== null && this.v_big_decimal !== undefined) {
    output.writeFieldBegin('v_big_decimal', Thrift.Type.STRING, 23);
    output.writeString(this.v_big_decimal);
    output.writeFieldEnd();
  }
  if (this.v_amount !== null && this.v_amount !== undefined) {
    output.writeFieldBegin('v_amount', Thrift.Type.STRUCT, 24);
    this.v_amount.write(output);
    output.writeFieldEnd();
  }
  if (this.v_byte_array !== null && this.v_byte_array !== undefined) {
    output.writeFieldBegin('v_byte_array', Thrift.Type.STRING, 25);
    output.writeBinary(this.v_byte_array);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Annotation = function(args) {
  this.name = null;
  this.arguments = null;
  if (args) {
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.arguments !== undefined && args.arguments !== null) {
      this.arguments = Thrift.copyMap(args.arguments, [null]);
    }
  }
};
Annotation.prototype = {};
Annotation.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.MAP) {
        this.arguments = {};
        var _rtmp328 = input.readMapBegin();
        var _size27 = _rtmp328.size || 0;
        for (var _i29 = 0; _i29 < _size27; ++_i29) {
          if (_i29 > 0 ) {
            if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
              input.rstack.pop();
            }
          }
          var key30 = null;
          var val31 = null;
          key30 = input.readString().value;
          val31 = input.readString().value;
          this.arguments[key30] = val31;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Annotation.prototype.write = function(output) {
  output.writeStructBegin('Annotation');
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.arguments !== null && this.arguments !== undefined) {
    output.writeFieldBegin('arguments', Thrift.Type.MAP, 2);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.arguments));
    for (var kiter32 in this.arguments) {
      if (this.arguments.hasOwnProperty(kiter32)) {
        var viter33 = this.arguments[kiter32];
        output.writeString(kiter32);
        output.writeString(viter33);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MethodArgument = function(args) {
  this.type = null;
  this.name = null;
  this.annotations = null;
  if (args) {
    if (args.type !== undefined && args.type !== null) {
      this.type = args.type;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.annotations !== undefined && args.annotations !== null) {
      this.annotations = Thrift.copyList(args.annotations, [Annotation]);
    }
  }
};
MethodArgument.prototype = {};
MethodArgument.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.type = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        this.annotations = [];
        var _rtmp335 = input.readListBegin();
        var _size34 = _rtmp335.size || 0;
        for (var _i36 = 0; _i36 < _size34; ++_i36) {
          var elem37 = null;
          elem37 = new Annotation();
          elem37.read(input);
          this.annotations.push(elem37);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MethodArgument.prototype.write = function(output) {
  output.writeStructBegin('MethodArgument');
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.STRING, 1);
    output.writeString(this.type);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.annotations !== null && this.annotations !== undefined) {
    output.writeFieldBegin('annotations', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRUCT, this.annotations.length);
    for (var iter38 in this.annotations) {
      if (this.annotations.hasOwnProperty(iter38)) {
        iter38 = this.annotations[iter38];
        iter38.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MethodDescription = function(args) {
  this.returnType = null;
  this.name = null;
  this.arguments = null;
  this.annotations = null;
  if (args) {
    if (args.returnType !== undefined && args.returnType !== null) {
      this.returnType = args.returnType;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.arguments !== undefined && args.arguments !== null) {
      this.arguments = Thrift.copyList(args.arguments, [MethodArgument]);
    }
    if (args.annotations !== undefined && args.annotations !== null) {
      this.annotations = Thrift.copyList(args.annotations, [Annotation]);
    }
  }
};
MethodDescription.prototype = {};
MethodDescription.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.returnType = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        this.arguments = [];
        var _rtmp340 = input.readListBegin();
        var _size39 = _rtmp340.size || 0;
        for (var _i41 = 0; _i41 < _size39; ++_i41) {
          var elem42 = null;
          elem42 = new MethodArgument();
          elem42.read(input);
          this.arguments.push(elem42);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.LIST) {
        this.annotations = [];
        var _rtmp344 = input.readListBegin();
        var _size43 = _rtmp344.size || 0;
        for (var _i45 = 0; _i45 < _size43; ++_i45) {
          var elem46 = null;
          elem46 = new Annotation();
          elem46.read(input);
          this.annotations.push(elem46);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MethodDescription.prototype.write = function(output) {
  output.writeStructBegin('MethodDescription');
  if (this.returnType !== null && this.returnType !== undefined) {
    output.writeFieldBegin('returnType', Thrift.Type.STRING, 1);
    output.writeString(this.returnType);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.arguments !== null && this.arguments !== undefined) {
    output.writeFieldBegin('arguments', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRUCT, this.arguments.length);
    for (var iter47 in this.arguments) {
      if (this.arguments.hasOwnProperty(iter47)) {
        iter47 = this.arguments[iter47];
        iter47.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.annotations !== null && this.annotations !== undefined) {
    output.writeFieldBegin('annotations', Thrift.Type.LIST, 4);
    output.writeListBegin(Thrift.Type.STRUCT, this.annotations.length);
    for (var iter48 in this.annotations) {
      if (this.annotations.hasOwnProperty(iter48)) {
        iter48 = this.annotations[iter48];
        iter48.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ByteCodeObject = function(args) {
  this.name = null;
  this.byteCode = null;
  if (args) {
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.byteCode !== undefined && args.byteCode !== null) {
      this.byteCode = args.byteCode;
    }
  }
};
ByteCodeObject.prototype = {};
ByteCodeObject.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.byteCode = input.readBinary().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ByteCodeObject.prototype.write = function(output) {
  output.writeStructBegin('ByteCodeObject');
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.byteCode !== null && this.byteCode !== undefined) {
    output.writeFieldBegin('byteCode', Thrift.Type.STRING, 2);
    output.writeBinary(this.byteCode);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

APIResponse = function(args) {
  this.code = null;
  this.message = null;
  if (args) {
    if (args.code !== undefined && args.code !== null) {
      this.code = args.code;
    }
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    }
  }
};
APIResponse.prototype = {};
APIResponse.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.BYTE) {
        this.code = input.readByte().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

APIResponse.prototype.write = function(output) {
  output.writeStructBegin('APIResponse');
  if (this.code !== null && this.code !== undefined) {
    output.writeFieldBegin('code', Thrift.Type.BYTE, 1);
    output.writeByte(this.code);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 2);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

