package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/lossdetails/EditableWitnessesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditableWitnessesLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/lossdetails/EditableWitnessesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditableWitnessesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on ClaimContactCell (id=Contact_Cell) at EditableWitnessesLV.pcf: line 38, column 122
    function sortValue_0 (ClaimContactRole :  entity.ClaimContactRole) : java.lang.Object {
      return ClaimContactRole.Contact
    }
    
    // 'value' attribute on TypeKeyCell (id=EditableWitnesses_WitnessStatementInd_Cell) at EditableWitnessesLV.pcf: line 45, column 38
    function sortValue_1 (ClaimContactRole :  entity.ClaimContactRole) : java.lang.Object {
      return ClaimContactRole.WitnessStatementInd
    }
    
    // 'value' attribute on TypeKeyCell (id=EditableWitnesses_WitnessPosition_Cell) at EditableWitnessesLV.pcf: line 53, column 113
    function sortValue_2 (ClaimContactRole :  entity.ClaimContactRole) : java.lang.Object {
      return ClaimContactRole.WitnessPosition
    }
    
    // 'value' attribute on TextCell (id=EditableWitnesses_WitnessPerspective_Cell) at EditableWitnessesLV.pcf: line 59, column 56
    function sortValue_4 (ClaimContactRole :  entity.ClaimContactRole) : java.lang.Object {
      return ClaimContactRole.WitnessPerspective
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at EditableWitnessesLV.pcf: line 27, column 45
    function toCreateAndAdd_37 () : entity.ClaimContactRole {
      return ClaimContactRoleOwner.addEmptyRole(role)
    }
    
    // 'toRemove' attribute on RowIterator at EditableWitnessesLV.pcf: line 27, column 45
    function toRemove_38 (ClaimContactRole :  entity.ClaimContactRole) : void {
      ClaimContactRoleOwner.removeRole(ClaimContactRole)
    }
    
    // 'value' attribute on RowIterator at EditableWitnessesLV.pcf: line 27, column 45
    function value_39 () : entity.ClaimContactRole[] {
      return ClaimContactRoleList
    }
    
    // 'visible' attribute on TypeKeyCell (id=EditableWitnesses_WitnessPosition_Cell) at EditableWitnessesLV.pcf: line 53, column 113
    function visible_3 () : java.lang.Boolean {
      return not gw.config.LOBAbstraction.ForClaim.ForLOB.isHomeownersLine(ClaimContactRoleOwner.Claim)
    }
    
    property get ClaimContactRoleList () : ClaimContactRole[] {
      return getRequireValue("ClaimContactRoleList", 0) as ClaimContactRole[]
    }
    
    property set ClaimContactRoleList ($arg :  ClaimContactRole[]) {
      setRequireValue("ClaimContactRoleList", 0, $arg)
    }
    
    property get ClaimContactRoleOwner () : gw.api.contact.ClaimContactRoleOwner {
      return getRequireValue("ClaimContactRoleOwner", 0) as gw.api.contact.ClaimContactRoleOwner
    }
    
    property set ClaimContactRoleOwner ($arg :  gw.api.contact.ClaimContactRoleOwner) {
      setRequireValue("ClaimContactRoleOwner", 0, $arg)
    }
    
    property get role () : ContactRole {
      return getRequireValue("role", 0) as ContactRole
    }
    
    property set role ($arg :  ContactRole) {
      setRequireValue("role", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/lossdetails/EditableWitnessesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EditableWitnessesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 18, column 285
    function action_11 () : void {
      if (ClaimContactRole.Contact != null) { ClaimContactDetailPopup.push(ClaimContactRole.Contact, ClaimContactRoleOwner.getClaim(), false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function action_12 () : void {
      ClaimContactDetailPopup.push(ClaimContactRole.Contact, ClaimContactRoleOwner.getClaim())
    }
    
    // 'action' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 16, column 225
    function action_9 () : void {
      AddressBookPickerPopup.push(ClaimContactRoleOwner.getMostSpecificContactType(role), ClaimContactRoleOwner.getClaim(), null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_10 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(ClaimContactRoleOwner.getMostSpecificContactType(role), ClaimContactRoleOwner.getClaim(), null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_13 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(ClaimContactRole.Contact, ClaimContactRoleOwner.getClaim())
    }
    
    // 'def' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_6 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(ClaimContactRoleOwner.getMostSpecificContactType(role), null, ClaimContactRoleOwner.getClaim())
    }
    
    // 'def' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_7 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(ClaimContactRoleOwner.getMostSpecificContactType(role), null, ClaimContactRoleOwner.getClaim())
    }
    
    // 'value' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimContactRole.Contact = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyCell (id=EditableWitnesses_WitnessStatementInd_Cell) at EditableWitnessesLV.pcf: line 45, column 38
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimContactRole.WitnessStatementInd = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on TypeKeyCell (id=EditableWitnesses_WitnessPosition_Cell) at EditableWitnessesLV.pcf: line 53, column 113
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimContactRole.WitnessPosition = (__VALUE_TO_SET as typekey.WitnessPosition)
    }
    
    // 'value' attribute on TextCell (id=EditableWitnesses_WitnessPerspective_Cell) at EditableWitnessesLV.pcf: line 59, column 56
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimContactRole.WitnessPerspective = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'onPick' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function onPick_14 (PickedValue :  Contact) : void {
      var contactType = ClaimContactRoleOwner.getMostSpecificContactType(role); var result = eval("ClaimContactRole.Contact = ClaimContactRoleOwner.getClaim().resolveContact(ClaimContactRole.Contact) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_18 () : java.lang.Object {
      return ClaimContactRoleOwner.getClaim().getRelatedContacts(ClaimContactRoleOwner.getContactTypes(role))
    }
    
    // 'value' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_17 () : java.lang.Object {
      return ClaimContactRole
    }
    
    // 'value' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function value_15 () : entity.Contact {
      return ClaimContactRole.Contact
    }
    
    // 'value' attribute on TypeKeyCell (id=EditableWitnesses_WitnessStatementInd_Cell) at EditableWitnessesLV.pcf: line 45, column 38
    function value_24 () : typekey.YesNo {
      return ClaimContactRole.WitnessStatementInd
    }
    
    // 'value' attribute on TypeKeyCell (id=EditableWitnesses_WitnessPosition_Cell) at EditableWitnessesLV.pcf: line 53, column 113
    function value_28 () : typekey.WitnessPosition {
      return ClaimContactRole.WitnessPosition
    }
    
    // 'value' attribute on TextCell (id=EditableWitnesses_WitnessPerspective_Cell) at EditableWitnessesLV.pcf: line 59, column 56
    function value_33 () : java.lang.String {
      return ClaimContactRole.WitnessPerspective
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_19 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_19 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_19 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_20 () : void {
      var __valueRangeArg = ClaimContactRoleOwner.getClaim().getRelatedContacts(ClaimContactRoleOwner.getContactTypes(role))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_19(__valueRangeArg)
    }
    
    // 'visible' attribute on TypeKeyCell (id=EditableWitnesses_WitnessPosition_Cell) at EditableWitnessesLV.pcf: line 53, column 113
    function visible_31 () : java.lang.Boolean {
      return not gw.config.LOBAbstraction.ForClaim.ForLOB.isHomeownersLine(ClaimContactRoleOwner.Claim)
    }
    
    // 'visible' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 14, column 229
    function visible_5 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 16, column 225
    function visible_8 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(ClaimContactRoleOwner.getMostSpecificContactType(role), ClaimContactRoleOwner.getClaim(), null as List<SpecialistService>)" != "" && true
    }
    
    property get ClaimContactRole () : entity.ClaimContactRole {
      return getIteratedValue(1) as entity.ClaimContactRole
    }
    
    
  }
  
  
}