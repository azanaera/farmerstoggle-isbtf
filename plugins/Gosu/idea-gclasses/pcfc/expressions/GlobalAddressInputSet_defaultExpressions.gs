package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/address/GlobalAddressInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GlobalAddressInputSet_defaultExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/address/GlobalAddressInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GlobalAddressInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=AutoFillIcon) at AddressAutoFillWidget.xml: line 7, column 71
    function action_111 () : void {
      gw.api.contact.AddressAutocompleteUtil.autofillAddress(addressOwner.AddressDelegate, "PostalCode")
    }
    
    // 'action' attribute on AddressAutoFillInput (id=PostalCode_Input) at GlobalAddressInputSet.default.pcf: line 139, column 87
    function action_130 () : void {
      gw.api.contact.AddressAutocompleteUtil.autofillAddress(addressOwner.AddressDelegate, "PostalCode")
    }
    
    // 'action' attribute on MenuItem (id=AutoFillIcon) at AddressAutoFillWidget.xml: line 7, column 71
    function action_46 () : void {
      gw.api.contact.AddressAutocompleteUtil.autofillAddress(addressOwner.AddressDelegate, "City")
    }
    
    // 'action' attribute on AddressAutoFillInput (id=City_Input) at GlobalAddressInputSet.default.pcf: line 88, column 81
    function action_63 () : void {
      gw.api.contact.AddressAutocompleteUtil.autofillAddress(addressOwner.AddressDelegate, "City")
    }
    
    // 'autoComplete' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function autoComplete_124 () : gw.api.contact.AutocompleteHandler {
      return pchandler
    }
    
    // 'autoComplete' attribute on AddressAutoFillInput (id=City_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function autoComplete_58 () : gw.api.contact.AutocompleteHandler {
      return cityhandler
    }
    
    // 'autoComplete' attribute on TextInput (id=County_Input) at GlobalAddressInputSet.default.pcf: line 103, column 83
    function autoComplete_85 () : gw.api.contact.AutocompleteHandler {
      return countyhandler
    }
    
    // 'available' attribute on TypeKeyInput (id=Country_Input) at GlobalAddressInputSet.default.pcf: line 46, column 84
    function available_10 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.COUNTRY)
    }
    
    // 'available' attribute on AddressAutoFillInput (id=PostalCode_Input) at GlobalAddressInputSet.default.pcf: line 139, column 87
    function available_126 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.POSTALCODE)
    }
    
    // 'available' attribute on TextInput (id=AddressLine1_Input) at GlobalAddressInputSet.default.pcf: line 57, column 90
    function available_21 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.ADDRESSLINE1)
    }
    
    // 'available' attribute on TextInput (id=AddressLine2_Input) at GlobalAddressInputSet.default.pcf: line 65, column 90
    function available_34 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.ADDRESSLINE2)
    }
    
    // 'available' attribute on AddressAutoFillInput (id=City_Input) at GlobalAddressInputSet.default.pcf: line 88, column 81
    function available_59 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.CITY)
    }
    
    // 'available' attribute on TextInput (id=County_Input) at GlobalAddressInputSet.default.pcf: line 103, column 83
    function available_77 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.COUNTY)
    }
    
    // 'available' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.default.pcf: line 119, column 82
    function available_92 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.STATE)
    }
    
    // 'value' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function defaultSetter_122 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.AddressDelegate.PostalCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Country_Input) at GlobalAddressInputSet.default.pcf: line 46, column 84
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.SelectedCountry = (__VALUE_TO_SET as typekey.Country)
    }
    
    // 'value' attribute on TextInput (id=AddressLine1_Input) at GlobalAddressInputSet.default.pcf: line 57, column 90
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.AddressDelegate.AddressLine1 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=AddressLine2_Input) at GlobalAddressInputSet.default.pcf: line 65, column 90
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.AddressDelegate.AddressLine2 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on AddressAutoFillInput (id=City_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.AddressDelegate.City = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=County_Input) at GlobalAddressInputSet.default.pcf: line 103, column 83
    function defaultSetter_83 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.AddressDelegate.County = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.default.pcf: line 119, column 82
    function defaultSetter_99 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.AddressDelegate.State = (__VALUE_TO_SET as typekey.State)
    }
    
    // 'editable' attribute on TypeKeyInput (id=Country_Input) at GlobalAddressInputSet.default.pcf: line 46, column 84
    function editable_11 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.COUNTRY)
    }
    
    // 'editable' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function editable_114 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.POSTALCODE)
    }
    
    // 'editable' attribute on TextInput (id=AddressLine1_Input) at GlobalAddressInputSet.default.pcf: line 57, column 90
    function editable_22 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.ADDRESSLINE1)
    }
    
    // 'editable' attribute on TextInput (id=AddressLine2_Input) at GlobalAddressInputSet.default.pcf: line 65, column 90
    function editable_35 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.ADDRESSLINE2)
    }
    
    // 'editable' attribute on AddressAutoFillInput (id=City_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function editable_49 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.CITY)
    }
    
    // 'editable' attribute on TextInput (id=County_Input) at GlobalAddressInputSet.default.pcf: line 103, column 83
    function editable_78 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.COUNTY)
    }
    
    // 'editable' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.default.pcf: line 119, column 82
    function editable_93 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.STATE)
    }
    
    // 'initialValue' attribute on Variable at GlobalAddressInputSet.default.pcf: line 14, column 50
    function initialValue_0 () : gw.api.contact.AutocompleteHandler {
      return gw.api.contact.AddressAutocompleteHandler.createHandler("City","City,County,State,PostalCode,Country",true)
    }
    
    // 'initialValue' attribute on Variable at GlobalAddressInputSet.default.pcf: line 18, column 50
    function initialValue_1 () : gw.api.contact.AutocompleteHandler {
      return gw.api.contact.AddressAutocompleteHandler.createHandler("County","City,County,State,PostalCode,Country",true)
    }
    
    // 'initialValue' attribute on Variable at GlobalAddressInputSet.default.pcf: line 22, column 50
    function initialValue_2 () : gw.api.contact.AutocompleteHandler {
      return gw.api.contact.AddressAutocompleteHandler.createHandler("PostalCode","City,County,State,PostalCode,Country",true)
    }
    
    // 'initialValue' attribute on Variable at GlobalAddressInputSet.default.pcf: line 29, column 33
    function initialValue_3 () : java.lang.Integer {
      if (addressOwner != null) addressOwner.InEditMode = CurrentLocation.InEditMode; return 0
    }
    
    // 'inputConversion' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function inputConversion_119 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.address.PostalCodeInputFormatter.convertPostalCode(VALUE, addressOwner.SelectedCountry)
    }
    
    // 'inputMask' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function inputMask_125 () : java.lang.String {
      return gw.api.contact.AddressAutocompleteUtil.getInputMask(addressOwner.AddressDelegate, "PostalCode")
    }
    
    // 'label' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function label_117 () : java.lang.Object {
      return gw.api.address.AddressCountrySettings.getSettings(addressOwner.SelectedCountry).PostalCodeLabel
    }
    
    // 'label' attribute on TextInput (id=AddressLine1_Input) at GlobalAddressInputSet.default.pcf: line 57, column 90
    function label_24 () : java.lang.Object {
      return addressOwner.AddressLine1Label
    }
    
    // 'label' attribute on MenuItem (id=AutoFillIcon) at AddressAutoFillWidget.xml: line 7, column 71
    function label_47 () : java.lang.Object {
      return addressOwner.AutofillIconEnabled ? DisplayKey.get("AutoFill.Override") : ""
    }
    
    // 'label' attribute on TextInput (id=AddressSummary_Input) at GlobalAddressInputSet.default.pcf: line 34, column 50
    function label_5 () : java.lang.Object {
      return addressOwner.AddressNameLabel
    }
    
    // 'label' attribute on AddressAutoFillInput (id=City_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function label_52 () : java.lang.Object {
      return gw.api.address.AddressCountrySettings.getSettings(addressOwner.SelectedCountry).CityLabel
    }
    
    // 'label' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.default.pcf: line 119, column 82
    function label_96 () : java.lang.Object {
      return gw.api.address.AddressCountrySettings.getSettings(addressOwner.SelectedCountry).StateLabel
    }
    
    // 'onChange' attribute on AddressAutoFillInput (id=PostalCode_Input) at GlobalAddressInputSet.default.pcf: line 142, column 171
    function onChange_113 () : void {
      if (addressOwner.AutofillEnabled) gw.api.contact.AddressAutocompleteUtil.autofillAddress(addressOwner.AddressDelegate, "PostalCode", false)
    }
    
    // 'onChange' attribute on AddressAutoFillInput (id=City_Input) at GlobalAddressInputSet.default.pcf: line 91, column 165
    function onChange_48 () : void {
      if (addressOwner.AutofillEnabled) gw.api.contact.AddressAutocompleteUtil.autofillAddress(addressOwner.AddressDelegate, "City", false)
    }
    
    // 'onChange' attribute on PostOnChange at GlobalAddressInputSet.default.pcf: line 106, column 167
    function onChange_76 () : void {
      if (addressOwner.AutofillEnabled) gw.api.contact.AddressAutocompleteUtil.autofillAddress(addressOwner.AddressDelegate, "County", false)
    }
    
    // 'onChange' attribute on PostOnChange at GlobalAddressInputSet.default.pcf: line 122, column 166
    function onChange_91 () : void {
      if (addressOwner.AutofillEnabled) gw.api.contact.AddressAutocompleteUtil.autofillAddress(addressOwner.AddressDelegate, "State", false)
    }
    
    // 'required' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function required_120 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.AddressOwnerFieldId.POSTALCODE)
    }
    
    // 'required' attribute on TypeKeyInput (id=Country_Input) at GlobalAddressInputSet.default.pcf: line 46, column 84
    function required_13 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.AddressOwnerFieldId.COUNTRY)
    }
    
    // 'required' attribute on TextInput (id=AddressLine1_Input) at GlobalAddressInputSet.default.pcf: line 57, column 90
    function required_25 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.AddressOwnerFieldId.ADDRESSLINE1)
    }
    
    // 'required' attribute on TextInput (id=AddressLine2_Input) at GlobalAddressInputSet.default.pcf: line 65, column 90
    function required_37 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.AddressOwnerFieldId.ADDRESSLINE2)
    }
    
    // 'required' attribute on AddressAutoFillInput (id=City_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function required_54 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.AddressOwnerFieldId.CITY)
    }
    
    // 'required' attribute on TextInput (id=County_Input) at GlobalAddressInputSet.default.pcf: line 103, column 83
    function required_81 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.AddressOwnerFieldId.COUNTY)
    }
    
    // 'required' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.default.pcf: line 119, column 82
    function required_97 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.AddressOwnerFieldId.STATE)
    }
    
    // 'tooltip' attribute on AddressAutoFillInput (id=City_Input) at GlobalAddressInputSet.default.pcf: line 88, column 81
    function tooltip_65 () : java.lang.String {
      return addressOwner.AutofillIconEnabled ? DisplayKey.get("AutoFill.Override") : ""
    }
    
    // 'validationExpression' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function validationExpression_115 () : java.lang.Object {
      return gw.api.contact.AddressAutocompleteUtil.validate(addressOwner.AddressDelegate, "PostalCode", gw.api.address.AddressCountrySettings.getSettings(addressOwner.SelectedCountry).PostalCodeLabel)
    }
    
    // 'validationExpression' attribute on AddressAutoFillInput (id=City_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function validationExpression_50 () : java.lang.Object {
      return gw.api.contact.AddressAutocompleteUtil.validate(addressOwner.AddressDelegate, "City")
    }
    
    // 'validationExpression' attribute on TextInput (id=County_Input) at GlobalAddressInputSet.default.pcf: line 103, column 83
    function validationExpression_79 () : java.lang.Object {
      return gw.api.contact.AddressAutocompleteUtil.validate(addressOwner.AddressDelegate, "County")
    }
    
    // 'validationExpression' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.default.pcf: line 119, column 82
    function validationExpression_94 () : java.lang.Object {
      return gw.api.contact.AddressAutocompleteUtil.validate(addressOwner.AddressDelegate, "State")
    }
    
    // 'valueRange' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.default.pcf: line 119, column 82
    function valueRange_101 () : java.lang.Object {
      return gw.api.contact.AddressAutocompleteUtil.getStates(addressOwner.AddressDelegate.Country)
    }
    
    // 'value' attribute on TypeKeyInput (id=Country_Input) at GlobalAddressInputSet.default.pcf: line 46, column 84
    function valueRoot_16 () : java.lang.Object {
      return addressOwner
    }
    
    // 'value' attribute on TextInput (id=AddressLine1_Input) at GlobalAddressInputSet.default.pcf: line 57, column 90
    function valueRoot_28 () : java.lang.Object {
      return addressOwner.AddressDelegate
    }
    
    // 'value' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function value_121 () : java.lang.String {
      return addressOwner.AddressDelegate.PostalCode
    }
    
    // 'value' attribute on TypeKeyInput (id=Country_Input) at GlobalAddressInputSet.default.pcf: line 46, column 84
    function value_14 () : typekey.Country {
      return addressOwner.SelectedCountry
    }
    
    // 'value' attribute on TextInput (id=AddressLine1_Input) at GlobalAddressInputSet.default.pcf: line 57, column 90
    function value_26 () : java.lang.String {
      return addressOwner.AddressDelegate.AddressLine1
    }
    
    // 'value' attribute on TextInput (id=AddressLine2_Input) at GlobalAddressInputSet.default.pcf: line 65, column 90
    function value_38 () : java.lang.String {
      return addressOwner.AddressDelegate.AddressLine2
    }
    
    // 'value' attribute on AddressAutoFillInput (id=City_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function value_55 () : java.lang.String {
      return addressOwner.AddressDelegate.City
    }
    
    // 'value' attribute on TextInput (id=AddressSummary_Input) at GlobalAddressInputSet.default.pcf: line 34, column 50
    function value_6 () : java.lang.String {
      return new gw.api.address.AddressFormatter().format(addressOwner.AddressDelegate, "\n")
    }
    
    // 'value' attribute on TextInput (id=County_Input) at GlobalAddressInputSet.default.pcf: line 103, column 83
    function value_82 () : java.lang.String {
      return addressOwner.AddressDelegate.County
    }
    
    // 'value' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.default.pcf: line 119, column 82
    function value_98 () : typekey.State {
      return addressOwner.AddressDelegate.State
    }
    
    // 'valueRange' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.default.pcf: line 119, column 82
    function verifyValueRangeIsAllowedType_102 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.default.pcf: line 119, column 82
    function verifyValueRangeIsAllowedType_102 ($$arg :  typekey.State[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.default.pcf: line 119, column 82
    function verifyValueRange_103 () : void {
      var __valueRangeArg = gw.api.contact.AddressAutocompleteUtil.getStates(addressOwner.AddressDelegate.Country)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_102(__valueRangeArg)
    }
    
    // 'visible' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function visible_116 () : java.lang.Boolean {
      return addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.POSTALCODE)
    }
    
    // 'visible' attribute on TypeKeyInput (id=Country_Input) at GlobalAddressInputSet.default.pcf: line 46, column 84
    function visible_12 () : java.lang.Boolean {
      return addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.COUNTRY)
    }
    
    // 'visible' attribute on TextInput (id=AddressLine1_Input) at GlobalAddressInputSet.default.pcf: line 57, column 90
    function visible_23 () : java.lang.Boolean {
      return addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.ADDRESSLINE1)
    }
    
    // 'visible' attribute on TextInput (id=AddressLine2_Input) at GlobalAddressInputSet.default.pcf: line 65, column 90
    function visible_36 () : java.lang.Boolean {
      return addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.ADDRESSLINE2)
    }
    
    // 'visible' attribute on TextInput (id=AddressSummary_Input) at GlobalAddressInputSet.default.pcf: line 34, column 50
    function visible_4 () : java.lang.Boolean {
      return addressOwner.ShowAddressSummary
    }
    
    // 'visible' attribute on MenuItem (id=AutoFillIcon) at AddressAutoFillWidget.xml: line 7, column 71
    function visible_45 () : java.lang.Boolean {
      return addressOwner.AutofillIconEnabled
    }
    
    // 'visible' attribute on AddressAutoFillInput (id=City_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function visible_51 () : java.lang.Boolean {
      return addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.CITY)
    }
    
    // 'visible' attribute on TextInput (id=County_Input) at GlobalAddressInputSet.default.pcf: line 103, column 83
    function visible_80 () : java.lang.Boolean {
      return addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.COUNTY)
    }
    
    // 'visible' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.default.pcf: line 119, column 82
    function visible_95 () : java.lang.Boolean {
      return addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.STATE)
    }
    
    property get addressOwner () : gw.api.address.AddressOwner {
      return getRequireValue("addressOwner", 0) as gw.api.address.AddressOwner
    }
    
    property set addressOwner ($arg :  gw.api.address.AddressOwner) {
      setRequireValue("addressOwner", 0, $arg)
    }
    
    property get cityhandler () : gw.api.contact.AutocompleteHandler {
      return getVariableValue("cityhandler", 0) as gw.api.contact.AutocompleteHandler
    }
    
    property set cityhandler ($arg :  gw.api.contact.AutocompleteHandler) {
      setVariableValue("cityhandler", 0, $arg)
    }
    
    property get countyhandler () : gw.api.contact.AutocompleteHandler {
      return getVariableValue("countyhandler", 0) as gw.api.contact.AutocompleteHandler
    }
    
    property set countyhandler ($arg :  gw.api.contact.AutocompleteHandler) {
      setVariableValue("countyhandler", 0, $arg)
    }
    
    property get pchandler () : gw.api.contact.AutocompleteHandler {
      return getVariableValue("pchandler", 0) as gw.api.contact.AutocompleteHandler
    }
    
    property set pchandler ($arg :  gw.api.contact.AutocompleteHandler) {
      setVariableValue("pchandler", 0, $arg)
    }
    
    property get saveEditMode () : java.lang.Integer {
      return getVariableValue("saveEditMode", 0) as java.lang.Integer
    }
    
    property set saveEditMode ($arg :  java.lang.Integer) {
      setVariableValue("saveEditMode", 0, $arg)
    }
    
    
  }
  
  
}