// Python modules that are loaded at init-time
Module.core = {};
Module.core['./lib/python2.7/codecs.py'] = '""" codecs -- Python Codec Registry, API and helpers.\n' + 
'\n' + 
'\n' + 
'Written by Marc-Andre Lemburg (mal@lemburg.com).\n' + 
'\n' + 
'(c) Copyright CNRI, All Rights Reserved. NO WARRANTY.\n' + 
'\n' + 
'"""#"\n' + 
'\n' + 
'import __builtin__, sys\n' + 
'\n' + 
'### Registry and builtin stateless codec functions\n' + 
'\n' + 
'try:\n' + 
'    from _codecs import *\n' + 
'except ImportError, why:\n' + 
'    raise SystemError(\'Failed to load the builtin codecs: %s\' % why)\n' + 
'\n' + 
'__all__ = ["register", "lookup", "open", "EncodedFile", "BOM", "BOM_BE",\n' + 
'           "BOM_LE", "BOM32_BE", "BOM32_LE", "BOM64_BE", "BOM64_LE",\n' + 
'           "BOM_UTF8", "BOM_UTF16", "BOM_UTF16_LE", "BOM_UTF16_BE",\n' + 
'           "BOM_UTF32", "BOM_UTF32_LE", "BOM_UTF32_BE",\n' + 
'           "strict_errors", "ignore_errors", "replace_errors",\n' + 
'           "xmlcharrefreplace_errors",\n' + 
'           "register_error", "lookup_error"]\n' + 
'\n' + 
'### Constants\n' + 
'\n' + 
'#\n' + 
'# Byte Order Mark (BOM = ZERO WIDTH NO-BREAK SPACE = U+FEFF)\n' + 
'# and its possible byte string values\n' + 
'# for UTF8/UTF16/UTF32 output and little/big endian machines\n' + 
'#\n' + 
'\n' + 
'# UTF-8\n' + 
'BOM_UTF8 = \'\\xef\\xbb\\xbf\'\n' + 
'\n' + 
'# UTF-16, little endian\n' + 
'BOM_LE = BOM_UTF16_LE = \'\\xff\\xfe\'\n' + 
'\n' + 
'# UTF-16, big endian\n' + 
'BOM_BE = BOM_UTF16_BE = \'\\xfe\\xff\'\n' + 
'\n' + 
'# UTF-32, little endian\n' + 
'BOM_UTF32_LE = \'\\xff\\xfe\\x00\\x00\'\n' + 
'\n' + 
'# UTF-32, big endian\n' + 
'BOM_UTF32_BE = \'\\x00\\x00\\xfe\\xff\'\n' + 
'\n' + 
'if sys.byteorder == \'little\':\n' + 
'\n' + 
'    # UTF-16, native endianness\n' + 
'    BOM = BOM_UTF16 = BOM_UTF16_LE\n' + 
'\n' + 
'    # UTF-32, native endianness\n' + 
'    BOM_UTF32 = BOM_UTF32_LE\n' + 
'\n' + 
'else:\n' + 
'\n' + 
'    # UTF-16, native endianness\n' + 
'    BOM = BOM_UTF16 = BOM_UTF16_BE\n' + 
'\n' + 
'    # UTF-32, native endianness\n' + 
'    BOM_UTF32 = BOM_UTF32_BE\n' + 
'\n' + 
'# Old broken names (don\'t use in new code)\n' + 
'BOM32_LE = BOM_UTF16_LE\n' + 
'BOM32_BE = BOM_UTF16_BE\n' + 
'BOM64_LE = BOM_UTF32_LE\n' + 
'BOM64_BE = BOM_UTF32_BE\n' + 
'\n' + 
'\n' + 
'### Codec base classes (defining the API)\n' + 
'\n' + 
'class CodecInfo(tuple):\n' + 
'\n' + 
'    def __new__(cls, encode, decode, streamreader=None, streamwriter=None,\n' + 
'        incrementalencoder=None, incrementaldecoder=None, name=None):\n' + 
'        self = tuple.__new__(cls, (encode, decode, streamreader, streamwriter))\n' + 
'        self.name = name\n' + 
'        self.encode = encode\n' + 
'        self.decode = decode\n' + 
'        self.incrementalencoder = incrementalencoder\n' + 
'        self.incrementaldecoder = incrementaldecoder\n' + 
'        self.streamwriter = streamwriter\n' + 
'        self.streamreader = streamreader\n' + 
'        return self\n' + 
'\n' + 
'    def __repr__(self):\n' + 
'        return "<%s.%s object for encoding %s at 0x%x>" % (self.__class__.__module__, self.__class__.__name__, self.name, id(self))\n' + 
'\n' + 
'class Codec:\n' + 
'\n' + 
'    """ Defines the interface for stateless encoders/decoders.\n' + 
'\n' + 
'        The .encode()/.decode() methods may use different error\n' + 
'        handling schemes by providing the errors argument. These\n' + 
'        string values are predefined:\n' + 
'\n' + 
'         \'strict\' - raise a ValueError error (or a subclass)\n' + 
'         \'ignore\' - ignore the character and continue with the next\n' + 
'         \'replace\' - replace with a suitable replacement character;\n' + 
'                    Python will use the official U+FFFD REPLACEMENT\n' + 
'                    CHARACTER for the builtin Unicode codecs on\n' + 
'                    decoding and \'?\' on encoding.\n' + 
'         \'xmlcharrefreplace\' - Replace with the appropriate XML\n' + 
'                               character reference (only for encoding).\n' + 
'         \'backslashreplace\'  - Replace with backslashed escape sequences\n' + 
'                               (only for encoding).\n' + 
'\n' + 
'        The set of allowed values can be extended via register_error.\n' + 
'\n' + 
'    """\n' + 
'    def encode(self, input, errors=\'strict\'):\n' + 
'\n' + 
'        """ Encodes the object input and returns a tuple (output\n' + 
'            object, length consumed).\n' + 
'\n' + 
'            errors defines the error handling to apply. It defaults to\n' + 
'            \'strict\' handling.\n' + 
'\n' + 
'            The method may not store state in the Codec instance. Use\n' + 
'            StreamCodec for codecs which have to keep state in order to\n' + 
'            make encoding/decoding efficient.\n' + 
'\n' + 
'            The encoder must be able to handle zero length input and\n' + 
'            return an empty object of the output object type in this\n' + 
'            situation.\n' + 
'\n' + 
'        """\n' + 
'        raise NotImplementedError\n' + 
'\n' + 
'    def decode(self, input, errors=\'strict\'):\n' + 
'\n' + 
'        """ Decodes the object input and returns a tuple (output\n' + 
'            object, length consumed).\n' + 
'\n' + 
'            input must be an object which provides the bf_getreadbuf\n' + 
'            buffer slot. Python strings, buffer objects and memory\n' + 
'            mapped files are examples of objects providing this slot.\n' + 
'\n' + 
'            errors defines the error handling to apply. It defaults to\n' + 
'            \'strict\' handling.\n' + 
'\n' + 
'            The method may not store state in the Codec instance. Use\n' + 
'            StreamCodec for codecs which have to keep state in order to\n' + 
'            make encoding/decoding efficient.\n' + 
'\n' + 
'            The decoder must be able to handle zero length input and\n' + 
'            return an empty object of the output object type in this\n' + 
'            situation.\n' + 
'\n' + 
'        """\n' + 
'        raise NotImplementedError\n' + 
'\n' + 
'class IncrementalEncoder(object):\n' + 
'    """\n' + 
'    An IncrementalEncoder encodes an input in multiple steps. The input can be\n' + 
'    passed piece by piece to the encode() method. The IncrementalEncoder remembers\n' + 
'    the state of the Encoding process between calls to encode().\n' + 
'    """\n' + 
'    def __init__(self, errors=\'strict\'):\n' + 
'        """\n' + 
'        Creates an IncrementalEncoder instance.\n' + 
'\n' + 
'        The IncrementalEncoder may use different error handling schemes by\n' + 
'        providing the errors keyword argument. See the module docstring\n' + 
'        for a list of possible values.\n' + 
'        """\n' + 
'        self.errors = errors\n' + 
'        self.buffer = ""\n' + 
'\n' + 
'    def encode(self, input, final=False):\n' + 
'        """\n' + 
'        Encodes input and returns the resulting object.\n' + 
'        """\n' + 
'        raise NotImplementedError\n' + 
'\n' + 
'    def reset(self):\n' + 
'        """\n' + 
'        Resets the encoder to the initial state.\n' + 
'        """\n' + 
'\n' + 
'    def getstate(self):\n' + 
'        """\n' + 
'        Return the current state of the encoder.\n' + 
'        """\n' + 
'        return 0\n' + 
'\n' + 
'    def setstate(self, state):\n' + 
'        """\n' + 
'        Set the current state of the encoder. state must have been\n' + 
'        returned by getstate().\n' + 
'        """\n' + 
'\n' + 
'class BufferedIncrementalEncoder(IncrementalEncoder):\n' + 
'    """\n' + 
'    This subclass of IncrementalEncoder can be used as the baseclass for an\n' + 
'    incremental encoder if the encoder must keep some of the output in a\n' + 
'    buffer between calls to encode().\n' + 
'    """\n' + 
'    def __init__(self, errors=\'strict\'):\n' + 
'        IncrementalEncoder.__init__(self, errors)\n' + 
'        self.buffer = "" # unencoded input that is kept between calls to encode()\n' + 
'\n' + 
'    def _buffer_encode(self, input, errors, final):\n' + 
'        # Overwrite this method in subclasses: It must encode input\n' + 
'        # and return an (output, length consumed) tuple\n' + 
'        raise NotImplementedError\n' + 
'\n' + 
'    def encode(self, input, final=False):\n' + 
'        # encode input (taking the buffer into account)\n' + 
'        data = self.buffer + input\n' + 
'        (result, consumed) = self._buffer_encode(data, self.errors, final)\n' + 
'        # keep unencoded input until the next call\n' + 
'        self.buffer = data[consumed:]\n' + 
'        return result\n' + 
'\n' + 
'    def reset(self):\n' + 
'        IncrementalEncoder.reset(self)\n' + 
'        self.buffer = ""\n' + 
'\n' + 
'    def getstate(self):\n' + 
'        return self.buffer or 0\n' + 
'\n' + 
'    def setstate(self, state):\n' + 
'        self.buffer = state or ""\n' + 
'\n' + 
'class IncrementalDecoder(object):\n' + 
'    """\n' + 
'    An IncrementalDecoder decodes an input in multiple steps. The input can be\n' + 
'    passed piece by piece to the decode() method. The IncrementalDecoder\n' + 
'    remembers the state of the decoding process between calls to decode().\n' + 
'    """\n' + 
'    def __init__(self, errors=\'strict\'):\n' + 
'        """\n' + 
'        Creates a IncrementalDecoder instance.\n' + 
'\n' + 
'        The IncrementalDecoder may use different error handling schemes by\n' + 
'        providing the errors keyword argument. See the module docstring\n' + 
'        for a list of possible values.\n' + 
'        """\n' + 
'        self.errors = errors\n' + 
'\n' + 
'    def decode(self, input, final=False):\n' + 
'        """\n' + 
'        Decodes input and returns the resulting object.\n' + 
'        """\n' + 
'        raise NotImplementedError\n' + 
'\n' + 
'    def reset(self):\n' + 
'        """\n' + 
'        Resets the decoder to the initial state.\n' + 
'        """\n' + 
'\n' + 
'    def getstate(self):\n' + 
'        """\n' + 
'        Return the current state of the decoder.\n' + 
'\n' + 
'        This must be a (buffered_input, additional_state_info) tuple.\n' + 
'        buffered_input must be a bytes object containing bytes that\n' + 
'        were passed to decode() that have not yet been converted.\n' + 
'        additional_state_info must be a non-negative integer\n' + 
'        representing the state of the decoder WITHOUT yet having\n' + 
'        processed the contents of buffered_input.  In the initial state\n' + 
'        and after reset(), getstate() must return (b"", 0).\n' + 
'        """\n' + 
'        return (b"", 0)\n' + 
'\n' + 
'    def setstate(self, state):\n' + 
'        """\n' + 
'        Set the current state of the decoder.\n' + 
'\n' + 
'        state must have been returned by getstate().  The effect of\n' + 
'        setstate((b"", 0)) must be equivalent to reset().\n' + 
'        """\n' + 
'\n' + 
'class BufferedIncrementalDecoder(IncrementalDecoder):\n' + 
'    """\n' + 
'    This subclass of IncrementalDecoder can be used as the baseclass for an\n' + 
'    incremental decoder if the decoder must be able to handle incomplete byte\n' + 
'    sequences.\n' + 
'    """\n' + 
'    def __init__(self, errors=\'strict\'):\n' + 
'        IncrementalDecoder.__init__(self, errors)\n' + 
'        self.buffer = "" # undecoded input that is kept between calls to decode()\n' + 
'\n' + 
'    def _buffer_decode(self, input, errors, final):\n' + 
'        # Overwrite this method in subclasses: It must decode input\n' + 
'        # and return an (output, length consumed) tuple\n' + 
'        raise NotImplementedError\n' + 
'\n' + 
'    def decode(self, input, final=False):\n' + 
'        # decode input (taking the buffer into account)\n' + 
'        data = self.buffer + input\n' + 
'        (result, consumed) = self._buffer_decode(data, self.errors, final)\n' + 
'        # keep undecoded input until the next call\n' + 
'        self.buffer = data[consumed:]\n' + 
'        return result\n' + 
'\n' + 
'    def reset(self):\n' + 
'        IncrementalDecoder.reset(self)\n' + 
'        self.buffer = ""\n' + 
'\n' + 
'    def getstate(self):\n' + 
'        # additional state info is always 0\n' + 
'        return (self.buffer, 0)\n' + 
'\n' + 
'    def setstate(self, state):\n' + 
'        # ignore additional state info\n' + 
'        self.buffer = state[0]\n' + 
'\n' + 
'#\n' + 
'# The StreamWriter and StreamReader class provide generic working\n' + 
'# interfaces which can be used to implement new encoding submodules\n' + 
'# very easily. See encodings/utf_8.py for an example on how this is\n' + 
'# done.\n' + 
'#\n' + 
'\n' + 
'class StreamWriter(Codec):\n' + 
'\n' + 
'    def __init__(self, stream, errors=\'strict\'):\n' + 
'\n' + 
'        """ Creates a StreamWriter instance.\n' + 
'\n' + 
'            stream must be a file-like object open for writing\n' + 
'            (binary) data.\n' + 
'\n' + 
'            The StreamWriter may use different error handling\n' + 
'            schemes by providing the errors keyword argument. These\n' + 
'            parameters are predefined:\n' + 
'\n' + 
'             \'strict\' - raise a ValueError (or a subclass)\n' + 
'             \'ignore\' - ignore the character and continue with the next\n' + 
'             \'replace\'- replace with a suitable replacement character\n' + 
'             \'xmlcharrefreplace\' - Replace with the appropriate XML\n' + 
'                                   character reference.\n' + 
'             \'backslashreplace\'  - Replace with backslashed escape\n' + 
'                                   sequences (only for encoding).\n' + 
'\n' + 
'            The set of allowed parameter values can be extended via\n' + 
'            register_error.\n' + 
'        """\n' + 
'        self.stream = stream\n' + 
'        self.errors = errors\n' + 
'\n' + 
'    def write(self, object):\n' + 
'\n' + 
'        """ Writes the object\'s contents encoded to self.stream.\n' + 
'        """\n' + 
'        data, consumed = self.encode(object, self.errors)\n' + 
'        self.stream.write(data)\n' + 
'\n' + 
'    def writelines(self, list):\n' + 
'\n' + 
'        """ Writes the concatenated list of strings to the stream\n' + 
'            using .write().\n' + 
'        """\n' + 
'        self.write(\'\'.join(list))\n' + 
'\n' + 
'    def reset(self):\n' + 
'\n' + 
'        """ Flushes and resets the codec buffers used for keeping state.\n' + 
'\n' + 
'            Calling this method should ensure that the data on the\n' + 
'            output is put into a clean state, that allows appending\n' + 
'            of new fresh data without having to rescan the whole\n' + 
'            stream to recover state.\n' + 
'\n' + 
'        """\n' + 
'        pass\n' + 
'\n' + 
'    def seek(self, offset, whence=0):\n' + 
'        self.stream.seek(offset, whence)\n' + 
'        if whence == 0 and offset == 0:\n' + 
'            self.reset()\n' + 
'\n' + 
'    def __getattr__(self, name,\n' + 
'                    getattr=getattr):\n' + 
'\n' + 
'        """ Inherit all other methods from the underlying stream.\n' + 
'        """\n' + 
'        return getattr(self.stream, name)\n' + 
'\n' + 
'    def __enter__(self):\n' + 
'        return self\n' + 
'\n' + 
'    def __exit__(self, type, value, tb):\n' + 
'        self.stream.close()\n' + 
'\n' + 
'###\n' + 
'\n' + 
'class StreamReader(Codec):\n' + 
'\n' + 
'    def __init__(self, stream, errors=\'strict\'):\n' + 
'\n' + 
'        """ Creates a StreamReader instance.\n' + 
'\n' + 
'            stream must be a file-like object open for reading\n' + 
'            (binary) data.\n' + 
'\n' + 
'            The StreamReader may use different error handling\n' + 
'            schemes by providing the errors keyword argument. These\n' + 
'            parameters are predefined:\n' + 
'\n' + 
'             \'strict\' - raise a ValueError (or a subclass)\n' + 
'             \'ignore\' - ignore the character and continue with the next\n' + 
'             \'replace\'- replace with a suitable replacement character;\n' + 
'\n' + 
'            The set of allowed parameter values can be extended via\n' + 
'            register_error.\n' + 
'        """\n' + 
'        self.stream = stream\n' + 
'        self.errors = errors\n' + 
'        self.bytebuffer = ""\n' + 
'        # For str->str decoding this will stay a str\n' + 
'        # For str->unicode decoding the first read will promote it to unicode\n' + 
'        self.charbuffer = ""\n' + 
'        self.linebuffer = None\n' + 
'\n' + 
'    def decode(self, input, errors=\'strict\'):\n' + 
'        raise NotImplementedError\n' + 
'\n' + 
'    def read(self, size=-1, chars=-1, firstline=False):\n' + 
'\n' + 
'        """ Decodes data from the stream self.stream and returns the\n' + 
'            resulting object.\n' + 
'\n' + 
'            chars indicates the number of characters to read from the\n' + 
'            stream. read() will never return more than chars\n' + 
'            characters, but it might return less, if there are not enough\n' + 
'            characters available.\n' + 
'\n' + 
'            size indicates the approximate maximum number of bytes to\n' + 
'            read from the stream for decoding purposes. The decoder\n' + 
'            can modify this setting as appropriate. The default value\n' + 
'            -1 indicates to read and decode as much as possible.  size\n' + 
'            is intended to prevent having to decode huge files in one\n' + 
'            step.\n' + 
'\n' + 
'            If firstline is true, and a UnicodeDecodeError happens\n' + 
'            after the first line terminator in the input only the first line\n' + 
'            will be returned, the rest of the input will be kept until the\n' + 
'            next call to read().\n' + 
'\n' + 
'            The method should use a greedy read strategy meaning that\n' + 
'            it should read as much data as is allowed within the\n' + 
'            definition of the encoding and the given size, e.g.  if\n' + 
'            optional encoding endings or state markers are available\n' + 
'            on the stream, these should be read too.\n' + 
'        """\n' + 
'        # If we have lines cached, first merge them back into characters\n' + 
'        if self.linebuffer:\n' + 
'            self.charbuffer = "".join(self.linebuffer)\n' + 
'            self.linebuffer = None\n' + 
'\n' + 
'        # read until we get the required number of characters (if available)\n' + 
'        while True:\n' + 
'            # can the request can be satisfied from the character buffer?\n' + 
'            if chars < 0:\n' + 
'                if size < 0:\n' + 
'                    if self.charbuffer:\n' + 
'                        break\n' + 
'                elif len(self.charbuffer) >= size:\n' + 
'                    break\n' + 
'            else:\n' + 
'                if len(self.charbuffer) >= chars:\n' + 
'                    break\n' + 
'            # we need more data\n' + 
'            if size < 0:\n' + 
'                newdata = self.stream.read()\n' + 
'            else:\n' + 
'                newdata = self.stream.read(size)\n' + 
'            # decode bytes (those remaining from the last call included)\n' + 
'            data = self.bytebuffer + newdata\n' + 
'            try:\n' + 
'                newchars, decodedbytes = self.decode(data, self.errors)\n' + 
'            except UnicodeDecodeError, exc:\n' + 
'                if firstline:\n' + 
'                    newchars, decodedbytes = self.decode(data[:exc.start], self.errors)\n' + 
'                    lines = newchars.splitlines(True)\n' + 
'                    if len(lines)<=1:\n' + 
'                        raise\n' + 
'                else:\n' + 
'                    raise\n' + 
'            # keep undecoded bytes until the next call\n' + 
'            self.bytebuffer = data[decodedbytes:]\n' + 
'            # put new characters in the character buffer\n' + 
'            self.charbuffer += newchars\n' + 
'            # there was no data available\n' + 
'            if not newdata:\n' + 
'                break\n' + 
'        if chars < 0:\n' + 
'            # Return everything we\'ve got\n' + 
'            result = self.charbuffer\n' + 
'            self.charbuffer = ""\n' + 
'        else:\n' + 
'            # Return the first chars characters\n' + 
'            result = self.charbuffer[:chars]\n' + 
'            self.charbuffer = self.charbuffer[chars:]\n' + 
'        return result\n' + 
'\n' + 
'    def readline(self, size=None, keepends=True):\n' + 
'\n' + 
'        """ Read one line from the input stream and return the\n' + 
'            decoded data.\n' + 
'\n' + 
'            size, if given, is passed as size argument to the\n' + 
'            read() method.\n' + 
'\n' + 
'        """\n' + 
'        # If we have lines cached from an earlier read, return\n' + 
'        # them unconditionally\n' + 
'        if self.linebuffer:\n' + 
'            line = self.linebuffer[0]\n' + 
'            del self.linebuffer[0]\n' + 
'            if len(self.linebuffer) == 1:\n' + 
'                # revert to charbuffer mode; we might need more data\n' + 
'                # next time\n' + 
'                self.charbuffer = self.linebuffer[0]\n' + 
'                self.linebuffer = None\n' + 
'            if not keepends:\n' + 
'                line = line.splitlines(False)[0]\n' + 
'            return line\n' + 
'\n' + 
'        readsize = size or 72\n' + 
'        line = ""\n' + 
'        # If size is given, we call read() only once\n' + 
'        while True:\n' + 
'            data = self.read(readsize, firstline=True)\n' + 
'            if data:\n' + 
'                # If we\'re at a "\\r" read one extra character (which might\n' + 
'                # be a "\\n") to get a proper line ending. If the stream is\n' + 
'                # temporarily exhausted we return the wrong line ending.\n' + 
'                if data.endswith("\\r"):\n' + 
'                    data += self.read(size=1, chars=1)\n' + 
'\n' + 
'            line += data\n' + 
'            lines = line.splitlines(True)\n' + 
'            if lines:\n' + 
'                if len(lines) > 1:\n' + 
'                    # More than one line result; the first line is a full line\n' + 
'                    # to return\n' + 
'                    line = lines[0]\n' + 
'                    del lines[0]\n' + 
'                    if len(lines) > 1:\n' + 
'                        # cache the remaining lines\n' + 
'                        lines[-1] += self.charbuffer\n' + 
'                        self.linebuffer = lines\n' + 
'                        self.charbuffer = None\n' + 
'                    else:\n' + 
'                        # only one remaining line, put it back into charbuffer\n' + 
'                        self.charbuffer = lines[0] + self.charbuffer\n' + 
'                    if not keepends:\n' + 
'                        line = line.splitlines(False)[0]\n' + 
'                    break\n' + 
'                line0withend = lines[0]\n' + 
'                line0withoutend = lines[0].splitlines(False)[0]\n' + 
'                if line0withend != line0withoutend: # We really have a line end\n' + 
'                    # Put the rest back together and keep it until the next call\n' + 
'                    self.charbuffer = "".join(lines[1:]) + self.charbuffer\n' + 
'                    if keepends:\n' + 
'                        line = line0withend\n' + 
'                    else:\n' + 
'                        line = line0withoutend\n' + 
'                    break\n' + 
'            # we didn\'t get anything or this was our only try\n' + 
'            if not data or size is not None:\n' + 
'                if line and not keepends:\n' + 
'                    line = line.splitlines(False)[0]\n' + 
'                break\n' + 
'            if readsize<8000:\n' + 
'                readsize *= 2\n' + 
'        return line\n' + 
'\n' + 
'    def readlines(self, sizehint=None, keepends=True):\n' + 
'\n' + 
'        """ Read all lines available on the input stream\n' + 
'            and return them as list of lines.\n' + 
'\n' + 
'            Line breaks are implemented using the codec\'s decoder\n' + 
'            method and are included in the list entries.\n' + 
'\n' + 
'            sizehint, if given, is ignored since there is no efficient\n' + 
'            way to finding the true end-of-line.\n' + 
'\n' + 
'        """\n' + 
'        data = self.read()\n' + 
'        return data.splitlines(keepends)\n' + 
'\n' + 
'    def reset(self):\n' + 
'\n' + 
'        """ Resets the codec buffers used for keeping state.\n' + 
'\n' + 
'            Note that no stream repositioning should take place.\n' + 
'            This method is primarily intended to be able to recover\n' + 
'            from decoding errors.\n' + 
'\n' + 
'        """\n' + 
'        self.bytebuffer = ""\n' + 
'        self.charbuffer = u""\n' + 
'        self.linebuffer = None\n' + 
'\n' + 
'    def seek(self, offset, whence=0):\n' + 
'        """ Set the input stream\'s current position.\n' + 
'\n' + 
'            Resets the codec buffers used for keeping state.\n' + 
'        """\n' + 
'        self.stream.seek(offset, whence)\n' + 
'        self.reset()\n' + 
'\n' + 
'    def next(self):\n' + 
'\n' + 
'        """ Return the next decoded line from the input stream."""\n' + 
'        line = self.readline()\n' + 
'        if line:\n' + 
'            return line\n' + 
'        raise StopIteration\n' + 
'\n' + 
'    def __iter__(self):\n' + 
'        return self\n' + 
'\n' + 
'    def __getattr__(self, name,\n' + 
'                    getattr=getattr):\n' + 
'\n' + 
'        """ Inherit all other methods from the underlying stream.\n' + 
'        """\n' + 
'        return getattr(self.stream, name)\n' + 
'\n' + 
'    def __enter__(self):\n' + 
'        return self\n' + 
'\n' + 
'    def __exit__(self, type, value, tb):\n' + 
'        self.stream.close()\n' + 
'\n' + 
'###\n' + 
'\n' + 
'class StreamReaderWriter:\n' + 
'\n' + 
'    """ StreamReaderWriter instances allow wrapping streams which\n' + 
'        work in both read and write modes.\n' + 
'\n' + 
'        The design is such that one can use the factory functions\n' + 
'        returned by the codec.lookup() function to construct the\n' + 
'        instance.\n' + 
'\n' + 
'    """\n' + 
'    # Optional attributes set by the file wrappers below\n' + 
'    encoding = \'unknown\'\n' + 
'\n' + 
'    def __init__(self, stream, Reader, Writer, errors=\'strict\'):\n' + 
'\n' + 
'        """ Creates a StreamReaderWriter instance.\n' + 
'\n' + 
'            stream must be a Stream-like object.\n' + 
'\n' + 
'            Reader, Writer must be factory functions or classes\n' + 
'            providing the StreamReader, StreamWriter interface resp.\n' + 
'\n' + 
'            Error handling is done in the same way as defined for the\n' + 
'            StreamWriter/Readers.\n' + 
'\n' + 
'        """\n' + 
'        self.stream = stream\n' + 
'        self.reader = Reader(stream, errors)\n' + 
'        self.writer = Writer(stream, errors)\n' + 
'        self.errors = errors\n' + 
'\n' + 
'    def read(self, size=-1):\n' + 
'\n' + 
'        return self.reader.read(size)\n' + 
'\n' + 
'    def readline(self, size=None):\n' + 
'\n' + 
'        return self.reader.readline(size)\n' + 
'\n' + 
'    def readlines(self, sizehint=None):\n' + 
'\n' + 
'        return self.reader.readlines(sizehint)\n' + 
'\n' + 
'    def next(self):\n' + 
'\n' + 
'        """ Return the next decoded line from the input stream."""\n' + 
'        return self.reader.next()\n' + 
'\n' + 
'    def __iter__(self):\n' + 
'        return self\n' + 
'\n' + 
'    def write(self, data):\n' + 
'\n' + 
'        return self.writer.write(data)\n' + 
'\n' + 
'    def writelines(self, list):\n' + 
'\n' + 
'        return self.writer.writelines(list)\n' + 
'\n' + 
'    def reset(self):\n' + 
'\n' + 
'        self.reader.reset()\n' + 
'        self.writer.reset()\n' + 
'\n' + 
'    def seek(self, offset, whence=0):\n' + 
'        self.stream.seek(offset, whence)\n' + 
'        self.reader.reset()\n' + 
'        if whence == 0 and offset == 0:\n' + 
'            self.writer.reset()\n' + 
'\n' + 
'    def __getattr__(self, name,\n' + 
'                    getattr=getattr):\n' + 
'\n' + 
'        """ Inherit all other methods from the underlying stream.\n' + 
'        """\n' + 
'        return getattr(self.stream, name)\n' + 
'\n' + 
'    # these are needed to make "with codecs.open(...)" work properly\n' + 
'\n' + 
'    def __enter__(self):\n' + 
'        return self\n' + 
'\n' + 
'    def __exit__(self, type, value, tb):\n' + 
'        self.stream.close()\n' + 
'\n' + 
'###\n' + 
'\n' + 
'class StreamRecoder:\n' + 
'\n' + 
'    """ StreamRecoder instances provide a frontend - backend\n' + 
'        view of encoding data.\n' + 
'\n' + 
'        They use the complete set of APIs returned by the\n' + 
'        codecs.lookup() function to implement their task.\n' + 
'\n' + 
'        Data written to the stream is first decoded into an\n' + 
'        intermediate format (which is dependent on the given codec\n' + 
'        combination) and then written to the stream using an instance\n' + 
'        of the provided Writer class.\n' + 
'\n' + 
'        In the other direction, data is read from the stream using a\n' + 
'        Reader instance and then return encoded data to the caller.\n' + 
'\n' + 
'    """\n' + 
'    # Optional attributes set by the file wrappers below\n' + 
'    data_encoding = \'unknown\'\n' + 
'    file_encoding = \'unknown\'\n' + 
'\n' + 
'    def __init__(self, stream, encode, decode, Reader, Writer,\n' + 
'                 errors=\'strict\'):\n' + 
'\n' + 
'        """ Creates a StreamRecoder instance which implements a two-way\n' + 
'            conversion: encode and decode work on the frontend (the\n' + 
'            input to .read() and output of .write()) while\n' + 
'            Reader and Writer work on the backend (reading and\n' + 
'            writing to the stream).\n' + 
'\n' + 
'            You can use these objects to do transparent direct\n' + 
'            recodings from e.g. latin-1 to utf-8 and back.\n' + 
'\n' + 
'            stream must be a file-like object.\n' + 
'\n' + 
'            encode, decode must adhere to the Codec interface, Reader,\n' + 
'            Writer must be factory functions or classes providing the\n' + 
'            StreamReader, StreamWriter interface resp.\n' + 
'\n' + 
'            encode and decode are needed for the frontend translation,\n' + 
'            Reader and Writer for the backend translation. Unicode is\n' + 
'            used as intermediate encoding.\n' + 
'\n' + 
'            Error handling is done in the same way as defined for the\n' + 
'            StreamWriter/Readers.\n' + 
'\n' + 
'        """\n' + 
'        self.stream = stream\n' + 
'        self.encode = encode\n' + 
'        self.decode = decode\n' + 
'        self.reader = Reader(stream, errors)\n' + 
'        self.writer = Writer(stream, errors)\n' + 
'        self.errors = errors\n' + 
'\n' + 
'    def read(self, size=-1):\n' + 
'\n' + 
'        data = self.reader.read(size)\n' + 
'        data, bytesencoded = self.encode(data, self.errors)\n' + 
'        return data\n' + 
'\n' + 
'    def readline(self, size=None):\n' + 
'\n' + 
'        if size is None:\n' + 
'            data = self.reader.readline()\n' + 
'        else:\n' + 
'            data = self.reader.readline(size)\n' + 
'        data, bytesencoded = self.encode(data, self.errors)\n' + 
'        return data\n' + 
'\n' + 
'    def readlines(self, sizehint=None):\n' + 
'\n' + 
'        data = self.reader.read()\n' + 
'        data, bytesencoded = self.encode(data, self.errors)\n' + 
'        return data.splitlines(1)\n' + 
'\n' + 
'    def next(self):\n' + 
'\n' + 
'        """ Return the next decoded line from the input stream."""\n' + 
'        data = self.reader.next()\n' + 
'        data, bytesencoded = self.encode(data, self.errors)\n' + 
'        return data\n' + 
'\n' + 
'    def __iter__(self):\n' + 
'        return self\n' + 
'\n' + 
'    def write(self, data):\n' + 
'\n' + 
'        data, bytesdecoded = self.decode(data, self.errors)\n' + 
'        return self.writer.write(data)\n' + 
'\n' + 
'    def writelines(self, list):\n' + 
'\n' + 
'        data = \'\'.join(list)\n' + 
'        data, bytesdecoded = self.decode(data, self.errors)\n' + 
'        return self.writer.write(data)\n' + 
'\n' + 
'    def reset(self):\n' + 
'\n' + 
'        self.reader.reset()\n' + 
'        self.writer.reset()\n' + 
'\n' + 
'    def __getattr__(self, name,\n' + 
'                    getattr=getattr):\n' + 
'\n' + 
'        """ Inherit all other methods from the underlying stream.\n' + 
'        """\n' + 
'        return getattr(self.stream, name)\n' + 
'\n' + 
'    def __enter__(self):\n' + 
'        return self\n' + 
'\n' + 
'    def __exit__(self, type, value, tb):\n' + 
'        self.stream.close()\n' + 
'\n' + 
'### Shortcuts\n' + 
'\n' + 
'def open(filename, mode=\'rb\', encoding=None, errors=\'strict\', buffering=1):\n' + 
'\n' + 
'    """ Open an encoded file using the given mode and return\n' + 
'        a wrapped version providing transparent encoding/decoding.\n' + 
'\n' + 
'        Note: The wrapped version will only accept the object format\n' + 
'        defined by the codecs, i.e. Unicode objects for most builtin\n' + 
'        codecs. Output is also codec dependent and will usually be\n' + 
'        Unicode as well.\n' + 
'\n' + 
'        Files are always opened in binary mode, even if no binary mode\n' + 
'        was specified. This is done to avoid data loss due to encodings\n' + 
'        using 8-bit values. The default file mode is \'rb\' meaning to\n' + 
'        open the file in binary read mode.\n' + 
'\n' + 
'        encoding specifies the encoding which is to be used for the\n' + 
'        file.\n' + 
'\n' + 
'        errors may be given to define the error handling. It defaults\n' + 
'        to \'strict\' which causes ValueErrors to be raised in case an\n' + 
'        encoding error occurs.\n' + 
'\n' + 
'        buffering has the same meaning as for the builtin open() API.\n' + 
'        It defaults to line buffered.\n' + 
'\n' + 
'        The returned wrapped file object provides an extra attribute\n' + 
'        .encoding which allows querying the used encoding. This\n' + 
'        attribute is only available if an encoding was specified as\n' + 
'        parameter.\n' + 
'\n' + 
'    """\n' + 
'    if encoding is not None:\n' + 
'        if \'U\' in mode:\n' + 
'            # No automatic conversion of \'\\n\' is done on reading and writing\n' + 
'            mode = mode.strip().replace(\'U\', \'\')\n' + 
'            if mode[:1] not in set(\'rwa\'):\n' + 
'                mode = \'r\' + mode\n' + 
'        if \'b\' not in mode:\n' + 
'            # Force opening of the file in binary mode\n' + 
'            mode = mode + \'b\'\n' + 
'    file = __builtin__.open(filename, mode, buffering)\n' + 
'    if encoding is None:\n' + 
'        return file\n' + 
'    info = lookup(encoding)\n' + 
'    srw = StreamReaderWriter(file, info.streamreader, info.streamwriter, errors)\n' + 
'    # Add attributes to simplify introspection\n' + 
'    srw.encoding = encoding\n' + 
'    return srw\n' + 
'\n' + 
'def EncodedFile(file, data_encoding, file_encoding=None, errors=\'strict\'):\n' + 
'\n' + 
'    """ Return a wrapped version of file which provides transparent\n' + 
'        encoding translation.\n' + 
'\n' + 
'        Strings written to the wrapped file are interpreted according\n' + 
'        to the given data_encoding and then written to the original\n' + 
'        file as string using file_encoding. The intermediate encoding\n' + 
'        will usually be Unicode but depends on the specified codecs.\n' + 
'\n' + 
'        Strings are read from the file using file_encoding and then\n' + 
'        passed back to the caller as string using data_encoding.\n' + 
'\n' + 
'        If file_encoding is not given, it defaults to data_encoding.\n' + 
'\n' + 
'        errors may be given to define the error handling. It defaults\n' + 
'        to \'strict\' which causes ValueErrors to be raised in case an\n' + 
'        encoding error occurs.\n' + 
'\n' + 
'        The returned wrapped file object provides two extra attributes\n' + 
'        .data_encoding and .file_encoding which reflect the given\n' + 
'        parameters of the same name. The attributes can be used for\n' + 
'        introspection by Python programs.\n' + 
'\n' + 
'    """\n' + 
'    if file_encoding is None:\n' + 
'        file_encoding = data_encoding\n' + 
'    data_info = lookup(data_encoding)\n' + 
'    file_info = lookup(file_encoding)\n' + 
'    sr = StreamRecoder(file, data_info.encode, data_info.decode,\n' + 
'                       file_info.streamreader, file_info.streamwriter, errors)\n' + 
'    # Add attributes to simplify introspection\n' + 
'    sr.data_encoding = data_encoding\n' + 
'    sr.file_encoding = file_encoding\n' + 
'    return sr\n' + 
'\n' + 
'### Helpers for codec lookup\n' + 
'\n' + 
'def getencoder(encoding):\n' + 
'\n' + 
'    """ Lookup up the codec for the given encoding and return\n' + 
'        its encoder function.\n' + 
'\n' + 
'        Raises a LookupError in case the encoding cannot be found.\n' + 
'\n' + 
'    """\n' + 
'    return lookup(encoding).encode\n' + 
'\n' + 
'def getdecoder(encoding):\n' + 
'\n' + 
'    """ Lookup up the codec for the given encoding and return\n' + 
'        its decoder function.\n' + 
'\n' + 
'        Raises a LookupError in case the encoding cannot be found.\n' + 
'\n' + 
'    """\n' + 
'    return lookup(encoding).decode\n' + 
'\n' + 
'def getincrementalencoder(encoding):\n' + 
'\n' + 
'    """ Lookup up the codec for the given encoding and return\n' + 
'        its IncrementalEncoder class or factory function.\n' + 
'\n' + 
'        Raises a LookupError in case the encoding cannot be found\n' + 
'        or the codecs doesn\'t provide an incremental encoder.\n' + 
'\n' + 
'    """\n' + 
'    encoder = lookup(encoding).incrementalencoder\n' + 
'    if encoder is None:\n' + 
'        raise LookupError(encoding)\n' + 
'    return encoder\n' + 
'\n' + 
'def getincrementaldecoder(encoding):\n' + 
'\n' + 
'    """ Lookup up the codec for the given encoding and return\n' + 
'        its IncrementalDecoder class or factory function.\n' + 
'\n' + 
'        Raises a LookupError in case the encoding cannot be found\n' + 
'        or the codecs doesn\'t provide an incremental decoder.\n' + 
'\n' + 
'    """\n' + 
'    decoder = lookup(encoding).incrementaldecoder\n' + 
'    if decoder is None:\n' + 
'        raise LookupError(encoding)\n' + 
'    return decoder\n' + 
'\n' + 
'def getreader(encoding):\n' + 
'\n' + 
'    """ Lookup up the codec for the given encoding and return\n' + 
'        its StreamReader class or factory function.\n' + 
'\n' + 
'        Raises a LookupError in case the encoding cannot be found.\n' + 
'\n' + 
'    """\n' + 
'    return lookup(encoding).streamreader\n' + 
'\n' + 
'def getwriter(encoding):\n' + 
'\n' + 
'    """ Lookup up the codec for the given encoding and return\n' + 
'        its StreamWriter class or factory function.\n' + 
'\n' + 
'        Raises a LookupError in case the encoding cannot be found.\n' + 
'\n' + 
'    """\n' + 
'    return lookup(encoding).streamwriter\n' + 
'\n' + 
'def iterencode(iterator, encoding, errors=\'strict\', **kwargs):\n' + 
'    """\n' + 
'    Encoding iterator.\n' + 
'\n' + 
'    Encodes the input strings from the iterator using a IncrementalEncoder.\n' + 
'\n' + 
'    errors and kwargs are passed through to the IncrementalEncoder\n' + 
'    constructor.\n' + 
'    """\n' + 
'    encoder = getincrementalencoder(encoding)(errors, **kwargs)\n' + 
'    for input in iterator:\n' + 
'        output = encoder.encode(input)\n' + 
'        if output:\n' + 
'            yield output\n' + 
'    output = encoder.encode("", True)\n' + 
'    if output:\n' + 
'        yield output\n' + 
'\n' + 
'def iterdecode(iterator, encoding, errors=\'strict\', **kwargs):\n' + 
'    """\n' + 
'    Decoding iterator.\n' + 
'\n' + 
'    Decodes the input strings from the iterator using a IncrementalDecoder.\n' + 
'\n' + 
'    errors and kwargs are passed through to the IncrementalDecoder\n' + 
'    constructor.\n' + 
'    """\n' + 
'    decoder = getincrementaldecoder(encoding)(errors, **kwargs)\n' + 
'    for input in iterator:\n' + 
'        output = decoder.decode(input)\n' + 
'        if output:\n' + 
'            yield output\n' + 
'    output = decoder.decode("", True)\n' + 
'    if output:\n' + 
'        yield output\n' + 
'\n' + 
'### Helpers for charmap-based codecs\n' + 
'\n' + 
'def make_identity_dict(rng):\n' + 
'\n' + 
'    """ make_identity_dict(rng) -> dict\n' + 
'\n' + 
'        Return a dictionary where elements of the rng sequence are\n' + 
'        mapped to themselves.\n' + 
'\n' + 
'    """\n' + 
'    res = {}\n' + 
'    for i in rng:\n' + 
'        res[i]=i\n' + 
'    return res\n' + 
'\n' + 
'def make_encoding_map(decoding_map):\n' + 
'\n' + 
'    """ Creates an encoding map from a decoding map.\n' + 
'\n' + 
'        If a target mapping in the decoding map occurs multiple\n' + 
'        times, then that target is mapped to None (undefined mapping),\n' + 
'        causing an exception when encountered by the charmap codec\n' + 
'        during translation.\n' + 
'\n' + 
'        One example where this happens is cp875.py which decodes\n' + 
'        multiple character to \\u001a.\n' + 
'\n' + 
'    """\n' + 
'    m = {}\n' + 
'    for k,v in decoding_map.items():\n' + 
'        if not v in m:\n' + 
'            m[v] = k\n' + 
'        else:\n' + 
'            m[v] = None\n' + 
'    return m\n' + 
'\n' + 
'### error handlers\n' + 
'\n' + 
'try:\n' + 
'    strict_errors = lookup_error("strict")\n' + 
'    ignore_errors = lookup_error("ignore")\n' + 
'    replace_errors = lookup_error("replace")\n' + 
'    xmlcharrefreplace_errors = lookup_error("xmlcharrefreplace")\n' + 
'    backslashreplace_errors = lookup_error("backslashreplace")\n' + 
'except LookupError:\n' + 
'    # In --disable-unicode builds, these error handler are missing\n' + 
'    strict_errors = None\n' + 
'    ignore_errors = None\n' + 
'    replace_errors = None\n' + 
'    xmlcharrefreplace_errors = None\n' + 
'    backslashreplace_errors = None\n' + 
'\n' + 
'# Tell modulefinder that using codecs probably needs the encodings\n' + 
'# package\n' + 
'_false = 0\n' + 
'if _false:\n' + 
'    import encodings\n' + 
'\n' + 
'### Tests\n' + 
'\n' + 
'if __name__ == \'__main__\':\n' + 
'\n' + 
'    # Make stdout translate Latin-1 output into UTF-8 output\n' + 
'    sys.stdout = EncodedFile(sys.stdout, \'latin-1\', \'utf-8\')\n' + 
'\n' + 
'    # Have stdin translate Latin-1 input into UTF-8 input\n' + 
'    sys.stdin = EncodedFile(sys.stdin, \'utf-8\', \'latin-1\')';

Module.core['./lib/python2.7/encodings/__init__.py'] = '""" Standard "encodings" Package\n' + 
'\n' + 
'    Standard Python encoding modules are stored in this package\n' + 
'    directory.\n' + 
'\n' + 
'    Codec modules must have names corresponding to normalized encoding\n' + 
'    names as defined in the normalize_encoding() function below, e.g.\n' + 
'    \'utf-8\' must be implemented by the module \'utf_8.py\'.\n' + 
'\n' + 
'    Each codec module must export the following interface:\n' + 
'\n' + 
'    * getregentry() -> codecs.CodecInfo object\n' + 
'    The getregentry() API must a CodecInfo object with encoder, decoder,\n' + 
'    incrementalencoder, incrementaldecoder, streamwriter and streamreader\n' + 
'    atttributes which adhere to the Python Codec Interface Standard.\n' + 
'\n' + 
'    In addition, a module may optionally also define the following\n' + 
'    APIs which are then used by the package\'s codec search function:\n' + 
'\n' + 
'    * getaliases() -> sequence of encoding name strings to use as aliases\n' + 
'\n' + 
'    Alias names returned by getaliases() must be normalized encoding\n' + 
'    names as defined by normalize_encoding().\n' + 
'\n' + 
'Written by Marc-Andre Lemburg (mal@lemburg.com).\n' + 
'\n' + 
'(c) Copyright CNRI, All Rights Reserved. NO WARRANTY.\n' + 
'\n' + 
'"""#"\n' + 
'\n' + 
'import codecs\n' + 
'from encodings import aliases\n' + 
'import __builtin__\n' + 
'\n' + 
'_cache = {}\n' + 
'_unknown = \'--unknown--\'\n' + 
'_import_tail = [\'*\']\n' + 
'_norm_encoding_map = (\'                                              . \'\n' + 
'                      \'0123456789       ABCDEFGHIJKLMNOPQRSTUVWXYZ     \'\n' + 
'                      \' abcdefghijklmnopqrstuvwxyz                     \'\n' + 
'                      \'                                                \'\n' + 
'                      \'                                                \'\n' + 
'                      \'                \')\n' + 
'_aliases = aliases.aliases\n' + 
'\n' + 
'class CodecRegistryError(LookupError, SystemError):\n' + 
'    pass\n' + 
'\n' + 
'def normalize_encoding(encoding):\n' + 
'\n' + 
'    """ Normalize an encoding name.\n' + 
'\n' + 
'        Normalization works as follows: all non-alphanumeric\n' + 
'        characters except the dot used for Python package names are\n' + 
'        collapsed and replaced with a single underscore, e.g. \'  -;#\'\n' + 
'        becomes \'_\'. Leading and trailing underscores are removed.\n' + 
'\n' + 
'        Note that encoding names should be ASCII only; if they do use\n' + 
'        non-ASCII characters, these must be Latin-1 compatible.\n' + 
'\n' + 
'    """\n' + 
'    # Make sure we have an 8-bit string, because .translate() works\n' + 
'    # differently for Unicode strings.\n' + 
'    if hasattr(__builtin__, "unicode") and isinstance(encoding, unicode):\n' + 
'        # Note that .encode(\'latin-1\') does *not* use the codec\n' + 
'        # registry, so this call doesn\'t recurse. (See unicodeobject.c\n' + 
'        # PyUnicode_AsEncodedString() for details)\n' + 
'        encoding = encoding.encode(\'latin-1\')\n' + 
'    return \'_\'.join(encoding.translate(_norm_encoding_map).split())\n' + 
'\n' + 
'def search_function(encoding):\n' + 
'\n' + 
'    # Cache lookup\n' + 
'    entry = _cache.get(encoding, _unknown)\n' + 
'    if entry is not _unknown:\n' + 
'        return entry\n' + 
'\n' + 
'    # Import the module:\n' + 
'    #\n' + 
'    # First try to find an alias for the normalized encoding\n' + 
'    # name and lookup the module using the aliased name, then try to\n' + 
'    # lookup the module using the standard import scheme, i.e. first\n' + 
'    # try in the encodings package, then at top-level.\n' + 
'    #\n' + 
'    norm_encoding = normalize_encoding(encoding)\n' + 
'    aliased_encoding = _aliases.get(norm_encoding) or _aliases.get(norm_encoding.replace(\'.\', \'_\'))\n' + 
'    if aliased_encoding is not None:\n' + 
'        modnames = [aliased_encoding,\n' + 
'                    norm_encoding]\n' + 
'    else:\n' + 
'        modnames = [norm_encoding]\n' + 
'    for modname in modnames:\n' + 
'        if not modname or \'.\' in modname:\n' + 
'            continue\n' + 
'        try:\n' + 
'            # Import is absolute to prevent the possibly malicious import of a\n' + 
'            # module with side-effects that is not in the \'encodings\' package.\n' + 
'            mod = __import__(\'encodings.\' + modname, fromlist=_import_tail,\n' + 
'                             level=0)\n' + 
'        except ImportError:\n' + 
'            pass\n' + 
'        else:\n' + 
'            break\n' + 
'    else:\n' + 
'        mod = None\n' + 
'\n' + 
'    try:\n' + 
'        getregentry = mod.getregentry\n' + 
'    except AttributeError:\n' + 
'        # Not a codec module\n' + 
'        mod = None\n' + 
'\n' + 
'    if mod is None:\n' + 
'        # Cache misses\n' + 
'        _cache[encoding] = None\n' + 
'        return None\n' + 
'\n' + 
'    # Now ask the module for the registry entry\n' + 
'    entry = getregentry()\n' + 
'    if not isinstance(entry, codecs.CodecInfo):\n' + 
'        if not 4 <= len(entry) <= 7:\n' + 
'            raise CodecRegistryError, \'module "%s" (%s) failed to register\' % (mod.__name__, mod.__file__)\n' + 
'        if not hasattr(entry[0], \'__call__\') or \ ' + 
'           not hasattr(entry[1], \'__call__\') or \ ' + 
'           (entry[2] is not None and not hasattr(entry[2], \'__call__\')) or \ ' + 
'           (entry[3] is not None and not hasattr(entry[3], \'__call__\')) or \ ' + 
'           (len(entry) > 4 and entry[4] is not None and not hasattr(entry[4], \'__call__\')) or \ ' + 
'           (len(entry) > 5 and entry[5] is not None and not hasattr(entry[5], \'__call__\')):\n' + 
'            raise CodecRegistryError, \'incompatible codecs in module "%s" (%s)\' % (mod.__name__, mod.__file__)\n' + 
'        if len(entry)<7 or entry[6] is None:\n' + 
'            entry += (None,)*(6-len(entry)) + (mod.__name__.split(".", 1)[1],)\n' + 
'        entry = codecs.CodecInfo(*entry)\n' + 
'\n' + 
'    # Cache the codec registry entry\n' + 
'    _cache[encoding] = entry\n' + 
'\n' + 
'    # Register its aliases (without overwriting previously registered\n' + 
'    # aliases)\n' + 
'    try:\n' + 
'        codecaliases = mod.getaliases()\n' + 
'    except AttributeError:\n' + 
'        pass\n' + 
'    else:\n' + 
'        for alias in codecaliases:\n' + 
'            if alias not in _aliases:\n' + 
'                _aliases[alias] = modname\n' + 
'\n' + 
'    # Return the registry entry\n' + 
'    return entry\n' + 
'\n' + 
'# Register the search_function in the Python codec registry\n' + 
'codecs.register(search_function)';
Module.core['./lib/python2.7/encodings/ascii.py'] = '""" Python \'ascii\' Codec\n' + 
'\n' + 
'\n' + 
'Written by Marc-Andre Lemburg (mal@lemburg.com).\n' + 
'\n' + 
'(c) Copyright CNRI, All Rights Reserved. NO WARRANTY.\n' + 
'\n' + 
'"""\n' + 
'import codecs\n' + 
'\n' + 
'### Codec APIs\n' + 
'\n' + 
'class Codec(codecs.Codec):\n' + 
'\n' + 
'    # Note: Binding these as C functions will result in the class not\n' + 
'    # converting them to methods. This is intended.\n' + 
'    encode = codecs.ascii_encode\n' + 
'    decode = codecs.ascii_decode\n' + 
'\n' + 
'class IncrementalEncoder(codecs.IncrementalEncoder):\n' + 
'    def encode(self, input, final=False):\n' + 
'        return codecs.ascii_encode(input, self.errors)[0]\n' + 
'\n' + 
'class IncrementalDecoder(codecs.IncrementalDecoder):\n' + 
'    def decode(self, input, final=False):\n' + 
'        return codecs.ascii_decode(input, self.errors)[0]\n' + 
'\n' + 
'class StreamWriter(Codec,codecs.StreamWriter):\n' + 
'    pass\n' + 
'\n' + 
'class StreamReader(Codec,codecs.StreamReader):\n' + 
'    pass\n' + 
'\n' + 
'class StreamConverter(StreamWriter,StreamReader):\n' + 
'\n' + 
'    encode = codecs.ascii_decode\n' + 
'    decode = codecs.ascii_encode\n' + 
'\n' + 
'### encodings module API\n' + 
'\n' + 
'def getregentry():\n' + 
'    return codecs.CodecInfo(\n' + 
'        name=\'ascii\',\n' + 
'        encode=Codec.encode,\n' + 
'        decode=Codec.decode,\n' + 
'        incrementalencoder=IncrementalEncoder,\n' + 
'        incrementaldecoder=IncrementalDecoder,\n' + 
'        streamwriter=StreamWriter,\n' + 
'        streamreader=StreamReader,\n' + 
'    )';
Module.core['./lib/python2.7/bifrost.so.js'] = '"use strict";\n' + 
'(function(FUNCTION_TABLE_OFFSET) {\n' + 
'  var Module = {};\n' + 
'  var args = [];\n' + 
'  Module.arguments = [];\n' + 
'  var __globalConstructor__ = function globalConstructor() {};\n' + 
'  var $struct_FILE___SIZE = 148;\n' + 
'  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];\n' + 
'  var $struct_PyBufferProcs___SIZE = 24;\n' + 
'  var $struct_PyGetSetDef___SIZE = 20;\n' + 
'  var $struct_PyMappingMethods___SIZE = 12;\n' + 
'  var $struct_PyMemberDef___SIZE = 0;\n' + 
'  var $struct_PyMemberDef___FLATTENER = [];\n' + 
'  var $struct_PyMethodDef___SIZE = 16;\n' + 
'  var $struct_PyNumberMethods___SIZE = 156;\n' + 
'  var $struct_PyObject___SIZE = 8;\n' + 
'  var $struct_PySequenceMethods___SIZE = 40;\n' + 
'  var $struct_Py_buffer___SIZE = 52;\n' + 
'  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];\n' + 
'  var $struct__IO_marker___SIZE = 12;\n' + 
'  var $struct__typeobject___SIZE = 196;\n' + 
'  var __str;\n' + 
'  var __str1;\n' + 
'  var _BifrostMethods;\n' + 
'  var __str2;\n' + 
'  var __str3;\n' + 
'  var __str4;\n' + 
'  function _run($self, $args) {\n' + 
'    var __stackBase__ = STACKTOP;\n' + 
'    STACKTOP += 20;\n' + 
'    assert(STACKTOP < STACK_MAX);\n' + 
'    _memset(__stackBase__, 0, 20);\n' + 
'    var __label__;\n' + 
'    __label__ = -1;\n' + 
'    while (1) switch (__label__) {\n' + 
'     case -1:\n' + 
'      \n' + 
'      var $args_addr = __stackBase__ + 4;\n' + 
'      var $retval = __stackBase__ + 8;\n' + 
'      var $0 = __stackBase__ + 12;\n' + 
'      var $script = __stackBase__ + 16;\n' + 
'      \n' + 
'      HEAP[__stackBase__] = $self;\n' + 
'      HEAP[$args_addr] = $args;\n' + 
'      var $1 = HEAP[$args_addr];\n' + 
'      var $2 = _PyArg_ParseTuple($1, __str, allocate([ $script, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));\n' + 
'      \n' + 
'      if ($2 == 0) {\n' + 
'        __label__ = 1;\n' + 
'        break;\n' + 
'      } else {\n' + 
'        __label__ = 2;\n' + 
'        break;\n' + 
'      }\n' + 
'     case 1:\n' + 
'      HEAP[$0] = 0;\n' + 
'      __label__ = 3;\n' + 
'      break;\n' + 
'     case 2:\n' + 
'      var $4 = HEAP[$script];\n' + 
'      //var $5 = _printf(__str1, allocate([ $4, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));\n' + 
'      var $6 = HEAP[$script];\n' + 
'      //_emscripten_run_script($6);\n' + 
'      eval(Pointer_stringify($6));\n' + 
'      //console.log(eval(Pointer_stringify($6)));\n' + 
'      \n' + 
'      var $8 = HEAP[__Py_NoneStruct] + 1;\n' + 
'      HEAP[__Py_NoneStruct] = $8;\n' + 
'      HEAP[$0] = __Py_NoneStruct;\n' + 
'      __label__ = 3;\n' + 
'      break;\n' + 
'     case 3:\n' + 
'      var $9 = HEAP[$0];\n' + 
'      HEAP[$retval] = $9;\n' + 
'      __label__ = 4;\n' + 
'      break;\n' + 
'     case 4:\n' + 
'      var $retval3 = HEAP[$retval];\n' + 
'      STACKTOP = __stackBase__;\n' + 
'      return $retval3;\n' + 
'     default:\n' + 
'      assert(0, "bad label: " + __label__);\n' + 
'    }\n' + 
'  }\n' + 
'  function _initbifrost() {\n' + 
'    var __label__;\n' + 
'    __label__ = -1;\n' + 
'    while (1) switch (__label__) {\n' + 
'     case -1:\n' + 
'      var $0 = _Py_InitModule4(__str4, _BifrostMethods, 0, 0, 1013);\n' + 
'      __label__ = 1;\n' + 
'      break;\n' + 
'     case 1:\n' + 
'      return;\n' + 
'     default:\n' + 
'      assert(0, "bad label: " + __label__);\n' + 
'    }\n' + 
'  }\n' + 
'  Module["_initbifrost"] = _initbifrost;\n' + 
'  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _run, 0 ]);\n' + 
'  function run(args) {\n' + 
'    __str = allocate([ 115, 0 ], "i8", ALLOC_NORMAL);\n' + 
'    __str1 = allocate([ 82, 117, 110, 110, 105, 110, 103, 58, 32, 37, 115, 10, 0 ], "i8", ALLOC_NORMAL);\n' + 
'    _BifrostMethods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_NORMAL);\n' + 
'    __str2 = allocate([ 114, 117, 110, 0 ], "i8", ALLOC_NORMAL);\n' + 
'    __str3 = allocate([ 82, 117, 110, 32, 106, 97, 118, 97, 115, 99, 114, 105, 112, 116, 32, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);\n' + 
'    __str4 = allocate([ 98, 105, 102, 114, 111, 115, 116, 0 ], "i8", ALLOC_NORMAL);\n' + 
'    HEAP[_BifrostMethods] = __str2;\n' + 
'    HEAP[_BifrostMethods + 4] = FUNCTION_TABLE_OFFSET + 2;\n' + 
'    HEAP[_BifrostMethods + 12] = __str3;\n' + 
'    __globalConstructor__();\n' + 
'  }\n' + 
'  Module["run"] = run;\n' + 
'  run();\n' + 
'  return Module;\n' + 
'});'
Module.core['./lib/python2.7/encodings/aliases.py'] = '""" Encoding Aliases Support\n' + 
'\n' + 
'    This module is used by the encodings package search function to\n' + 
'    map encodings names to module names.\n' + 
'\n' + 
'    Note that the search function normalizes the encoding names before\n' + 
'    doing the lookup, so the mapping will have to map normalized\n' + 
'    encoding names to module names.\n' + 
'\n' + 
'    Contents:\n' + 
'\n' + 
'        The following aliases dictionary contains mappings of all IANA\n' + 
'        character set names for which the Python core library provides\n' + 
'        codecs. In addition to these, a few Python specific codec\n' + 
'        aliases have also been added.\n' + 
'\n' + 
'"""\n' + 
'aliases = {\n' + 
'\n' + 
'    # Please keep this list sorted alphabetically by value !\n' + 
'\n' + 
'    # ascii codec\n' + 
'    \'646\'                : \'ascii\',\n' + 
'    \'ansi_x3.4_1968\'     : \'ascii\',\n' + 
'    \'ansi_x3_4_1968\'     : \'ascii\', # some email headers use this non-standard name\n' + 
'    \'ansi_x3.4_1986\'     : \'ascii\',\n' + 
'    \'cp367\'              : \'ascii\',\n' + 
'    \'csascii\'            : \'ascii\',\n' + 
'    \'ibm367\'             : \'ascii\',\n' + 
'    \'iso646_us\'          : \'ascii\',\n' + 
'    \'iso_646.irv_1991\'   : \'ascii\',\n' + 
'    \'iso_ir_6\'           : \'ascii\',\n' + 
'    \'us\'                 : \'ascii\',\n' + 
'    \'us_ascii\'           : \'ascii\',\n' + 
'\n' + 
'    # base64_codec codec\n' + 
'    \'base64\'             : \'base64_codec\',\n' + 
'    \'base_64\'            : \'base64_codec\',\n' + 
'\n' + 
'    # big5 codec\n' + 
'    \'big5_tw\'            : \'big5\',\n' + 
'    \'csbig5\'             : \'big5\',\n' + 
'\n' + 
'    # big5hkscs codec\n' + 
'    \'big5_hkscs\'         : \'big5hkscs\',\n' + 
'    \'hkscs\'              : \'big5hkscs\',\n' + 
'\n' + 
'    # bz2_codec codec\n' + 
'    \'bz2\'                : \'bz2_codec\',\n' + 
'\n' + 
'    # cp037 codec\n' + 
'    \'037\'                : \'cp037\',\n' + 
'    \'csibm037\'           : \'cp037\',\n' + 
'    \'ebcdic_cp_ca\'       : \'cp037\',\n' + 
'    \'ebcdic_cp_nl\'       : \'cp037\',\n' + 
'    \'ebcdic_cp_us\'       : \'cp037\',\n' + 
'    \'ebcdic_cp_wt\'       : \'cp037\',\n' + 
'    \'ibm037\'             : \'cp037\',\n' + 
'    \'ibm039\'             : \'cp037\',\n' + 
'\n' + 
'    # cp1026 codec\n' + 
'    \'1026\'               : \'cp1026\',\n' + 
'    \'csibm1026\'          : \'cp1026\',\n' + 
'    \'ibm1026\'            : \'cp1026\',\n' + 
'\n' + 
'    # cp1140 codec\n' + 
'    \'1140\'               : \'cp1140\',\n' + 
'    \'ibm1140\'            : \'cp1140\',\n' + 
'\n' + 
'    # cp1250 codec\n' + 
'    \'1250\'               : \'cp1250\',\n' + 
'    \'windows_1250\'       : \'cp1250\',\n' + 
'\n' + 
'    # cp1251 codec\n' + 
'    \'1251\'               : \'cp1251\',\n' + 
'    \'windows_1251\'       : \'cp1251\',\n' + 
'\n' + 
'    # cp1252 codec\n' + 
'    \'1252\'               : \'cp1252\',\n' + 
'    \'windows_1252\'       : \'cp1252\',\n' + 
'\n' + 
'    # cp1253 codec\n' + 
'    \'1253\'               : \'cp1253\',\n' + 
'    \'windows_1253\'       : \'cp1253\',\n' + 
'\n' + 
'    # cp1254 codec\n' + 
'    \'1254\'               : \'cp1254\',\n' + 
'    \'windows_1254\'       : \'cp1254\',\n' + 
'\n' + 
'    # cp1255 codec\n' + 
'    \'1255\'               : \'cp1255\',\n' + 
'    \'windows_1255\'       : \'cp1255\',\n' + 
'\n' + 
'    # cp1256 codec\n' + 
'    \'1256\'               : \'cp1256\',\n' + 
'    \'windows_1256\'       : \'cp1256\',\n' + 
'\n' + 
'    # cp1257 codec\n' + 
'    \'1257\'               : \'cp1257\',\n' + 
'    \'windows_1257\'       : \'cp1257\',\n' + 
'\n' + 
'    # cp1258 codec\n' + 
'    \'1258\'               : \'cp1258\',\n' + 
'    \'windows_1258\'       : \'cp1258\',\n' + 
'\n' + 
'    # cp424 codec\n' + 
'    \'424\'                : \'cp424\',\n' + 
'    \'csibm424\'           : \'cp424\',\n' + 
'    \'ebcdic_cp_he\'       : \'cp424\',\n' + 
'    \'ibm424\'             : \'cp424\',\n' + 
'\n' + 
'    # cp437 codec\n' + 
'    \'437\'                : \'cp437\',\n' + 
'    \'cspc8codepage437\'   : \'cp437\',\n' + 
'    \'ibm437\'             : \'cp437\',\n' + 
'\n' + 
'    # cp500 codec\n' + 
'    \'500\'                : \'cp500\',\n' + 
'    \'csibm500\'           : \'cp500\',\n' + 
'    \'ebcdic_cp_be\'       : \'cp500\',\n' + 
'    \'ebcdic_cp_ch\'       : \'cp500\',\n' + 
'    \'ibm500\'             : \'cp500\',\n' + 
'\n' + 
'    # cp775 codec\n' + 
'    \'775\'                : \'cp775\',\n' + 
'    \'cspc775baltic\'      : \'cp775\',\n' + 
'    \'ibm775\'             : \'cp775\',\n' + 
'\n' + 
'    # cp850 codec\n' + 
'    \'850\'                : \'cp850\',\n' + 
'    \'cspc850multilingual\' : \'cp850\',\n' + 
'    \'ibm850\'             : \'cp850\',\n' + 
'\n' + 
'    # cp852 codec\n' + 
'    \'852\'                : \'cp852\',\n' + 
'    \'cspcp852\'           : \'cp852\',\n' + 
'    \'ibm852\'             : \'cp852\',\n' + 
'\n' + 
'    # cp855 codec\n' + 
'    \'855\'                : \'cp855\',\n' + 
'    \'csibm855\'           : \'cp855\',\n' + 
'    \'ibm855\'             : \'cp855\',\n' + 
'\n' + 
'    # cp857 codec\n' + 
'    \'857\'                : \'cp857\',\n' + 
'    \'csibm857\'           : \'cp857\',\n' + 
'    \'ibm857\'             : \'cp857\',\n' + 
'\n' + 
'    # cp858 codec\n' + 
'    \'858\'                : \'cp858\',\n' + 
'    \'csibm858\'           : \'cp858\',\n' + 
'    \'ibm858\'             : \'cp858\',\n' + 
'\n' + 
'    # cp860 codec\n' + 
'    \'860\'                : \'cp860\',\n' + 
'    \'csibm860\'           : \'cp860\',\n' + 
'    \'ibm860\'             : \'cp860\',\n' + 
'\n' + 
'    # cp861 codec\n' + 
'    \'861\'                : \'cp861\',\n' + 
'    \'cp_is\'              : \'cp861\',\n' + 
'    \'csibm861\'           : \'cp861\',\n' + 
'    \'ibm861\'             : \'cp861\',\n' + 
'\n' + 
'    # cp862 codec\n' + 
'    \'862\'                : \'cp862\',\n' + 
'    \'cspc862latinhebrew\' : \'cp862\',\n' + 
'    \'ibm862\'             : \'cp862\',\n' + 
'\n' + 
'    # cp863 codec\n' + 
'    \'863\'                : \'cp863\',\n' + 
'    \'csibm863\'           : \'cp863\',\n' + 
'    \'ibm863\'             : \'cp863\',\n' + 
'\n' + 
'    # cp864 codec\n' + 
'    \'864\'                : \'cp864\',\n' + 
'    \'csibm864\'           : \'cp864\',\n' + 
'    \'ibm864\'             : \'cp864\',\n' + 
'\n' + 
'    # cp865 codec\n' + 
'    \'865\'                : \'cp865\',\n' + 
'    \'csibm865\'           : \'cp865\',\n' + 
'    \'ibm865\'             : \'cp865\',\n' + 
'\n' + 
'    # cp866 codec\n' + 
'    \'866\'                : \'cp866\',\n' + 
'    \'csibm866\'           : \'cp866\',\n' + 
'    \'ibm866\'             : \'cp866\',\n' + 
'\n' + 
'    # cp869 codec\n' + 
'    \'869\'                : \'cp869\',\n' + 
'    \'cp_gr\'              : \'cp869\',\n' + 
'    \'csibm869\'           : \'cp869\',\n' + 
'    \'ibm869\'             : \'cp869\',\n' + 
'\n' + 
'    # cp932 codec\n' + 
'    \'932\'                : \'cp932\',\n' + 
'    \'ms932\'              : \'cp932\',\n' + 
'    \'mskanji\'            : \'cp932\',\n' + 
'    \'ms_kanji\'           : \'cp932\',\n' + 
'\n' + 
'    # cp949 codec\n' + 
'    \'949\'                : \'cp949\',\n' + 
'    \'ms949\'              : \'cp949\',\n' + 
'    \'uhc\'                : \'cp949\',\n' + 
'\n' + 
'    # cp950 codec\n' + 
'    \'950\'                : \'cp950\',\n' + 
'    \'ms950\'              : \'cp950\',\n' + 
'\n' + 
'    # euc_jis_2004 codec\n' + 
'    \'jisx0213\'           : \'euc_jis_2004\',\n' + 
'    \'eucjis2004\'         : \'euc_jis_2004\',\n' + 
'    \'euc_jis2004\'        : \'euc_jis_2004\',\n' + 
'\n' + 
'    # euc_jisx0213 codec\n' + 
'    \'eucjisx0213\'        : \'euc_jisx0213\',\n' + 
'\n' + 
'    # euc_jp codec\n' + 
'    \'eucjp\'              : \'euc_jp\',\n' + 
'    \'ujis\'               : \'euc_jp\',\n' + 
'    \'u_jis\'              : \'euc_jp\',\n' + 
'\n' + 
'    # euc_kr codec\n' + 
'    \'euckr\'              : \'euc_kr\',\n' + 
'    \'korean\'             : \'euc_kr\',\n' + 
'    \'ksc5601\'            : \'euc_kr\',\n' + 
'    \'ks_c_5601\'          : \'euc_kr\',\n' + 
'    \'ks_c_5601_1987\'     : \'euc_kr\',\n' + 
'    \'ksx1001\'            : \'euc_kr\',\n' + 
'    \'ks_x_1001\'          : \'euc_kr\',\n' + 
'\n' + 
'    # gb18030 codec\n' + 
'    \'gb18030_2000\'       : \'gb18030\',\n' + 
'\n' + 
'    # gb2312 codec\n' + 
'    \'chinese\'            : \'gb2312\',\n' + 
'    \'csiso58gb231280\'    : \'gb2312\',\n' + 
'    \'euc_cn\'             : \'gb2312\',\n' + 
'    \'euccn\'              : \'gb2312\',\n' + 
'    \'eucgb2312_cn\'       : \'gb2312\',\n' + 
'    \'gb2312_1980\'        : \'gb2312\',\n' + 
'    \'gb2312_80\'          : \'gb2312\',\n' + 
'    \'iso_ir_58\'          : \'gb2312\',\n' + 
'\n' + 
'    # gbk codec\n' + 
'    \'936\'                : \'gbk\',\n' + 
'    \'cp936\'              : \'gbk\',\n' + 
'    \'ms936\'              : \'gbk\',\n' + 
'\n' + 
'    # hex_codec codec\n' + 
'    \'hex\'                : \'hex_codec\',\n' + 
'\n' + 
'    # hp_roman8 codec\n' + 
'    \'roman8\'             : \'hp_roman8\',\n' + 
'    \'r8\'                 : \'hp_roman8\',\n' + 
'    \'csHPRoman8\'         : \'hp_roman8\',\n' + 
'\n' + 
'    # hz codec\n' + 
'    \'hzgb\'               : \'hz\',\n' + 
'    \'hz_gb\'              : \'hz\',\n' + 
'    \'hz_gb_2312\'         : \'hz\',\n' + 
'\n' + 
'    # iso2022_jp codec\n' + 
'    \'csiso2022jp\'        : \'iso2022_jp\',\n' + 
'    \'iso2022jp\'          : \'iso2022_jp\',\n' + 
'    \'iso_2022_jp\'        : \'iso2022_jp\',\n' + 
'\n' + 
'    # iso2022_jp_1 codec\n' + 
'    \'iso2022jp_1\'        : \'iso2022_jp_1\',\n' + 
'    \'iso_2022_jp_1\'      : \'iso2022_jp_1\',\n' + 
'\n' + 
'    # iso2022_jp_2 codec\n' + 
'    \'iso2022jp_2\'        : \'iso2022_jp_2\',\n' + 
'    \'iso_2022_jp_2\'      : \'iso2022_jp_2\',\n' + 
'\n' + 
'    # iso2022_jp_2004 codec\n' + 
'    \'iso_2022_jp_2004\'   : \'iso2022_jp_2004\',\n' + 
'    \'iso2022jp_2004\'     : \'iso2022_jp_2004\',\n' + 
'\n' + 
'    # iso2022_jp_3 codec\n' + 
'    \'iso2022jp_3\'        : \'iso2022_jp_3\',\n' + 
'    \'iso_2022_jp_3\'      : \'iso2022_jp_3\',\n' + 
'\n' + 
'    # iso2022_jp_ext codec\n' + 
'    \'iso2022jp_ext\'      : \'iso2022_jp_ext\',\n' + 
'    \'iso_2022_jp_ext\'    : \'iso2022_jp_ext\',\n' + 
'\n' + 
'    # iso2022_kr codec\n' + 
'    \'csiso2022kr\'        : \'iso2022_kr\',\n' + 
'    \'iso2022kr\'          : \'iso2022_kr\',\n' + 
'    \'iso_2022_kr\'        : \'iso2022_kr\',\n' + 
'\n' + 
'    # iso8859_10 codec\n' + 
'    \'csisolatin6\'        : \'iso8859_10\',\n' + 
'    \'iso_8859_10\'        : \'iso8859_10\',\n' + 
'    \'iso_8859_10_1992\'   : \'iso8859_10\',\n' + 
'    \'iso_ir_157\'         : \'iso8859_10\',\n' + 
'    \'l6\'                 : \'iso8859_10\',\n' + 
'    \'latin6\'             : \'iso8859_10\',\n' + 
'\n' + 
'    # iso8859_11 codec\n' + 
'    \'thai\'               : \'iso8859_11\',\n' + 
'    \'iso_8859_11\'        : \'iso8859_11\',\n' + 
'    \'iso_8859_11_2001\'   : \'iso8859_11\',\n' + 
'\n' + 
'    # iso8859_13 codec\n' + 
'    \'iso_8859_13\'        : \'iso8859_13\',\n' + 
'    \'l7\'                 : \'iso8859_13\',\n' + 
'    \'latin7\'             : \'iso8859_13\',\n' + 
'\n' + 
'    # iso8859_14 codec\n' + 
'    \'iso_8859_14\'        : \'iso8859_14\',\n' + 
'    \'iso_8859_14_1998\'   : \'iso8859_14\',\n' + 
'    \'iso_celtic\'         : \'iso8859_14\',\n' + 
'    \'iso_ir_199\'         : \'iso8859_14\',\n' + 
'    \'l8\'                 : \'iso8859_14\',\n' + 
'    \'latin8\'             : \'iso8859_14\',\n' + 
'\n' + 
'    # iso8859_15 codec\n' + 
'    \'iso_8859_15\'        : \'iso8859_15\',\n' + 
'    \'l9\'                 : \'iso8859_15\',\n' + 
'    \'latin9\'             : \'iso8859_15\',\n' + 
'\n' + 
'    # iso8859_16 codec\n' + 
'    \'iso_8859_16\'        : \'iso8859_16\',\n' + 
'    \'iso_8859_16_2001\'   : \'iso8859_16\',\n' + 
'    \'iso_ir_226\'         : \'iso8859_16\',\n' + 
'    \'l10\'                : \'iso8859_16\',\n' + 
'    \'latin10\'            : \'iso8859_16\',\n' + 
'\n' + 
'    # iso8859_2 codec\n' + 
'    \'csisolatin2\'        : \'iso8859_2\',\n' + 
'    \'iso_8859_2\'         : \'iso8859_2\',\n' + 
'    \'iso_8859_2_1987\'    : \'iso8859_2\',\n' + 
'    \'iso_ir_101\'         : \'iso8859_2\',\n' + 
'    \'l2\'                 : \'iso8859_2\',\n' + 
'    \'latin2\'             : \'iso8859_2\',\n' + 
'\n' + 
'    # iso8859_3 codec\n' + 
'    \'csisolatin3\'        : \'iso8859_3\',\n' + 
'    \'iso_8859_3\'         : \'iso8859_3\',\n' + 
'    \'iso_8859_3_1988\'    : \'iso8859_3\',\n' + 
'    \'iso_ir_109\'         : \'iso8859_3\',\n' + 
'    \'l3\'                 : \'iso8859_3\',\n' + 
'    \'latin3\'             : \'iso8859_3\',\n' + 
'\n' + 
'    # iso8859_4 codec\n' + 
'    \'csisolatin4\'        : \'iso8859_4\',\n' + 
'    \'iso_8859_4\'         : \'iso8859_4\',\n' + 
'    \'iso_8859_4_1988\'    : \'iso8859_4\',\n' + 
'    \'iso_ir_110\'         : \'iso8859_4\',\n' + 
'    \'l4\'                 : \'iso8859_4\',\n' + 
'    \'latin4\'             : \'iso8859_4\',\n' + 
'\n' + 
'    # iso8859_5 codec\n' + 
'    \'csisolatincyrillic\' : \'iso8859_5\',\n' + 
'    \'cyrillic\'           : \'iso8859_5\',\n' + 
'    \'iso_8859_5\'         : \'iso8859_5\',\n' + 
'    \'iso_8859_5_1988\'    : \'iso8859_5\',\n' + 
'    \'iso_ir_144\'         : \'iso8859_5\',\n' + 
'\n' + 
'    # iso8859_6 codec\n' + 
'    \'arabic\'             : \'iso8859_6\',\n' + 
'    \'asmo_708\'           : \'iso8859_6\',\n' + 
'    \'csisolatinarabic\'   : \'iso8859_6\',\n' + 
'    \'ecma_114\'           : \'iso8859_6\',\n' + 
'    \'iso_8859_6\'         : \'iso8859_6\',\n' + 
'    \'iso_8859_6_1987\'    : \'iso8859_6\',\n' + 
'    \'iso_ir_127\'         : \'iso8859_6\',\n' + 
'\n' + 
'    # iso8859_7 codec\n' + 
'    \'csisolatingreek\'    : \'iso8859_7\',\n' + 
'    \'ecma_118\'           : \'iso8859_7\',\n' + 
'    \'elot_928\'           : \'iso8859_7\',\n' + 
'    \'greek\'              : \'iso8859_7\',\n' + 
'    \'greek8\'             : \'iso8859_7\',\n' + 
'    \'iso_8859_7\'         : \'iso8859_7\',\n' + 
'    \'iso_8859_7_1987\'    : \'iso8859_7\',\n' + 
'    \'iso_ir_126\'         : \'iso8859_7\',\n' + 
'\n' + 
'    # iso8859_8 codec\n' + 
'    \'csisolatinhebrew\'   : \'iso8859_8\',\n' + 
'    \'hebrew\'             : \'iso8859_8\',\n' + 
'    \'iso_8859_8\'         : \'iso8859_8\',\n' + 
'    \'iso_8859_8_1988\'    : \'iso8859_8\',\n' + 
'    \'iso_ir_138\'         : \'iso8859_8\',\n' + 
'\n' + 
'    # iso8859_9 codec\n' + 
'    \'csisolatin5\'        : \'iso8859_9\',\n' + 
'    \'iso_8859_9\'         : \'iso8859_9\',\n' + 
'    \'iso_8859_9_1989\'    : \'iso8859_9\',\n' + 
'    \'iso_ir_148\'         : \'iso8859_9\',\n' + 
'    \'l5\'                 : \'iso8859_9\',\n' + 
'    \'latin5\'             : \'iso8859_9\',\n' + 
'\n' + 
'    # johab codec\n' + 
'    \'cp1361\'             : \'johab\',\n' + 
'    \'ms1361\'             : \'johab\',\n' + 
'\n' + 
'    # koi8_r codec\n' + 
'    \'cskoi8r\'            : \'koi8_r\',\n' + 
'\n' + 
'    # latin_1 codec\n' + 
'    #\n' + 
'    # Note that the latin_1 codec is implemented internally in C and a\n' + 
'    # lot faster than the charmap codec iso8859_1 which uses the same\n' + 
'    # encoding. This is why we discourage the use of the iso8859_1\n' + 
'    # codec and alias it to latin_1 instead.\n' + 
'    #\n' + 
'    \'8859\'               : \'latin_1\',\n' + 
'    \'cp819\'              : \'latin_1\',\n' + 
'    \'csisolatin1\'        : \'latin_1\',\n' + 
'    \'ibm819\'             : \'latin_1\',\n' + 
'    \'iso8859\'            : \'latin_1\',\n' + 
'    \'iso8859_1\'          : \'latin_1\',\n' + 
'    \'iso_8859_1\'         : \'latin_1\',\n' + 
'    \'iso_8859_1_1987\'    : \'latin_1\',\n' + 
'    \'iso_ir_100\'         : \'latin_1\',\n' + 
'    \'l1\'                 : \'latin_1\',\n' + 
'    \'latin\'              : \'latin_1\',\n' + 
'    \'latin1\'             : \'latin_1\',\n' + 
'\n' + 
'    # mac_cyrillic codec\n' + 
'    \'maccyrillic\'        : \'mac_cyrillic\',\n' + 
'\n' + 
'    # mac_greek codec\n' + 
'    \'macgreek\'           : \'mac_greek\',\n' + 
'\n' + 
'    # mac_iceland codec\n' + 
'    \'maciceland\'         : \'mac_iceland\',\n' + 
'\n' + 
'    # mac_latin2 codec\n' + 
'    \'maccentraleurope\'   : \'mac_latin2\',\n' + 
'    \'maclatin2\'          : \'mac_latin2\',\n' + 
'\n' + 
'    # mac_roman codec\n' + 
'    \'macroman\'           : \'mac_roman\',\n' + 
'\n' + 
'    # mac_turkish codec\n' + 
'    \'macturkish\'         : \'mac_turkish\',\n' + 
'\n' + 
'    # mbcs codec\n' + 
'    \'dbcs\'               : \'mbcs\',\n' + 
'\n' + 
'    # ptcp154 codec\n' + 
'    \'csptcp154\'          : \'ptcp154\',\n' + 
'    \'pt154\'              : \'ptcp154\',\n' + 
'    \'cp154\'              : \'ptcp154\',\n' + 
'    \'cyrillic_asian\'     : \'ptcp154\',\n' + 
'\n' + 
'    # quopri_codec codec\n' + 
'    \'quopri\'             : \'quopri_codec\',\n' + 
'    \'quoted_printable\'   : \'quopri_codec\',\n' + 
'    \'quotedprintable\'    : \'quopri_codec\',\n' + 
'\n' + 
'    # rot_13 codec\n' + 
'    \'rot13\'              : \'rot_13\',\n' + 
'\n' + 
'    # shift_jis codec\n' + 
'    \'csshiftjis\'         : \'shift_jis\',\n' + 
'    \'shiftjis\'           : \'shift_jis\',\n' + 
'    \'sjis\'               : \'shift_jis\',\n' + 
'    \'s_jis\'              : \'shift_jis\',\n' + 
'\n' + 
'    # shift_jis_2004 codec\n' + 
'    \'shiftjis2004\'       : \'shift_jis_2004\',\n' + 
'    \'sjis_2004\'          : \'shift_jis_2004\',\n' + 
'    \'s_jis_2004\'         : \'shift_jis_2004\',\n' + 
'\n' + 
'    # shift_jisx0213 codec\n' + 
'    \'shiftjisx0213\'      : \'shift_jisx0213\',\n' + 
'    \'sjisx0213\'          : \'shift_jisx0213\',\n' + 
'    \'s_jisx0213\'         : \'shift_jisx0213\',\n' + 
'\n' + 
'    # tactis codec\n' + 
'    \'tis260\'             : \'tactis\',\n' + 
'\n' + 
'    # tis_620 codec\n' + 
'    \'tis620\'             : \'tis_620\',\n' + 
'    \'tis_620_0\'          : \'tis_620\',\n' + 
'    \'tis_620_2529_0\'     : \'tis_620\',\n' + 
'    \'tis_620_2529_1\'     : \'tis_620\',\n' + 
'    \'iso_ir_166\'         : \'tis_620\',\n' + 
'\n' + 
'    # utf_16 codec\n' + 
'    \'u16\'                : \'utf_16\',\n' + 
'    \'utf16\'              : \'utf_16\',\n' + 
'\n' + 
'    # utf_16_be codec\n' + 
'    \'unicodebigunmarked\' : \'utf_16_be\',\n' + 
'    \'utf_16be\'           : \'utf_16_be\',\n' + 
'\n' + 
'    # utf_16_le codec\n' + 
'    \'unicodelittleunmarked\' : \'utf_16_le\',\n' + 
'    \'utf_16le\'           : \'utf_16_le\',\n' + 
'\n' + 
'    # utf_32 codec\n' + 
'    \'u32\'                : \'utf_32\',\n' + 
'    \'utf32\'              : \'utf_32\',\n' + 
'\n' + 
'    # utf_32_be codec\n' + 
'    \'utf_32be\'           : \'utf_32_be\',\n' + 
'\n' + 
'    # utf_32_le codec\n' + 
'    \'utf_32le\'           : \'utf_32_le\',\n' + 
'\n' + 
'    # utf_7 codec\n' + 
'    \'u7\'                 : \'utf_7\',\n' + 
'    \'utf7\'               : \'utf_7\',\n' + 
'    \'unicode_1_1_utf_7\'  : \'utf_7\',\n' + 
'\n' + 
'    # utf_8 codec\n' + 
'    \'u8\'                 : \'utf_8\',\n' + 
'    \'utf\'                : \'utf_8\',\n' + 
'    \'utf8\'               : \'utf_8\',\n' + 
'    \'utf8_ucs2\'          : \'utf_8\',\n' + 
'    \'utf8_ucs4\'          : \'utf_8\',\n' + 
'\n' + 
'    # uu_codec codec\n' + 
'    \'uu\'                 : \'uu_codec\',\n' + 
'\n' + 
'    # zlib_codec codec\n' + 
'    \'zip\'                : \'zlib_codec\',\n' + 
'    \'zlib\'               : \'zlib_codec\',\n' + 
'\n' + 
'}';

